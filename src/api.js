import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ORIGIN,
  withCredentials: true,
});

export const apiPrivate = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ORIGIN,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default api;
