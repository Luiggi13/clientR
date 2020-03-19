import {API_VERSION, BASE_PATH} from "./config";

export function subscribeNewsletterApi(email) {
    const url = `${BASE_PATH}/${API_VERSION}/subscribe-newsletter/${email.toLowerCase()}`;

    const params = {
      method: "POST"
    };

    return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}