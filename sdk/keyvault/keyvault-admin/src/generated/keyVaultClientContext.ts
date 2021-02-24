/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { KeyVaultClientOptionalParams } from "./models";

const packageName = "@azure/keyvault-admin";
export const packageVersion = "4.0.0-beta.3";

export class KeyVaultClientContext extends coreHttp.ServiceClient {
  apiVersion: string;

  /**
   * Initializes a new instance of the KeyVaultClientContext class.
   * @param options The parameter options
   */
  constructor(options?: KeyVaultClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{vaultBaseUrl}";

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "7.2";
  }
}
