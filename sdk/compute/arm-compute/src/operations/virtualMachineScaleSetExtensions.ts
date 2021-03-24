/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualMachineScaleSetExtensionsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a VirtualMachineScaleSetExtensions. */
export class VirtualMachineScaleSetExtensions {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a VirtualMachineScaleSetExtensions.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to create or update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or
   * updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Create VM scale set Extension operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetExtensionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetExtensionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,vmScaleSetName,vmssExtensionName,extensionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetExtensionsCreateOrUpdateResponse>;
  }

  /**
   * The operation to update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Update VM scale set Extension operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetExtensionsUpdateResponse>
   */
  update(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtensionUpdate, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetExtensionsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,vmScaleSetName,vmssExtensionName,extensionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineScaleSetExtensionsUpdateResponse>;
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be deleted.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,vmScaleSetName,vmssExtensionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to get the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetExtensionsGetResponse>
   */
  get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: Models.VirtualMachineScaleSetExtensionsGetOptionalParams): Promise<Models.VirtualMachineScaleSetExtensionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param callback The callback
   */
  get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options: Models.VirtualMachineScaleSetExtensionsGetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): void;
  get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: Models.VirtualMachineScaleSetExtensionsGetOptionalParams | msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>, callback?: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): Promise<Models.VirtualMachineScaleSetExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vmScaleSetName,
        vmssExtensionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualMachineScaleSetExtensionsGetResponse>;
  }

  /**
   * Gets a list of all extensions in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetExtensionsListResponse>
   */
  list(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetExtensionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param callback The callback
   */
  list(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): void;
  list(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>, callback?: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): Promise<Models.VirtualMachineScaleSetExtensionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vmScaleSetName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualMachineScaleSetExtensionsListResponse>;
  }

  /**
   * The operation to create or update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or
   * updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Create VM scale set Extension operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        vmssExtensionName,
        extensionParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * The operation to update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Update VM scale set Extension operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtensionUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        vmssExtensionName,
        extensionParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be deleted.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        vmssExtensionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of all extensions in a VM scale set.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetExtensionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetExtensionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>, callback?: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): Promise<Models.VirtualMachineScaleSetExtensionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualMachineScaleSetExtensionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.vmssExtensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expand0,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtensionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.vmssExtensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "extensionParameters",
    mapper: {
      ...Mappers.VirtualMachineScaleSetExtension,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    201: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.vmssExtensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "extensionParameters",
    mapper: {
      ...Mappers.VirtualMachineScaleSetExtensionUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    201: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
    Parameters.vmssExtensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtensionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
