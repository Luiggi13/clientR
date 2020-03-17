import {API_VERSION, BASE_PATH} from "./config";

export function getMenuApi() {
    const url = `${BASE_PATH}/${API_VERSION}/get-menus/asc`;

    return fetch(url)
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

export function updateMenuApi(token, menuId, data) {
    const url = `${BASE_PATH}/${API_VERSION}/update-menu/${menuId}`;

    const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result.message;
    })
    .catch(err => {
      return err;
    });

}