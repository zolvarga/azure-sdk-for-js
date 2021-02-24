/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { IdentityRestClient } from "../identityRestClient";
import {
  CommunicationIdentityCreateOptionalParams,
  CommunicationIdentityCreateResponse,
  CommunicationIdentityAccessTokenRequest,
  CommunicationIdentityIssueAccessTokenResponse
} from "../models";

/**
 * Class representing a CommunicationIdentity.
 */
export class CommunicationIdentity {
  private readonly client: IdentityRestClient;

  /**
   * Initialize a new instance of the class CommunicationIdentity class.
   * @param client Reference to the service client
   */
  constructor(client: IdentityRestClient) {
    this.client = client;
  }

  /**
   * Create a new identity.
   * @param options The options parameters.
   */
  create(
    options?: CommunicationIdentityCreateOptionalParams
  ): Promise<CommunicationIdentityCreateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      createOperationSpec
    ) as Promise<CommunicationIdentityCreateResponse>;
  }

  /**
   * Delete the identity, revoke all tokens for the identity and delete all associated data.
   * @param id Identifier of the identity to be deleted.
   * @param options The options parameters.
   */
  delete(id: string, options?: coreHttp.OperationOptions): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { id, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Revoke all access tokens for the specific identity.
   * @param id Identifier of the identity.
   * @param options The options parameters.
   */
  revokeAccessTokens(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { id, options: operationOptions },
      revokeAccessTokensOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Issue a new token for an identity.
   * @param id Identifier of the identity to issue token for.
   * @param body Requesting scopes for the new token.
   * @param options The options parameters.
   */
  issueAccessToken(
    id: string,
    body: CommunicationIdentityAccessTokenRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CommunicationIdentityIssueAccessTokenResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { id, body, options: operationOptions },
      issueAccessTokenOperationSpec
    ) as Promise<CommunicationIdentityIssueAccessTokenResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/identities",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.CommunicationIdentityAccessTokenResult
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/identities/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  serializer
};
const revokeAccessTokensOperationSpec: coreHttp.OperationSpec = {
  path: "/identities/{id}/:revokeAccessTokens",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  serializer
};
const issueAccessTokenOperationSpec: coreHttp.OperationSpec = {
  path: "/identities/{id}/:issueAccessToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationIdentityAccessToken
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
