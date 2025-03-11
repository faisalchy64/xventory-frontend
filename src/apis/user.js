import api from "../api";

export const signin = async (payload) => {
  const { data } = await api.post("/signin", payload);

  if (data && data.status === 200) {
    localStorage.setItem("auth", JSON.stringify(data.data));
  }

  return data;
};

export const signup = async (payload) => {
  const { data } = await api.post("/signup", payload);

  if (data && data.status === 201) {
    sessionStorage.setItem("temp", payload.email);
  }

  return data;
};

export const withGoogle = async (payload) => {
  const { data } = await api.post("/google", payload);

  if (data && data.status === 200) {
    localStorage.setItem("auth", JSON.stringify(data.data));
  }

  return data;
};

export const verifyCode = async (payload) => {
  const { data } = await api.post("/verify", payload);

  if (data && data.status === 200) {
    sessionStorage.removeItem("temp");
  }

  return data;
};

export const signout = async (payload) => {
  const { data } = await api.patch("/signout", payload);
  return data;
};

export const forgotPassword = async (payload) => {
  const { data } = await api.patch("/forgot-password", payload);

  if (data && data.status === 200) {
    sessionStorage.setItem("temp", payload.email);
  }

  return data;
};

export const resetPassword = async (payload) => {
  const { data } = await api.patch("/reset-password", payload);

  if (data && data.status === 200) {
    sessionStorage.removeItem("temp");
  }

  return data;
};
