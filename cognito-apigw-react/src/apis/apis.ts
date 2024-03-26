import axios from "axios";
import { getCurrentSession } from "./session.utils"

export async function  setAxiosGlobalHeaders() {
  const tokens = await getCurrentSession();

  axios.defaults.baseURL = 'https://api.example.com';
  axios.defaults.headers.common['Authorization'] = `${tokens!.idToken}`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
}

/* Call protected APIGW endpoint
 *
 * Important:
 *   Make sure apigw cognito authorizer configuration is complete
 *   Make sure api accepts id-token (no oauth scope defined in authorization)
 */
export async function fetchGet(endpoint : string) {
  const token = await getCurrentSession();

  const res = await fetch(endpoint, {
		method: 'GET',
		headers: {
      // 'Authorization' : `Bearer ${token!.idToken}`
			'Authorization': `${token!.idToken}`,
		},
	});
  const jsonResponse = await res.json();
  console.log(jsonResponse);
  return jsonResponse;
}


export async function axiosGet(endpoint : string) {
  const token = await getCurrentSession();  

  // set ID Token in "Authorization" header
  const response = await axios.get(endpoint, {
    headers: {
        'Authorization': `${token!.idToken}`,
        'Content-Type': 'application/json'
    }
  });
  return response;
}
