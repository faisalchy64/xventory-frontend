import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useApiPrivate from "../hooks/useApiPrivate";
import { createProduct } from "../apis/product";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

export default function CreateProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();
  const { isPending, mutate, data, error } = useMutation({
    mutationFn: createProduct,
  });
  const { auth } = useAuth();
  const apiPrivate = useApiPrivate();

  const onSubmit = async (payload) => {
    const form = new FormData();

    for (const key in payload) {
      if (key === "image") {
        form.append(key, payload[key][0]);
        continue;
      }

      form.append(key, payload[key]);
    }

    mutate({ apiPrivate, form });
    reset();
  };

  useEffect(() => {
    if (auth) {
      setValue("seller", auth._id);
    }

    if (data && data.status === 201) {
      toast.success(data.message);
    }
  }, [auth, data, setValue]);

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Create New Product</h2>

      <article className="card card-compact bg-base-100 w-full mx-auto shadow">
        <div className="card-body">
          {error && (
            <p className="text-center text-red-500 bg-red-50 px-2.5 py-1.5 rounded-md">
              {error.status
                ? error.response.data.message
                : "There is a connection error. Try again a few minutes after."}
            </p>
          )}

          <form
            className="flex flex-col gap-3.5"
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-base font-semibold text-gray-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter product name"
                autoComplete="off"
                className="input input-bordered text-gray-500"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required.",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]{3,}$/,
                    message: "Enter valid name.",
                  },
                })}
              />

              {errors && errors.name && (
                <p className="text-error">{errors.name.message}</p>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="image"
                className="text-base font-semibold text-gray-500"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                className="file-input file-input-bordered"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required.",
                  },
                })}
              />

              {errors && errors.image && (
                <p className="text-error">{errors.image.message}</p>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="price"
                className="text-base font-semibold text-gray-500"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                placeholder="Enter product price"
                autoComplete="off"
                className="input input-bordered text-gray-500"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required.",
                  },
                  min: {
                    value: 0,
                    message: "Price cannot be negative.",
                  },
                  pattern: {
                    value: /^(?:\d+)(?:\.\d+)?$/,
                    message: "Enter valid price.",
                  },
                  valueAsNumber: true,
                })}
              />

              {errors && errors.price && (
                <p className="text-error">{errors.price.message}</p>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="quantity"
                className="text-base font-semibold text-gray-500"
              >
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                placeholder="Enter product quantity"
                autoComplete="off"
                className="input input-bordered text-gray-500"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is required.",
                  },
                  min: {
                    value: 0,
                    message: "Quantity cannot be negative.",
                  },
                  pattern: {
                    value: /^(?:\d+)(?:\.\d+)?$/,
                    message: "Enter valid quantity.",
                  },
                  valueAsNumber: true,
                })}
              />

              {errors && errors.quantity && (
                <p className="text-error">{errors.quantity.message}</p>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="unit"
                className="text-base font-semibold text-gray-500"
              >
                Unit
              </label>
              <select
                id="unit"
                className="select select-bordered text-gray-500"
                {...register("unit", {
                  required: {
                    value: true,
                    message: "Unit is required.",
                  },
                })}
              >
                <option value="">Choose a unit</option>
                <option value="kg">KG</option>
                <option value="dz">DZ</option>
                <option value="pc">PC</option>
              </select>

              {errors && errors.unit && (
                <p className="text-error">{errors.unit.message}</p>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="description"
                className="text-base font-semibold text-gray-500"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="3"
                placeholder="Enter product description"
                className="textarea textarea-bordered text-gray-500 resize-none"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required.",
                  },
                  pattern: {
                    value: /^[\w\d\s.,;:'"()!?&%@#\-\u00C0-\u024F]{5,500}$/u,
                    message: "Enter valid description.",
                  },
                })}
              />

              {errors && errors.description && (
                <p className="text-error">{errors.description.message}</p>
              )}
            </div>

            <button className="btn btn-primary text-base" disabled={isPending}>
              Submit
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
