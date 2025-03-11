export default function ProductSkeleton() {
  return (
    <article className="card card-compact bg-base-100 w-full md:flex-row rounded-none">
      <figure className="w-full h-[390px] bg-gray-200 animate-pulse rounded-2xl"></figure>
      <div className="card-body justify-between w-full">
        <div className="h-7 bg-gray-200 animate-pulse rounded-md"></div>

        <div className="h-28 bg-gray-200 animate-pulse rounded-md"></div>

        <div className="h-11 bg-gray-200 animate-pulse rounded-md"></div>

        <div className="h-12 bg-gray-200 animate-pulse rounded-md"></div>

        <div className="h-12 bg-gray-200 animate-pulse rounded-md"></div>
      </div>
    </article>
  );
}
