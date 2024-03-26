export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "rahasakapp0456c227": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "rahasakappauth": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "rahasakappauthapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "rahasakgraphqlapi": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "rahasakstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}