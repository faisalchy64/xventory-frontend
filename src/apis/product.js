import api from "../api";

export const getProducts = async (search, page) => {
  const { data } = await api.get(`/products?search=${search}&page=${page}`);
  return data;
};

export const getProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const manageProducts = async (apiPrivate, seller, page) => {
  const { data } = await apiPrivate.get(
    `/manage-products?seller=${seller}&page=${page}`
  );
  return data;
};

export const createProduct = async ({ apiPrivate, form }) => {
  const { data } = await apiPrivate.post("/products", form);
  return data;
};

export const updateProduct = async ({ apiPrivate, _id, form }) => {
  const { data } = await apiPrivate.patch(`/products/${_id}`, form);
  return data;
};

export const deleteProduct = async ({ apiPrivate, _id }) => {
  const { data } = await apiPrivate.delete(`/products/${_id}`);
  return data;
};
