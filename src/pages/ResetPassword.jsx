import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";
import { resetPassword } from "../apis/user";

export default function ResetPassword() {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isPending, mutate, data, error } = useMutation({
    mutationFn: resetPassword,
  });
  const navigate = useNavigate();

  const onSubmit = async (payload) => {
    mutate({ ...payload, email: sessionStorage.getItem("temp") });
    reset();
  };

  useEffect(() => {
    if (data) {
      toast.success(data.message);
      navigate("/signin");
    }
  }, [data, navigate]);

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <article className="card card-compact bg-base-100 w-full md:w-[450px] mx-auto shadow">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Set your new password
          </h2>

          <p className="text-gray-500">
            Enter the verification code sent to the email address you entered.
          </p>

          {error && (
            <p className="text-center text-red-500 bg-red-50 px-2.5 py-1.5 rounded-md">
              {error.status
                ? error.response.data.message
                : "There is a connection error."}
            </p>
          )}

          <form
            className="flex flex-col gap-2.5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="otp"
                className="text-base font-semibold text-gray-500"
              >
                Verification code
              </label>
              <input
                type="text"
                id="otp"
                placeholder="Enter your 6-digit code"
                autoComplete="off"
                className="input input-bordered w-full text-gray-500"
                {...register("otp", {
                  required: {
                    value: true,
                    message: "Verification code is required.",
                  },
                  pattern: {
                    value: /^\d{6}$/,
                    message: "Enter valid verification code.",
                  },
                })}
              />

              {errors && errors.otp && (
                <p className="text-error">{errors.otp.message}</p>
              )}
            </div>

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

            <button className="btn btn-primary text-base" disabled={isPending}>
              Submit
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
