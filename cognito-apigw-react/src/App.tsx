import './App.css'
import { fetchAuthSession } from 'aws-amplify/auth';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
/**
 * If using an existing user pool: `amplify import auth` and `amplify push`
 * See: https://docs.amplify.aws/javascript/build-a-backend/auth/import-existing-resources/
 * If using a new user pool and a new client: `amplify add auth --user-pool-id <userPoolId> --client-id <clientId>`
 */
export default function App() {

  // Function to print access token and id token
  const printAccessTokenAndIdToken = async () => {
    try {
      const session = await fetchAuthSession();   // Fetch the authentication session
      console.log('Access Token:', session?.tokens?.accessToken.toString());
      console.log('ID Token:', session?.tokens?.idToken?.toString());
    }
    catch (e) { console.log(e); }
  };
    
  return (
    <Authenticator hideSignUp loginMechanisms={['username']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <button onClick={printAccessTokenAndIdToken}>Print Tokens</button>
        </main>
      )}
    </Authenticator>
  );
}

