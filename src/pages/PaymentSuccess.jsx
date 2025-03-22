import { useSearchParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useApiPrivate from "../hooks/useApiPrivate";
import { getCheckoutSession } from "../apis/order";
import Loading from "../components/Loading";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const apiPrivate = useApiPrivate();
  const { isLoading, data, error } = useQuery({
    queryKey: ["checkout-session"],
    queryFn: () =>
      getCheckoutSession(apiPrivate, searchParams.get("session_id")),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-4/5 h-screen flex justify-center items-center mx-auto">
      {error && (
        <article className="card card-compact w-full md:w-[450px] bg-base-100 shadow">
          <div className="card-body items-center">
            {error && (
              <>
                <p className="text-base text-center text-red-500">
                  {error.status
                    ? error.response.data.message
                    : "There is a connection error."}
                </p>

                <Link to="/" className="btn btn-block btn-primary text-base">
                  Continue shopping
                </Link>
              </>
            )}
          </div>
        </article>
      )}

      {data && data.status === 200 && (
        <article className="card card-compact w-full md:w-[450px] bg-base-100 shadow">
          <div className="card-body items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-20 fill-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-gray-700">
              Payment successful
            </h2>

            <p className="text-base text-center text-gray-500">
              Thank you for your purchase. Your payment has been processed
              successfully.
            </p>

            <Link
              to="/products"
              className="btn btn-block btn-primary text-base"
            >
              Continue shopping
            </Link>
          </div>
        </article>
      )}
    </section>
  );
}
