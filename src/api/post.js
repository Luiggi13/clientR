import {API_VERSION, BASE_PATH} from "./config";

export function getPostsApi(limit, page){
    const url = `${BASE_PATH}/${API_VERSION}/get-posts?limit=${limit}&page=${page}`;

    return fetch(url)
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
