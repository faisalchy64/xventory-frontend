import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Error from "../components/Error";
import Empty from "../components/Empty";
import CardItemSkeleton from "../ux/CardItemSkeleton";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../apis/product";

export default function Products() {
  const [search, setSearch] = useState("");
  const [bounce, setBounce] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading, data, error } = useQuery({
    queryKey: ["products", search, page],
    queryFn: () => getProducts(search, page),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage(1);
      setSearch(bounce);
    }, 500);

    return () => clearTimeout(timeout);
  }, [bounce]);

  return (
    <section className="w-4/5 flex flex-col items-center gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Browse, compare and order products from trusted sellers
      </h2>

      <div className="w-full md:w-1/2 mx-auto">
        <input
          type="search"
          name="search"
          placeholder="Search here"
          className="input input-bordered w-full"
          value={bounce}
          onChange={(e) => setBounce(e.target.value)}
        />
      </div>

      {isLoading && <CardItemSkeleton />}

      {error && <Error error={error} />}

      {data?.data?.products?.length === 0 && <Empty />}

      {data?.data?.products?.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {data?.data?.products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {data?.data?.products?.length > 0 && (
        <div className="flex items-center gap-2.5">
          <button
            className="btn btn-sm btn-primary"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev > 1 && prev - 1)}
          >
            Previous
          </button>
          <button className="btn btn-sm text-gray-500">{page}</button>
          <button
            className="btn btn-sm btn-primary"
            disabled={Math.ceil(data?.data?.total / 6) === page}
            onClick={() =>
              setPage(
                (prev) => Math.ceil(data?.data?.total / 6) > prev && prev + 1
              )
            }
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
