import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="hero relative">
      <div className="flex justify-center items-center bg-gray-900 bg-opacity-50 absolute inset-0">
        <div className="w-4/5 flex flex-col items-center gap-5 mx-auto">
          <h2 className="hero-heading lg:w-1/2 text-4xl font-bold text-center">
            Streamline Your Inventory, Boost Your Business
          </h2>

          <p className="lg:w-1/2 text-base text-center text-base-300">
            Manage your products, track your stock, and source new supplies
            effortlessly. Our platform is built to save you time and boost
            productivity, whether you are a seller or a business owner.
          </p>

          <Link to="/products" className="btn btn-primary uppercase">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
