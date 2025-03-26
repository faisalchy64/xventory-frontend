import { Link } from "react-router";

export default function ProductCard({ product }) {
  const { _id, name, image, price, description } = product;

  return (
    <article className="card card-compact bg-base-100 shadow">
      <figure className="h-60">
        <img
          src={image.optimize_url}
          alt={name}
          loading="lazy"
          className="size-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold capitalize text-gray-700">
          {name}
        </h2>
        <p className="text-gray-500">{description.slice(0, 100)}...</p>
        <div className="card-actions justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">${price}</h2>
          <Link to={`/products/${_id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </article>
  );
}
