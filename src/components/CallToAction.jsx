import { Link } from "react-router";

export default function CallToAction() {
  return (
    <section className="w-4/5 flex flex-col items-center gap-10 py-10 mx-auto">
      <div className="cta card card-compact card-body w-full items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

        <h2 className="text-3xl font-bold text-gray-100 text-center z-10">
          Take control of your inventory
        </h2>

        <p className="lg:w-1/2 text-center text-gray-300 z-10">
          Stop wasting time with outdated processes. Track your products, manage
          orders, and grow your business-all in one place. Signup now and see
          how simple inventory management can be.
        </p>

        <Link to="/products" className="btn btn-primary uppercase z-10">
          Get Started
        </Link>
      </div>
    </section>
  );
}
