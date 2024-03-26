import { Amplify } from "aws-amplify";

export function configureCognitoAuth(
  userPoolClientId = 'abcdefghij1234567890',
  userPoolId = 'us-east-1_abcd1234'
) {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolClientId,
        userPoolId,
      }
    }
  });
}

export function configureApiGateway(
  endpoint = 'https://abcdefghij1234567890.execute-api.us-east-1.amazonaws.com/stageName',
  region = 'us-east-1'
) {
  Amplify.configure({
    API: {
      REST: {
        YourAPIName: {
          endpoint,
          region
        }
      }
    }
  });
}

export function configureAppSync(
  endpoint = 'https://abcdefghij1234567890.appsync-api.us-east-1.amazonaws.com/graphql',
) {
  Amplify.configure({
    API: {
      GraphQL: {
        endpoint,
        defaultAuthMode: 'userPool',
        apiKey: 'da-abcdefghij1234567890', // Optional
        region: 'us-east-1', // Optional
        customEndpoint: 'https://example.com/graphql', // Optional
        customEndpointRegion: 'us-east-1' // Optional
      }
    }
  });
}