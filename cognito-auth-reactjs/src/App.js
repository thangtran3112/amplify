import logo from './logo.svg';
import './App.css';
import Amplify, {API, Auth} from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'

// import the API & graphqlOperation helpers as well as the query
import { graphqlOperation } from 'aws-amplify'
import { listDocuments } from './graphql/queries'
import { createDocument } from './graphql/mutations'

// configure amplify
// this can be added in index.js as well
Amplify.configure(awsconfig);
Auth.configure(awsconfig);
Storage.configure({ level: 'private' });

function App() {

  async function listDocs() {
    API.graphql(graphqlOperation(listDocuments)).then((evt) => {
            evt.data.listDocuments.items.map((document, i) => {
            console.log("name: ", document.name)
        });
    });
  }

  async function createDoc() {
    const doc = {
        name: `rahasak (${new Date().toLocaleString()})`,
        sender: "bassa",
        sender: "kukula",
    };

    API.graphql(graphqlOperation(createDocument, { input: doc }));
    console.log("document created: ", doc.name)
  }

  async function callApi() {
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    console.log("token: ", token)

    const requestData = {
        headers: {
            Authorization: token
        }
    }
    const data = await API.get('rahasakappauthapi', '/documents', requestData)
    console.log("data: ", data)
  }

  const [images, setImages] = useState([])
    useEffect(() => {
      fetchImages()
  }, [])

  async function fetchImages() {
    let imageKeys = await Storage.list('')
    imageKeys = await Promise.all(imageKeys.map(async k => {
      const key = await Storage.get(k.key)
      return key
    }))
    console.log('imageKeys: ', imageKeys)
    setImages(imageKeys)
  }

  async function onChange(e) {
    const file = e.target.files[0];
    const result = await Storage.put(file.name, file, {
      contentType: 'image/png'
    })
    console.log({ result })
    fetchImages()
  }

  const { signOut } = useAuthenticator()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={createDoc}>Create Document</button>
        <button onClick={listDocs}>List Documents</button>
        <button onClick={callApi}>Call API</button>
        <button onClick={() => signOut()}>Log Out</button>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
            images.map(image => (
                <img
                src={image}
                key={image}
                style={{width: 500, height: 300}}
                />
            ))
            }
        </div>
        <input
            type="file"
            onChange={onChange}
        />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
