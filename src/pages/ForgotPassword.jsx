import { Link } from "react-router";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {
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
            Reset your password
          </h2>

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
              Sign in page
            </Link>

            <button className="btn btn-primary text-base">Submit</button>
          </form>
        </div>
      </article>
    </section>
  );
}
