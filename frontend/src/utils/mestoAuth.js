export const BASE_URL = "https://auth.nomoreparties.co";
export const URL_DEV = "http://104.131.160.75:3000";

const makeRequest = (url, method, body, token) => {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers };

  if (token !== undefined) headers["Authorization"] = `Bearer ${token}`;
  if (body !== undefined) config.body = JSON.stringify(body);

  return fetch(`${URL_DEV}${url}`, config).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
};

export const registerUser = (password, email) => {
  return makeRequest("/signup", "POST", { password, email });
};

export const authorizeUser = (password, email) => {
  return makeRequest("/signin", "POST", { password, email });
};

export const getUserData = (token) => {
  return makeRequest("/users/me", "GET", undefined, token);
};
