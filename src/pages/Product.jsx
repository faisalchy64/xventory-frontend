import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getProduct } from "../apis/product";
import ProductSkeleton from "../ux/ProductSkeleton";

export default function Product() {
  const [orderQty, setOrderQty] = useState(0);
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isLoading, data, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  const onSubmit = async (payload) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const { _id, name, image, price, quantity, unit, seller } = data.data;
    const existingIndex = cart.findIndex((product) => product._id === _id);

    existingIndex === -1
      ? cart.push({
          _id,
          name,
          price,
          quantity,
          unit,
          orderQty: payload.orderQty,
          image: image.optimize_url,
          seller: seller._id,
        })
      : (cart[existingIndex].orderQty += payload.orderQty);

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Product has been added to your cart.");
    reset();
  };

  return (
    <section className="w-4/5 flex flex-col items-center gap-10 py-10 mx-auto">
      {isLoading && <ProductSkeleton />}

      {error && (
        <p className="w-fit text-red-500 bg-red-50 px-2.5 py-1.5 mx-auto rounded-md">
          {error.status
            ? error.response.data.message
            : "There is a connection error."}
        </p>
      )}

      {data && (
        <article className="card card-compact items-center bg-base-100 w-full md:flex-row rounded-none">
          <figure className="w-full h-[390px] rounded-2xl">
            <img
              src={data.data.image.optimize_url}
              alt="Product Image"
              className="size-full object-cover"
            />
          </figure>
          <div className="card-body justify-between w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold capitalize text-gray-700">
                {data.data.name}
              </h2>

              <h2 className="text-xl font-semibold text-gray-700">
                <span>${data.data.price} / </span>
                <span className="uppercase">{data.data.unit}</span>
              </h2>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-600">
                Description
              </h2>

              <p className="flex-grow-0 text-gray-500">
                {data.data.description}
              </p>
            </div>

            <div className="flex justify-between gap-2.5">
              <div>
                <h2 className="text-base font-semibold text-gray-600">
                  Quantity
                </h2>
                <p className="text-gray-500">{data.data.quantity} KG</p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-600">Sold</h2>
                <p className="text-gray-500">{data.data.sold} KG</p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-600">
                  Seller
                </h2>
                <p className="capitalize text-gray-500">
                  {data.data.seller.name}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2.5 py-2.5">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter order quantity"
                  className="input input-bordered w-full text-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  {...register("orderQty", {
                    required: {
                      value: true,
                      message: "Quantity is required.",
                    },
                    min: {
                      value: 5,
                      message: `Quantity must be greater than or equal to 5 ${data.data.unit.toUpperCase()}.`,
                    },
                    max: {
                      value: data.data.quantity,
                      message: `Quantity must be less than or equal to ${
                        data.data.quantity
                      } ${data.data.unit.toUpperCase()}.`,
                    },
                    onChange: (e) => setOrderQty(e.target.value),
                    valueAsNumber: true,
                  })}
                />

                {errors && errors.orderQty && (
                  <p className="text-error">{errors.orderQty.message}</p>
                )}
              </div>

              <div className="card-actions justify-between items-center pt-2.5 border-t">
                <h2 className="text-xl font-semibold text-gray-700">
                  ${(orderQty * data.data.price).toFixed(2)}
                </h2>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={data.data.quantity === 0}
                >
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </article>
      )}
    </section>
  );
}
