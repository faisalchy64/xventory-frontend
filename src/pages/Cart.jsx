import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Plus, Minus } from "lucide-react";
import useAuth from "../hooks/useAuth";
import useApiPrivate from "../hooks/useApiPrivate";
import { createOrder, createCheckoutSession } from "../apis/order";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { auth } = useAuth();
  const apiPrivate = useApiPrivate();
  const { isPending, mutateAsync, error } = useMutation({
    mutationFn: createOrder,
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (info) => {
    if (auth === null) {
      return navigate("/signin", { state: { from: { pathname } } });
    }

    const payload = {
      products: cart.map(({ _id, orderQty, price, unit, seller }) => ({
        product: _id,
        orderQty,
        price,
        unit,
        seller,
      })),
      amount: Number(
        cart
          .reduce((acc, product) => acc + product.price * product.orderQty, 0)
          .toFixed(2)
      ),
      payment_method: info.method,
      customer: auth._id,
      phone_number: info.phone_number,
      address: info.address,
    };
    const data = await mutateAsync({ apiPrivate, payload });

    if (data.status === 201) {
      localStorage.removeItem("cart");

      info.method === "card" &&
        (await createCheckoutSession({
          apiPrivate,
          payload: { cart, orderId: data.data._id },
        }));
    }

    reset();
  };

  const increment = (id) => {
    let isUpdated = false;
    const updatedCart = cart.map((product) => {
      if (product._id === id && product.orderQty < product.quantity) {
        isUpdated = true;
        return { ...product, orderQty: product.orderQty + 1 };
      }
      return product;
    });

    if (isUpdated) {
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const decrement = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((product) =>
          product._id === id
            ? { ...product, orderQty: Math.max(product.orderQty - 1, 0) }
            : product
        )
        .filter((product) => product.orderQty > 0);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  return (
    <section className="w-4/5 flex flex-col items-center gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Shopping cart
      </h2>

      <div className="w-full grid md:grid-cols-2 gap-3.5">
        <div className="w-full flex flex-col gap-3.5">
          {error && (
            <p className="text-center text-red-500 bg-red-50 px-2.5 py-1.5 rounded-md">
              {error.status
                ? error.response.data.message
                : "There is a connection error."}
            </p>
          )}

          {cart.length === 0 && (
            <p className="text-center text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-md">
              No cart products found.
            </p>
          )}

          {cart.map((product) => (
            <article
              className="card card-compact bg-base-100 shadow"
              key={product._id}
            >
              <div className="card-body md:flex-row md:justify-between md:items-center">
                <div className="flex items-center gap-2.5">
                  <figure className="size-12 flex-shrink-0 bg-gray-300 rounded-md">
                    <img
                      src={product.image}
                      alt="Product Image"
                      className="size-full object-cover"
                    />
                  </figure>

                  <div className="flex flex-col">
                    <p className="text-base font-semibold capitalize text-gray-700">
                      {product.name}
                    </p>
                    <p className="text-xl font-semibold text-gray-700">
                      ${(product.price * product.orderQty).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end items-center gap-2.5">
                  <button
                    disabled={product.orderQty === product.quantity}
                    className="btn btn-sm btn-primary"
                    onClick={() => increment(product._id)}
                  >
                    <Plus size={16} />
                  </button>

                  <p className="max-w-fit text-base font-semibold uppercase text-gray-500">
                    {product.orderQty} {product.unit}
                  </p>

                  <button
                    className="btn btn-sm btn-error text-base-200"
                    onClick={() => decrement(product._id)}
                  >
                    <Minus size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className="card card-compact w-full h-fit bg-base-100 shadow">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-gray-700">
              Order summary
            </h2>

            <div className="flex justify-between items-center gap-2.5 text-base">
              <p className="font-semibold text-gray-600">Subtotal</p>
              <p className="text-end text-gray-500">
                $
                {cart
                  .reduce(
                    (acc, product) => acc + product.price * product.orderQty,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>

            <div className="flex justify-between items-center gap-2.5 text-base">
              <p className="font-semibold text-gray-600">Shipping</p>
              <p className="text-end text-gray-500">Free</p>
            </div>

            <div className="flex justify-between items-center gap-2.5 text-base">
              <p className="font-semibold text-gray-600">Total</p>
              <p className="text-end text-gray-500">
                $
                {cart
                  .reduce(
                    (acc, product) => acc + product.price * product.orderQty,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>

            <form
              className="flex flex-col gap-2.5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <input
                    type="radio"
                    id="card"
                    value="card"
                    defaultChecked
                    className="radio radio-sm radio-primary"
                    {...register("method")}
                  />
                  <label htmlFor="card" className="font-semibold text-gray-500">
                    CARD
                  </label>
                </div>

                <div className="flex items-center gap-1.5">
                  <input
                    type="radio"
                    id="cod"
                    value="cod"
                    className="radio radio-sm radio-primary"
                    {...register("method")}
                  />
                  <label htmlFor="cod" className="font-semibold text-gray-500">
                    COD
                  </label>
                </div>
              </div>

              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="phone_number"
                  className="text-base font-semibold text-gray-500"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  placeholder="Enter your phone number"
                  autoComplete="off"
                  className="input input-bordered text-gray-500"
                  {...register("phone_number", {
                    required: {
                      value: true,
                      message: "Number is required.",
                    },
                    pattern: {
                      value: /^(?:\+?\d{1,3}[-\s]?)?(?:\d[-\s]?){9,10}\d$/,
                      message: "Enter valid number.",
                    },
                  })}
                />

                {errors && errors.phone_number && (
                  <p className="text-error">{errors.phone_number.message}</p>
                )}
              </div>

              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="address"
                  className="text-base font-semibold text-gray-500"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  rows="3"
                  placeholder="Enter your address"
                  autoComplete="off"
                  className="textarea textarea-bordered text-gray-500 resize-none"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required.",
                    },
                    pattern: {
                      value: /^(?!\s)([a-zA-Z0-9.,'"\-:;()&%$#!? ]{10,500})$/,
                      message: "Enter valid address.",
                    },
                  })}
                />

                {errors && errors.address && (
                  <p className="text-error">{errors.address.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-block btn-primary text-base"
                disabled={isPending}
              >
                Checkout
              </button>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
}
