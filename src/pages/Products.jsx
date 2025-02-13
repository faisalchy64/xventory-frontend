import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <section className="w-4/5 flex flex-col items-center gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Browse, compare and order products from trusted sellers
      </h2>

      <form className="w-full md:w-1/2 flex items-center">
        <input
          type="search"
          name="search"
          placeholder="Search here"
          className="input input-bordered flex-grow focus:outline-none rounded-r-none"
        />
        <button className="btn btn-primary rounded-l-none">Search</button>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
