import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";

export default function ResetPassword() {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 md:py-40 mx-auto">
      <article className="card card-compact bg-base-100 w-full md:w-[450px] mx-auto shadow">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Set your new password
          </h2>

          <form
            className="flex flex-col gap-2.5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="new-password"
                className="text-base font-semibold text-gray-500"
              >
                New password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  id="new-password"
                  placeholder="Enter your new password"
                  autoComplete="off"
                  className="input input-bordered w-full text-gray-500"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "New password is required.",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message:
                        "Minimum 8 characters needed (at least one letter, one digit and one special character).",
                    },
                  })}
                />

                {show ? (
                  <EyeClosed
                    className="stroke-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShow(false)}
                  />
                ) : (
                  <Eye
                    className="stroke-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShow(true)}
                  />
                )}
              </div>

              {errors && errors.password && (
                <p className="text-error">{errors.password.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="confirm-password"
                className="text-base font-semibold text-gray-500"
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Enter your confirm password"
                  autoComplete="off"
                  className="input input-bordered w-full text-gray-500"
                  {...register("confirm", {
                    required: {
                      value: true,
                      message: "Confirm password is required.",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message:
                        "Minimum 8 characters needed (at least one letter, one digit and one special character).",
                    },
                  })}
                />

                {show ? (
                  <EyeClosed
                    className="stroke-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShow(false)}
                  />
                ) : (
                  <Eye
                    className="stroke-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShow(true)}
                  />
                )}
              </div>

              {errors && errors.confirm && (
                <p className="text-error">{errors.confirm.message}</p>
              )}
            </div>

            <button className="btn btn-primary text-base">Submit</button>
          </form>
        </div>
      </article>
    </section>
  );
}
