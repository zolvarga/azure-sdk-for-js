// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { env, Recorder } from "@azure/test-utils-recorder";

import { KeyClient } from "../../src";
import { authenticate } from "../utils/testAuthentication";
import TestClient from "../utils/testClient";
import { CreateOctKeyOptions } from "../../src/keysModels";

describe("Keys client - create, read, update and delete operations for managed HSM", () => {
  const keyPrefix = `CRUD${env.KEY_NAME || "KeyName"}`;
  let keySuffix: string;
  let hsmClient: KeyClient;
  let testClient: TestClient;
  let recorder: Recorder;

  beforeEach(
    /** @this Mocha.Context */ async function() {
      const authentication = await authenticate(this);
      recorder = authentication.recorder;

      if (!authentication.hsmClient) {
        // Managed HSM is not deployed for this run due to service resource restrictions so we skip these tests.
        // This is only necessary while Managed HSM is in preview.
        this.skip();
      }

      hsmClient = authentication.hsmClient;
      keySuffix = authentication.keySuffix;
      testClient = new TestClient(authentication.hsmClient);
    }
  );

  afterEach(async function() {
    await recorder.stop();
  });

  it("can create an OCT key with options", /** @this Mocha.Context */ async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this!.test!.title}-${keySuffix}`);
    const options: CreateOctKeyOptions = {
      hsm: true
    };
    const result = await hsmClient.createOctKey(keyName, options);
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    assert.equal(result.keyType, "oct-HSM");
    await testClient.flushKey(keyName);
  });
});
