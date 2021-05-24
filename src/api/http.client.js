import axios from 'axios';

const httpClientInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

httpClientInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

httpClientInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const httpClient = httpClientInstance;
