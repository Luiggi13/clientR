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


export function deletePostApi(token, id) {
    const url = `${BASE_PATH}/${API_VERSION}/delete-post/${id}`;

    const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
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
          return err;
        });

}
export function addPostApi(token, post) {
    const url = `${BASE_PATH}/${API_VERSION}/add-post/`;

    const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body:JSON.stringify(post)
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