import { Link } from "react-router";

export default function ProductCard() {
  return (
    <article className="card card-compact bg-base-100 shadow">
      <figure className="h-60">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="size-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold text-gray-700">Green Apple</h2>
        <p className="text-gray-500">
          Fresh and organic green apple. Fresh and organic green apple. Fresh
          and organic green apple.
        </p>
        <div className="card-actions justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">$4.85</h2>
          <Link to="/products" className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </article>
  );
}
