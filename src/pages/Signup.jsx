import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";
import WithGoogle from "../components/WithGoogle";

export default function Signup() {
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
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <article className="card card-compact bg-base-100 w-full md:w-[450px] mx-auto shadow">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Create an account
          </h2>

          <form
            className="flex flex-col gap-2.5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-base font-semibold text-gray-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                className="input input-bordered w-full text-gray-500"
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

            <Link
              to="/signin"
              className="w-fit text-base text-primary underline"
            >
              Already have an account
            </Link>

            <button className="btn btn-primary text-base">Submit</button>
          </form>

          <div className="divider">OR</div>

          <WithGoogle />
        </div>
      </article>
    </section>
  );
}
