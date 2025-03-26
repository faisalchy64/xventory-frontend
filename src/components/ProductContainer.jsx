import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product";
import ProductCard from "./ProductCard";
import CardItemSkeleton from "../ux/CardItemSkeleton";

export default function ProductContainer() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts("", 1),
  });

  return (
    <section className="w-4/5 flex flex-col items-center gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Browse, compare and order products from trusted sellers
      </h2>

      {isLoading && <CardItemSkeleton />}

      {error && (
        <p className="w-fit text-red-500 bg-red-50 px-2.5 py-1.5 mx-auto rounded-md">
          {error.status
            ? error.response.data.message
            : "There is a connection error."}
        </p>
      )}

      {data && data.data.products.length === 0 && (
        <p className="w-fit text-gray-500 bg-gray-50 px-2.5 py-1.5 mx-auto rounded-md">
          No products found.
        </p>
      )}

      {data && data.data.products.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {data &&
            data.data.products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      )}

      <Link to="/products" className="btn btn-primary">
        See All Products
      </Link>
    </section>
  );
}
