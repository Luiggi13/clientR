import { BASE_PATH, API_VERSION } from "./config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import jwtDecode from "jwt-decode";

export function getAccessTokenApi() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken || accessToken === "null") {
    return null;
  }

  return willExpireToken(accessToken) ? getRefreshTokenApi() : accessToken;
}

export function getRefreshTokenApi() {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  if (!refreshToken || refreshToken === "null") {
    logout();
    return null;
  }
  
  return willExpireToken(refreshToken) ? refreshAccessTokenApi(refreshToken) : refreshToken;
}

export function refreshAccessTokenApi(refreshToken) {
  const url = `${BASE_PATH}/${API_VERSION}/refresh-access-token`;
  const bodyObj = {
    refreshToken: refreshToken
  };
  const params = {
    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-Type": "application/json"
    }
  };

  fetch(url, params)
    .then(response => {
      if (response.status !== 200) {
        return null;
      }
      return response.json();
    })
    .then(result => {
      if (!result) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        logout();
      } else {
        const { accessToken, refreshToken } = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
      }
    });
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}

function willExpireToken(token) {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;
  
  return now > exp;
}