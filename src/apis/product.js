import api, { apiPrivate } from "../api";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (data) => {
  const response = await apiPrivate.post("/products", data);
  return response.data;
};

export const updateProduct = async (id, data) => {
  const response = await apiPrivate.patch(`/products/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await apiPrivate.delete(`/products/${id}`);
  return response.data;
};
