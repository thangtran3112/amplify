import { del, get, post, put } from "aws-amplify/api";

/**
 * Require `Amplify.configure()` before calling APIGateway 
 * */
export async function postTodo() {
  try {
    const restOperation = post({
      apiName: 'todoApi',
      path: '/todo',
      options: {
        body: {
          message: 'Mow the lawn'
        }
      }
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    console.log('POST call succeeded');
    console.log(response);
  } catch (e : any) {
    console.log('POST call failed: ', JSON.parse(e.response.body));
  }
}

/**
 * Require `Amplify.configure()` before calling APIGateway 
 * */
export async function deleteTodo() {
    try {
      const restOperation = del({
        apiName: 'todo-api',
        path: '/todo/1'
      });
      await restOperation.response;
      console.log('DELETE call succeeded');
      return restOperation.response
    } catch (e: any) {
      console.log('DELETE call failed: ', JSON.parse(e.response.body));
    }
  }

export async function updateTodo() {
  try {
    const todo = { name: 'My first todo', message: 'Hello world!' };
    const restOperation = put({
      apiName: 'todo-api',
      path: 'todo/1',
      options: {
        body: todo
      }
    });
    const response = await restOperation.response;
    console.log('PUT call succeeded: ', response);
    return response;
  } catch (e : any) {
    console.log('PUT call failed: ', JSON.parse(e.response.body));
  }
}

/**
 * Require `Amplify.configure()` before calling APIGateway 
 * */
export async function getTodo() {
  try {
    const restOperation = get({
      apiName: 'todo-api',
      path: '/todo',
      options: {
        queryParams: {
          id: '123'
        }
      }
    });
    const response = await restOperation.response;
    console.log('GET call succeeded: ', response);
    return response;
  } catch (e : any) {
    console.log('GET call failed: ', JSON.parse(e.response.body));
  }
}