/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const AcrErrors: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcrErrors",
    modelProperties: {
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AcrErrorInfo"
            }
          }
        }
      }
    }
  }
};

export const AcrErrorInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcrErrorInfo",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      detail: {
        serializedName: "detail",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const Manifest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Manifest",
    modelProperties: {
      schemaVersion: {
        serializedName: "schemaVersion",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Repositories: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Repositories",
    modelProperties: {
      names: {
        serializedName: "repositories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RepositoryAttributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RepositoryAttributes",
    modelProperties: {
      registry: {
        serializedName: "registry",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "imageName",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedOn: {
        serializedName: "lastUpdateTime",
        type: {
          name: "DateTime"
        }
      },
      registryArtifactCount: {
        serializedName: "manifestCount",
        type: {
          name: "Number"
        }
      },
      tagCount: {
        serializedName: "tagCount",
        type: {
          name: "Number"
        }
      },
      writeableProperties: {
        serializedName: "changeableAttributes",
        type: {
          name: "Composite",
          className: "ChangeableAttributes"
        }
      }
    }
  }
};

export const ChangeableAttributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChangeableAttributes",
    modelProperties: {
      canDelete: {
        serializedName: "deleteEnabled",
        type: {
          name: "Boolean"
        }
      },
      canWrite: {
        serializedName: "writeEnabled",
        type: {
          name: "Boolean"
        }
      },
      canList: {
        serializedName: "listEnabled",
        type: {
          name: "Boolean"
        }
      },
      canRead: {
        serializedName: "readEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DeletedRepository: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedRepository",
    modelProperties: {
      deletedRegistryArtifactDigests: {
        serializedName: "manifestsDeleted",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      deletedTags: {
        serializedName: "tagsDeleted",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const TagList: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagList",
    modelProperties: {
      registry: {
        serializedName: "registry",
        type: {
          name: "String"
        }
      },
      imageName: {
        serializedName: "imageName",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TagAttributesBase"
            }
          }
        }
      }
    }
  }
};

export const TagAttributesBase: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagAttributesBase",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      digest: {
        serializedName: "digest",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedOn: {
        serializedName: "lastUpdateTime",
        type: {
          name: "DateTime"
        }
      },
      modifiableProperties: {
        serializedName: "changeableAttributes",
        type: {
          name: "Composite",
          className: "ChangeableAttributes"
        }
      }
    }
  }
};

export const TagAttributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagAttributes",
    modelProperties: {
      registry: {
        serializedName: "registry",
        type: {
          name: "String"
        }
      },
      repository: {
        serializedName: "imageName",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "tag.name",
        type: {
          name: "String"
        }
      },
      digest: {
        serializedName: "tag.digest",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "tag.createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedOn: {
        serializedName: "tag.lastUpdateTime",
        type: {
          name: "DateTime"
        }
      },
      modifiableProperties: {
        serializedName: "tag.changeableAttributes",
        type: {
          name: "Composite",
          className: "ChangeableAttributes"
        }
      }
    }
  }
};

export const AcrManifests: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcrManifests",
    modelProperties: {
      registry: {
        serializedName: "registry",
        type: {
          name: "String"
        }
      },
      imageName: {
        serializedName: "imageName",
        type: {
          name: "String"
        }
      },
      manifestsAttributes: {
        serializedName: "manifests",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManifestAttributesBase"
            }
          }
        }
      }
    }
  }
};

export const ManifestAttributesBase: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManifestAttributesBase",
    modelProperties: {
      digest: {
        serializedName: "digest",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "imageSize",
        type: {
          name: "Number"
        }
      },
      createdOn: {
        serializedName: "createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedOn: {
        serializedName: "lastUpdateTime",
        type: {
          name: "DateTime"
        }
      },
      cpuArchitecture: {
        serializedName: "architecture",
        type: {
          name: "String"
        }
      },
      operatingSystem: {
        serializedName: "os",
        type: {
          name: "String"
        }
      },
      manifestMediaType: {
        serializedName: "mediaType",
        type: {
          name: "String"
        }
      },
      configMediaType: {
        serializedName: "configMediaType",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      manifestProperties: {
        serializedName: "changeableAttributes",
        type: {
          name: "Composite",
          className: "ChangeableAttributes"
        }
      }
    }
  }
};

export const ManifestAttributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManifestAttributes",
    modelProperties: {
      registry: {
        serializedName: "registry",
        type: {
          name: "String"
        }
      },
      repository: {
        serializedName: "imageName",
        type: {
          name: "String"
        }
      },
      digest: {
        serializedName: "manifest.digest",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "manifest.imageSize",
        type: {
          name: "Number"
        }
      },
      createdOn: {
        serializedName: "manifest.createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedOn: {
        serializedName: "manifest.lastUpdateTime",
        type: {
          name: "DateTime"
        }
      },
      cpuArchitecture: {
        serializedName: "manifest.architecture",
        type: {
          name: "String"
        }
      },
      operatingSystem: {
        serializedName: "manifest.os",
        type: {
          name: "String"
        }
      },
      manifestMediaType: {
        serializedName: "manifest.mediaType",
        type: {
          name: "String"
        }
      },
      configMediaType: {
        serializedName: "manifest.configMediaType",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "manifest.tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      manifestProperties: {
        serializedName: "manifest.changeableAttributes",
        type: {
          name: "Composite",
          className: "ChangeableAttributes"
        }
      }
    }
  }
};

export const Paths108HwamOauth2ExchangePostRequestbodyContentApplicationXWwwFormUrlencodedSchema: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths108HwamOauth2ExchangePostRequestbodyContentApplicationXWwwFormUrlencodedSchema",
    modelProperties: {
      grantType: {
        serializedName: "grant_type",
        required: true,
        type: {
          name: "String"
        }
      },
      service: {
        serializedName: "service",
        required: true,
        type: {
          name: "String"
        }
      },
      tenant: {
        serializedName: "tenant",
        type: {
          name: "String"
        }
      },
      refreshToken: {
        serializedName: "refresh_token",
        type: {
          name: "String"
        }
      },
      accessToken: {
        serializedName: "access_token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RefreshToken: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RefreshToken",
    modelProperties: {
      refreshToken: {
        serializedName: "refresh_token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsV3R3RxOauth2TokenPostRequestbodyContentApplicationXWwwFormUrlencodedSchema: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsV3R3RxOauth2TokenPostRequestbodyContentApplicationXWwwFormUrlencodedSchema",
    modelProperties: {
      grantType: {
        defaultValue: "refresh_token",
        isConstant: true,
        serializedName: "grant_type",
        type: {
          name: "String"
        }
      },
      service: {
        serializedName: "service",
        required: true,
        type: {
          name: "String"
        }
      },
      scope: {
        serializedName: "scope",
        required: true,
        type: {
          name: "String"
        }
      },
      refreshToken: {
        serializedName: "refresh_token",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccessToken: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccessToken",
    modelProperties: {
      accessToken: {
        serializedName: "access_token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RepositoryTags: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RepositoryTags",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ImageSignature: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageSignature",
    modelProperties: {
      header: {
        serializedName: "header",
        type: {
          name: "Composite",
          className: "Jwk"
        }
      },
      signature: {
        serializedName: "signature",
        type: {
          name: "String"
        }
      },
      protected: {
        serializedName: "protected",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Jwk: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Jwk",
    modelProperties: {
      jwk: {
        serializedName: "jwk",
        type: {
          name: "Composite",
          className: "JWKHeader"
        }
      },
      alg: {
        serializedName: "alg",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const JWKHeader: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JWKHeader",
    modelProperties: {
      crv: {
        serializedName: "crv",
        type: {
          name: "String"
        }
      },
      kid: {
        serializedName: "kid",
        type: {
          name: "String"
        }
      },
      kty: {
        serializedName: "kty",
        type: {
          name: "String"
        }
      },
      x: {
        serializedName: "x",
        type: {
          name: "String"
        }
      },
      y: {
        serializedName: "y",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const History: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "History",
    modelProperties: {
      v1Compatibility: {
        serializedName: "v1Compatibility",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FsLayer: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FsLayer",
    modelProperties: {
      blobSum: {
        serializedName: "blobSum",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Descriptor: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Descriptor",
    modelProperties: {
      mediaType: {
        serializedName: "mediaType",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "Number"
        }
      },
      digest: {
        serializedName: "digest",
        type: {
          name: "String"
        }
      },
      urls: {
        serializedName: "urls",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Composite",
          className: "Annotations"
        }
      }
    }
  }
};

export const Annotations: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Annotations",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      created: {
        serializedName: "org\\.opencontainers.image.created",
        type: {
          name: "DateTime"
        }
      },
      authors: {
        serializedName: "org\\.opencontainers.image.authors",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "org\\.opencontainers.image.url",
        type: {
          name: "String"
        }
      },
      documentation: {
        serializedName: "org\\.opencontainers.image.documentation",
        type: {
          name: "String"
        }
      },
      source: {
        serializedName: "org\\.opencontainers.image.source",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "org\\.opencontainers.image.version",
        type: {
          name: "String"
        }
      },
      revision: {
        serializedName: "org\\.opencontainers.image.revision",
        type: {
          name: "String"
        }
      },
      vendor: {
        serializedName: "org\\.opencontainers.image.vendor",
        type: {
          name: "String"
        }
      },
      licenses: {
        serializedName: "org\\.opencontainers.image.licenses",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "org\\.opencontainers.image.ref.name",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "org\\.opencontainers.image.title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "org\\.opencontainers.image.description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagAttributesTag: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagAttributesTag",
    modelProperties: {
      signatureRecord: {
        serializedName: "signatureRecord",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManifestAttributesManifestReferences: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManifestAttributesManifestReferences",
    modelProperties: {
      digest: {
        serializedName: "digest",
        type: {
          name: "String"
        }
      },
      architecture: {
        serializedName: "architecture",
        type: {
          name: "String"
        }
      },
      os: {
        serializedName: "os",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManifestAttributesManifest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManifestAttributesManifest",
    modelProperties: {
      references: {
        serializedName: "references",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManifestAttributesManifestReferences"
            }
          }
        }
      },
      quarantineTag: {
        serializedName: "quarantineTag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManifestChangeableAttributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManifestChangeableAttributes",
    modelProperties: {
      deleteEnabled: {
        serializedName: "deleteEnabled",
        type: {
          name: "Boolean"
        }
      },
      writeEnabled: {
        serializedName: "writeEnabled",
        type: {
          name: "Boolean"
        }
      },
      listEnabled: {
        serializedName: "listEnabled",
        type: {
          name: "Boolean"
        }
      },
      readEnabled: {
        serializedName: "readEnabled",
        type: {
          name: "Boolean"
        }
      },
      quarantineState: {
        serializedName: "quarantineState",
        type: {
          name: "String"
        }
      },
      quarantineDetails: {
        serializedName: "quarantineDetails",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManifestListAttributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManifestListAttributes",
    modelProperties: {
      mediaType: {
        serializedName: "mediaType",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "Number"
        }
      },
      digest: {
        serializedName: "digest",
        type: {
          name: "String"
        }
      },
      platform: {
        serializedName: "platform",
        type: {
          name: "Composite",
          className: "Platform"
        }
      }
    }
  }
};

export const Platform: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Platform",
    modelProperties: {
      architecture: {
        serializedName: "architecture",
        type: {
          name: "String"
        }
      },
      os: {
        serializedName: "os",
        type: {
          name: "String"
        }
      },
      osVersion: {
        serializedName: "os\\.version",
        type: {
          name: "String"
        }
      },
      osFeatures: {
        serializedName: "os\\.features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      variant: {
        serializedName: "variant",
        type: {
          name: "String"
        }
      },
      features: {
        serializedName: "features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ManifestWrapper: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManifestWrapper",
    modelProperties: {
      ...Manifest.type.modelProperties,
      mediaType: {
        serializedName: "mediaType",
        type: {
          name: "String"
        }
      },
      manifests: {
        serializedName: "manifests",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManifestListAttributes"
            }
          }
        }
      },
      config: {
        serializedName: "config",
        type: {
          name: "Composite",
          className: "Descriptor"
        }
      },
      layers: {
        serializedName: "layers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Descriptor"
            }
          }
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Composite",
          className: "Annotations"
        }
      },
      architecture: {
        serializedName: "architecture",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "String"
        }
      },
      fsLayers: {
        serializedName: "fsLayers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FsLayer"
            }
          }
        }
      },
      history: {
        serializedName: "history",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "History"
            }
          }
        }
      },
      signatures: {
        serializedName: "signatures",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageSignature"
            }
          }
        }
      }
    }
  }
};

export const ManifestList: coreHttp.CompositeMapper = {
  serializedName: "application/vnd.docker.distribution.manifest.list.v2+json",
  type: {
    name: "Composite",
    className: "ManifestList",
    modelProperties: {
      ...Manifest.type.modelProperties,
      mediaType: {
        serializedName: "mediaType",
        type: {
          name: "String"
        }
      },
      manifests: {
        serializedName: "manifests",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManifestListAttributes"
            }
          }
        }
      }
    }
  }
};

export const V2Manifest: coreHttp.CompositeMapper = {
  serializedName: "application/vnd.docker.distribution.manifest.v2+json",
  type: {
    name: "Composite",
    className: "V2Manifest",
    modelProperties: {
      ...Manifest.type.modelProperties,
      mediaType: {
        serializedName: "mediaType",
        type: {
          name: "String"
        }
      },
      config: {
        serializedName: "config",
        type: {
          name: "Composite",
          className: "Descriptor"
        }
      },
      layers: {
        serializedName: "layers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Descriptor"
            }
          }
        }
      }
    }
  }
};

export const OCIManifest: coreHttp.CompositeMapper = {
  serializedName: "application/vnd.oci.image.manifest.v1+json",
  type: {
    name: "Composite",
    className: "OCIManifest",
    modelProperties: {
      ...Manifest.type.modelProperties,
      config: {
        serializedName: "config",
        type: {
          name: "Composite",
          className: "Descriptor"
        }
      },
      layers: {
        serializedName: "layers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Descriptor"
            }
          }
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Composite",
          className: "Annotations"
        }
      }
    }
  }
};

export const OCIIndex: coreHttp.CompositeMapper = {
  serializedName: "application/vnd.oci.image.index.v1+json",
  type: {
    name: "Composite",
    className: "OCIIndex",
    modelProperties: {
      ...Manifest.type.modelProperties,
      manifests: {
        serializedName: "manifests",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManifestListAttributes"
            }
          }
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Composite",
          className: "Annotations"
        }
      }
    }
  }
};

export const V1Manifest: coreHttp.CompositeMapper = {
  serializedName: "application/vnd.oci.image.manifest.v1+json",
  type: {
    name: "Composite",
    className: "V1Manifest",
    modelProperties: {
      ...Manifest.type.modelProperties,
      architecture: {
        serializedName: "architecture",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "String"
        }
      },
      fsLayers: {
        serializedName: "fsLayers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FsLayer"
            }
          }
        }
      },
      history: {
        serializedName: "history",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "History"
            }
          }
        }
      },
      signatures: {
        serializedName: "signatures",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageSignature"
            }
          }
        }
      }
    }
  }
};

export const ContainerRegistryGetRepositoriesHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryGetRepositoriesHeaders",
    modelProperties: {
      link: {
        serializedName: "link",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryRepositoryCreateManifestHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryRepositoryCreateManifestHeaders",
    modelProperties: {
      dockerContentDigest: {
        serializedName: "docker-content-digest",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      contentLength: {
        serializedName: "content-length",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ContainerRegistryBlobGetBlobHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobGetBlobHeaders",
    modelProperties: {
      contentLength: {
        serializedName: "content-length",
        type: {
          name: "Number"
        }
      },
      dockerContentDigest: {
        serializedName: "docker-content-digest",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobCheckBlobExistsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobCheckBlobExistsHeaders",
    modelProperties: {
      contentLength: {
        serializedName: "content-length",
        type: {
          name: "Number"
        }
      },
      dockerContentDigest: {
        serializedName: "docker-content-digest",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobDeleteBlobHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobDeleteBlobHeaders",
    modelProperties: {
      dockerContentDigest: {
        serializedName: "docker-content-digest",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobMountBlobHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobMountBlobHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      dockerUploadUuid: {
        serializedName: "docker-upload-uuid",
        type: {
          name: "String"
        }
      },
      dockerContentDigest: {
        serializedName: "docker-content-digest",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobGetUploadStatusHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobGetUploadStatusHeaders",
    modelProperties: {
      range: {
        serializedName: "range",
        type: {
          name: "String"
        }
      },
      dockerUploadUuid: {
        serializedName: "docker-upload-uuid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobUploadChunkHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobUploadChunkHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      range: {
        serializedName: "range",
        type: {
          name: "String"
        }
      },
      dockerUploadUuid: {
        serializedName: "docker-upload-uuid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobCompleteUploadHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobCompleteUploadHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      range: {
        serializedName: "range",
        type: {
          name: "String"
        }
      },
      dockerContentDigest: {
        serializedName: "docker-content-digest",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobStartUploadHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobStartUploadHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      range: {
        serializedName: "range",
        type: {
          name: "String"
        }
      },
      dockerUploadUuid: {
        serializedName: "docker-upload-uuid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobGetChunkHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobGetChunkHeaders",
    modelProperties: {
      contentLength: {
        serializedName: "content-length",
        type: {
          name: "Number"
        }
      },
      contentRange: {
        serializedName: "content-range",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryBlobCheckChunkExistsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerRegistryBlobCheckChunkExistsHeaders",
    modelProperties: {
      contentLength: {
        serializedName: "content-length",
        type: {
          name: "Number"
        }
      },
      contentRange: {
        serializedName: "content-range",
        type: {
          name: "String"
        }
      }
    }
  }
};
