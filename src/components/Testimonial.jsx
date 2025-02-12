export default function Testimonial() {
  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Your success, our mission, testimonials from thriving businesses
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <article className="card card-compact bg-base-100 lg:col-span-2 shadow">
          <div className="card-body">
            <div className="flex items-center gap-1.5">
              <div className="flex-shrink-0 size-10 rounded-[100%] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=600"
                  alt="Person Image"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">John Doe,</span>
                <span className="text-gray-500">Owner, ABC Retail</span>
              </div>
            </div>

            <p className="text-gray-500">
              "This inventory management app has been a game-changer for my
              business. It's intuitive, efficient, and has streamlined our
              entire supply chain process."
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <div className="flex items-center gap-1.5">
              <div className="flex-shrink-0 size-10 rounded-[100%] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=600"
                  alt="Person Image"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">Sarah Lee,</span>
                <span className="text-gray-500">Seller, XYZ Wholesaler</span>
              </div>
            </div>

            <p className="text-gray-500">
              "As a seller, I've never had an easier time tracking and managing
              my inventory. The app's features make it a breeze to keep
              everything organized and up-to-date."
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <div className="flex items-center gap-1.5">
              <div className="flex-shrink-0 size-10 rounded-[100%] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&w=600"
                  alt="Person Image"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">Emily Chen,</span>
                <span className="text-gray-500">Owner, Acme Enterprises</span>
              </div>
            </div>

            <p className="text-gray-500">
              "I was hesitant to try a new inventory management system, but this
              app has exceeded all of my expectations. It's user-friendly, and
              the customer support team is fantastic."
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 lg:col-span-2 shadow">
          <div className="card-body">
            <div className="flex items-center gap-1.5">
              <div className="flex-shrink-0 size-10 rounded-[100%] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=600"
                  alt="Person Image"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">
                  Michael Johnson,
                </span>
                <span className="text-gray-500">Owner, Omega Express</span>
              </div>
            </div>

            <p className="text-gray-500">
              "This app has saved me so much time and money. I can easily
              compare prices, place orders, and monitor my inventory levels all
              in one place."
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 lg:col-span-2 shadow">
          <div className="card-body">
            <div className="flex items-center gap-1.5">
              <div className="flex-shrink-0 size-10 rounded-[100%] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&w=600"
                  alt="Person Image"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">Lisa Patel,</span>
                <span className="text-gray-500">Owner, Delta Marketplace</span>
              </div>
            </div>

            <p className="text-gray-500">
              "As a growing business, we needed a reliable and scalable
              inventory management solution. This app has been the perfect fit,
              and it's helped us streamline our operations."
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <div className="flex items-center gap-1.5">
              <div className="flex-shrink-0 size-10 rounded-[100%] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&w=600"
                  alt="Person Image"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">David Lee,</span>
                <span className="text-gray-500">
                  Seller, Gamma Distributors
                </span>
              </div>
            </div>

            <p className="text-gray-500">
              "I highly recommend this inventory management app to any business
              owner or seller looking to improve their operations. It's been a
              game-changer for us."
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
