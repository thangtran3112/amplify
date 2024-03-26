## Libraries
* [aws-amplify](https://www.npmjs.com/package/aws-amplify): main library for handling backend
* [@aws-amplify/ui-react](https://ui.docs.amplify.aws/react): React UI component with Connected Authenticator

## Amplify connected components and methods:
* [Using idToken for API call](https://docs.amplify.aws/javascript/build-a-backend/restapi/customize-authz/#cognito-user-pool-authorization)
* [Using API Gateway with Amplify](https://docs.amplify.aws/javascript/build-a-backend/restapi/configure-rest-api/)
* [Fetch API Gateway](https://docs.amplify.aws/javascript/build-a-backend/restapi/fetch-data/)
* [Updating API Gateway](https://docs.amplify.aws/javascript/build-a-backend/restapi/update-data/)


## Use existing AWS resources
* [Existing Amazon API Gateway]((https://docs.amplify.aws/javascript/build-a-backend/restapi/existing-resources/)) resources can be used with the 
Amplify Libraries by calling `Amplify.configure()` with the API Gateway API name and options.
* [Existing Cognito Pool Configuration](https://docs.amplify.aws/javascript/build-a-backend/auth/import-existing-resources/) with:
```
amplify import auth
amplify push
```

## Post Logging-In with <Authenticator> or `withAuthenticator`
* We can access `accessToken` and `idToken` from `fetchAuthSession()`
* We can pass `Authorization`:`idToken` into headers of `fetch` or `axios` to call API gateway