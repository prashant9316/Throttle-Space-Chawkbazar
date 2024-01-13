import axios from "axios";
import { getToken } from "./get-token";

// const baseURL = 'http://localhost:5055'
const baseURL = 'https://throttle-space-admin.onrender.com'

const http = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
