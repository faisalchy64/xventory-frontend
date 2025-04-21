export default function CardItemSkeleton() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {items.map((item) => (
        <article key={item} className="card card-compact bg-base-100 shadow">
          <figure className="h-60 bg-gray-200 animate-pulse" />

          <div className="card-body">
            <h2 className="h-7 bg-gray-200 animate-pulse rounded-md" />

            <p className="h-[60px] bg-gray-200 animate-pulse rounded-md" />

            <div className="flex justify-between items-center">
              <h2 className="w-[52.75px] h-7 bg-gray-200 animate-pulse rounded-md" />

              <div className="w-[92.14px] h-12 bg-gray-200 animate-pulse rounded-md" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
