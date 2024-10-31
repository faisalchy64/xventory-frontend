import api, { apiPrivate } from "../api";

export const signin = async (data) => {
  const response = await api.post("/signin", data);
  return response.data;
};

export const signup = async (data) => {
  const response = await api.post("/signup", data);
  return response.data;
};

export const signout = async () => {
  const response = await apiPrivate.get("/signout");
  return response.data;
};

export const userVerify = async (token) => {
  const response = await api.get(`/verify/${token}`);
  return response.data;
};

export const refreshToken = async (token) => {
  const response = await apiPrivate.get(`/verify/${token}`);
  return response.data;
};

export const forgotPassword = async (data) => {
  const response = await api.post("/forgot-password", data);
  return response.data;
};

export const resetPassword = async (token, data) => {
  const response = await api.patch(`/reset-password/${token}`, data);
  return response.data;
};
