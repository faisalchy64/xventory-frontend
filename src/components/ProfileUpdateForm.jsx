import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useApiPrivate from "../hooks/useApiPrivate";
import Error from "./Error";
import { updateProfile } from "../apis/user";

export default function ProfileUpdateForm({ edit, setEdit }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isPending, mutateAsync, error } = useMutation({
    mutationFn: updateProfile,
  });
  const { auth, setAuth } = useAuth();
  const apiPrivate = useApiPrivate();

  const isChanged = (payload) => {
    const form = {};

    Object.keys(payload).map((key) => {
      if (payload[key] === edit.data[key]) {
        return null;
      }

      return (form[key] = payload[key]);
    });

    return form;
  };

  const onSubmit = async (payload) => {
    const { _id } = edit.data;
    const form = isChanged(payload);
    const data = await mutateAsync({ apiPrivate, _id, form });

    if (data?.status === 200) {
      const { name, address } = data.data;
      toast.success("Profile updated successfully.");
      localStorage.setItem("auth", JSON.stringify({ ...auth, name, address }));
      setAuth({ ...auth, name, address });
      setEdit({ isOpen: false, data: null });
      reset();
    }
  };

  return (
    <article className="card card-compact bg-base-100 w-4/5 md:w-1/2 shadow">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Update your profile
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
          className="flex flex-col gap-3.5"
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
              htmlFor="address"
              className="text-base font-semibold text-gray-500"
            >
              Address
            </label>
            <textarea
              id="address"
              rows="3"
              placeholder="Enter your address"
              className="textarea textarea-bordered text-gray-500 resize-none"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required.",
                },
                pattern: {
                  value: /^[\w\d\s.,;:'"()!?&%@#\-\u00C0-\u024F]{5,500}$/u,
                  message: "Enter valid address.",
                },
                value: edit.data.address,
              })}
            />

            {errors && errors.address && (
              <p className="text-error">{errors.address.message}</p>
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
