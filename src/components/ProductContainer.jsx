import { Link } from "react-router";
import ProductCard from "./ProductCard";

export default function ProductContainer() {
  return (
    <section className="w-4/5 flex flex-col items-center gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Browse, compare and order products from trusted sellers
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Link to="/products" className="btn btn-primary">
        See All Products
      </Link>
    </section>
  );
}
