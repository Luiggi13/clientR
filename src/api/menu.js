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
