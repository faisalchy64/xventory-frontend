import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Error from "../components/Error";
import { forgotPassword } from "../apis/user";

export default function ForgotPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isPending, mutate, data, error } = useMutation({
    mutationFn: forgotPassword,
  });
  const navigate = useNavigate();

  const onSubmit = async (payload) => {
    mutate(payload);
    reset();
  };

  useEffect(() => {
    if (data) {
      toast.success(data.message);
      navigate("/reset-password");
    }
  }, [data, navigate]);

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <article className="card card-compact bg-base-100 w-full md:w-[450px] mx-auto shadow">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Reset your password
          </h2>

          <p className="text-gray-500">
            Enter your email address and we will send you a verification code to
            reset your password.
          </p>

          {error && <Error error={error} />}

          <form
            className="flex flex-col gap-2.5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-base font-semibold text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="input input-bordered w-full text-gray-500"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required.",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter valid email.",
                  },
                })}
              />

              {errors && errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>

            <Link
              to="/signin"
              className="w-fit text-base text-primary underline"
            >
              Signin with password
            </Link>

            <button className="btn btn-primary text-base" disabled={isPending}>
              Submit
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
