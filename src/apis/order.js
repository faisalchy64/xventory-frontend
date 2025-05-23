import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

export const manageOrders = async (apiPrivate, seller, page) => {
  const { data } = await apiPrivate.get(
    `/orders?seller=${seller}&page=${page}`
  );
  return data;
};

export const purchaseHistory = async (apiPrivate, customer, page) => {
  const { data } = await apiPrivate.get(
    `/purchase-history?customer=${customer}&page=${page}`
  );
  return data;
};

export const createOrder = async ({ apiPrivate, payload }) => {
  const { data } = await apiPrivate.post("/orders", payload);
  return data;
};

export const updateOrder = async ({ apiPrivate, _id, payload }) => {
  const { data } = await apiPrivate.patch(`/orders/${_id}`, payload);
  return data;
};

export const getCheckoutSession = async (apiPrivate, session_id) => {
  const { data } = await apiPrivate.get(
    `/checkout-session?session_id=${session_id}`
  );
  return data;
};

export const createCheckoutSession = async ({ apiPrivate, payload }) => {
  try {
    const { data } = await apiPrivate.post("/create-checkout-session", payload);
    const { sessionId } = data.data;
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.log(error.message);
  }
};
