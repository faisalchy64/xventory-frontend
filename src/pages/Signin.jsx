import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeClosed } from "lucide-react";
import WithGoogle from "../components/WithGoogle";
import { signin } from "../apis/user";
import useAuth from "../hooks/useAuth";

export default function Signin() {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isPending, mutate, data, error } = useMutation({
    mutationFn: signin,
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const from = (state && state.from.pathname) || "/";

  const onSubmit = async (payload) => {
    mutate(payload);
    reset();
  };

  useEffect(() => {
    if (auth || (data && data.status === 200)) {
      navigate(from, { replace: true });
    }
  }, [auth, from, data, navigate]);

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <article className="card card-compact bg-base-100 w-full md:w-[450px] mx-auto shadow">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Sign in to your account
          </h2>

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

            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-base font-semibold text-gray-500"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  autoComplete="off"
                  className="input input-bordered w-full text-gray-500"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required.",
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

            <div className="flex justify-between gap-2.5">
              <Link
                to="/signup"
                className="w-fit text-base text-primary underline"
              >
                Create an account
              </Link>

              <Link
                to="/forgot-password"
                className="w-fit text-base text-primary underline"
              >
                Forgot password
              </Link>
            </div>

            <button className="btn btn-primary text-base" disabled={isPending}>
              Submit
            </button>
          </form>

          <div className="divider">OR</div>

          <WithGoogle />
        </div>
      </article>
    </section>
  );
}
