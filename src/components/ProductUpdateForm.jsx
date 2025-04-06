import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import useApiPrivate from "../hooks/useApiPrivate";
import Error from "./Error";
import { updateProduct } from "../apis/product";

export default function ProductUpdateForm({ edit, setEdit }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const queryClient = useQueryClient();
  const { isPending, mutateAsync, error } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["manage-products"] }),
  });
  const apiPrivate = useApiPrivate();

  const isChanged = (payload) => {
    const data = {};
    const form = new FormData();

    Object.keys(payload).map((key) => {
      if (
        payload[key] === edit.data[key] ||
        (key === "image" && payload[key][0] === undefined)
      ) {
        return null;
      }

      if (key === "image") {
        data[key] = payload[key][0];
        return null;
      }

      if (key === "price" || key === "quantity") {
        data[key] = Number(payload[key]);
        return null;
      }

      return (data[key] = payload[key]);
    });

    for (const key in data) {
      form.append(key, data[key]);
    }

    return form;
  };

  const onSubmit = async (payload) => {
    const { _id } = edit.data;
    const form = isChanged(payload);

    const data = await mutateAsync({ apiPrivate, _id, form });

    if (data?.status === 200) {
      toast.success("Product updated successfully.");
      setEdit({ isOpen: false, data: null });
      reset();
    }
  };

  return (
    <article className="card card-compact bg-base-100 w-4/5 md:w-1/2 shadow">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Update your product
          </h2>
          <button
            className="btn btn-ghost"
            onClick={() => setEdit({ isOpen: false, data: null })}
          >
            <X className="stroke-gray-500" />
          </button>
        </div>

        {error && <Error error={error} />}

        <form
          className="h-[450px] flex flex-col gap-3.5 overflow-x-hidden overflow-y-auto"
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
                value: edit.data.name,
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
              {...register("image")}
            />
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
                value: edit.data.price,
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
                value: edit.data.quantity,
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
                value: edit.data.unit,
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
                value: edit.data.description,
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
  );
}
