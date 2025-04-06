import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Error from "../components/Error";
import { verifyCode } from "../apis/user";

export default function Verify() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isPending, mutate, data, error } = useMutation({
    mutationFn: verifyCode,
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    mutate({ ...data, email: sessionStorage.getItem("temp") });
    reset();
  };

  useEffect(() => {
    if (data) {
      toast.success(data.message);
      navigate("/signin");
    }
  }, [data, navigate]);

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 md:py-40 mx-auto">
      <article className="card card-compact bg-base-100 w-full md:w-[450px] mx-auto shadow">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Verification code
          </h2>

          <p className="text-gray-500">
            Enter the verification code sent to the email address you entered.
          </p>

          {error && <Error error={error} />}

          <form
            className="flex flex-col gap-2.5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <input
                type="text"
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

            <button className="btn btn-primary text-base" disabled={isPending}>
              Submit
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
