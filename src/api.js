import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_ORIGIN,
});

export const apiPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_ORIGIN,
  withCredentials: true,
});

export default api;
