// utils/api.js
import axios from "axios";
import { getToken } from "./auth"; // Import your token retrieval function

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000", // Set your backend URL
});

// Add a request interceptor to attach the token to every request
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
