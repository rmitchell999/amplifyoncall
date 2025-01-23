export type AmplifyDependentResourcesAttributes = {
  "api": {
    "amplifyoncall": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "amplifyoncall361d2ced": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "TerneuzenAdminGroupRole": "string",
      "TerneuzenReadOnlyGroupRole": "string"
    }
  },
  "function": {
    "S3Trigger446736ca": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3storage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}