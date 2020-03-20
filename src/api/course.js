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

export function getCourseDataUdemyApi(id){

    const baseUrl = `https://www.udemy.com/api-2.0/courses/${id}`;
    const coursesParams = "?fields[course]=title,headline,url,price,image_480x270";
    const  url = baseUrl + coursesParams;

    return fetch(url)
    .then(async response => {
        return {code: response.status, data: await response.json()}
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return err;
    });

}