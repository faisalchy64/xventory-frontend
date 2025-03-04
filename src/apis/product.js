export const getProducts = async (apiPrivate) => {
  const { data } = await apiPrivate.get("/products");
  return data;
};

export const getProduct = async (apiPrivate, id) => {
  const { data } = await apiPrivate.get(`/products/${id}`);
  return data;
};

export const manageProduct = async (apiPrivate, seller, page) => {
  const { data } = await apiPrivate.get(
    `/manage-products/${seller}?page=${page}`
  );
  return data;
};

export const createProduct = async ({ apiPrivate, form }) => {
  const { data } = await apiPrivate.post("/products", form);
  return data;
};

export const updateProduct = async (apiPrivate, payload) => {
  const { data } = await apiPrivate.patch("/products", payload);
  return data;
};

export const deleteProduct = async (apiPrivate, id) => {
  const { data } = await apiPrivate.delete(`/products/${id}`);
  return data;
};
