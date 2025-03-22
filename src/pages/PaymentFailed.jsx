import { Link } from "react-router";

export default function PaymentFailed() {
  return (
    <section className="w-4/5 h-screen flex justify-center items-center mx-auto">
      <article className="card card-compact w-full md:w-[450px] bg-base-100 shadow">
        <div className="card-body items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-20 fill-red-500"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">
            Payment failed
          </h2>

          <p className="text-base text-center text-gray-500">
            We couldn't complete your payment. Please check your payment details
            and try again.
          </p>

          <Link to="/products" className="btn btn-block btn-primary text-base">
            Continue shopping
          </Link>
        </div>
      </article>
    </section>
  );
}
