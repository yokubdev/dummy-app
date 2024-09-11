import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { get } from "radash";

import config from "@/shared/config";

import storage from "./storage";

const checkTokens = () => {
  const accessToken = storage.local.get(config.api.accessTokenKey);
  const refreshToken = storage.local.get(config.api.refreshTokenKey);
  const alreadyRedirected = storage.local.get("alreadyRedirected");

  if (!accessToken || !refreshToken) {
    if (!alreadyRedirected) {
      storage.local.set("alreadyRedirected", true);
      window.location.href = "/login"; // Redirect to login page
    }
    return false;
  }

  // Clear the flag if tokens are present
  storage.local.remove("alreadyRedirected");
  return true;
};

const pureHttp = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // 'Accept-Language':'ru',
  },
});

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((axiosConfig) => {
  const accessToken = storage.local.get(config.api.accessTokenKey) || "";

  if (accessToken) {
    axiosConfig.headers.Authorization = `${accessToken}`;
  }

  return axiosConfig;
});

const refreshToken = async () => {
  const refresh_token = storage.local.get(config.api.refreshTokenKey) || "";

  try {
    const { data } = await pureHttp.post("/admin/v1/token/refresh", {
      refresh_token,
    });
    storage.local.set(config.api.accessTokenKey, get(data, "access_token"));
  } catch (error) {
    storage.local.remove(config.api.accessTokenKey);
    storage.local.remove(config.api.refreshTokenKey);
    throw error; // This will propagate the error to the interceptor
  }
};

// Create an interceptor to refresh the token
createAuthRefreshInterceptor(http, refreshToken);

// new added // Add an interceptor to check tokens and reload the page when the refresh token fails
http.interceptors.request.use(
  (config) => {
    if (!checkTokens()) {
      return Promise.reject(new Error("Tokens are missing"));
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add an interceptor to reload the page when the refresh token fails
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default { pureRequest: pureHttp, request: http };
