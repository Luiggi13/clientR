import {API_VERSION, BASE_PATH} from "./config";


export function signUpApi(data) {
    const url = `${BASE_PATH}/${API_VERSION}/sign-up`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      };
      return fetch(url, params)
        .then(response => {
          return response.json();
        })
        .then(result => {
          if (result.user) {
            return { ok: true, message: "Usuario creado correctamente" };
          }
          return { ok: false, message: result.message };
        })
        .catch(err => {
          return { ok: false, message: err.message };
        });
}

export function signInApi(data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-in`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
        .then(response => {
          return response.json();
        })
        .then(result => {
          return result;
        })
        .catch(err => {
          return err.message;
        });
  

}

export function getUsersApi(token) {
  const url = `${BASE_PATH}/${API_VERSION}/users`;
  const params = {
    method: "GET",
    // body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  };

  return fetch(url, params)
  .then(response => {
    return response.json();
  })
  .then(result => {
    return result;
  })
  .catch(err => {
    return err.message;
  });
}