import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

export const createOrder = async ({ apiPrivate, payload }) => {
  const { data } = await apiPrivate.post("/orders", payload);
  return data;
};

export const checkoutSession = async ({ apiPrivate, payload }) => {
  try {
    const { data } = await apiPrivate.post("/create-checkout-session", payload);
    const { sessionId } = data.data;
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.log(error.message);
  }
};
