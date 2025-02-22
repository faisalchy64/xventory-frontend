import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

export default function ProfileUpdateForm({ edit, setEdit }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data, edit);
    reset();
  };

  useEffect(() => {
    setValue("name", "abc");
  }, [setValue]);

  return (
    <>
      <article className="card card-compact bg-base-100 w-4/5 md:w-1/2 shadow">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>
            <button
              className="btn btn-ghost"
              onClick={() => setEdit({ isOpen: false, data: null })}
            >
              <X className="stroke-gray-500" />
            </button>
          </div>
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
                })}
              />

              {errors && errors.address && (
                <p className="text-error">{errors.address.message}</p>
              )}
            </div>

            <button className="btn btn-primary text-base">Submit</button>
          </form>
        </div>
      </article>
    </>
  );
}
