import {API_VERSION, BASE_PATH} from "./config";

export function getCoursesApi() {
    const url = `${BASE_PATH}/${API_VERSION}/get-courses`;


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