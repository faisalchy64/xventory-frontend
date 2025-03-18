export const createOrder = async ({ apiPrivate, payload }) => {
  const { data } = await apiPrivate.post("/orders", payload);
  return data;
};
