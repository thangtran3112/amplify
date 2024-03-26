import { getCurrentUser } from "aws-amplify/auth";
import { fetchAuthSession } from 'aws-amplify/auth';

export async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
} 

/**
 * By default, API automatically refreshes the user's session when the authentication tokens 
 * have expired and a valid refreshToken is present
 */
export async function getCurrentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    return { accessToken, idToken };
  } catch (err) {
    console.log(err);
  }
}

/**
 * We can also force refreshing the session
 */
export async function refreshCurrentSession() {
  try {
    const { tokens } = await fetchAuthSession({ forceRefresh: true });
    const { accessToken, idToken } = tokens ?? {};
    return { accessToken, idToken };
  } catch (err) {
    console.log(err);
  }
}