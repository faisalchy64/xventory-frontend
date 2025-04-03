import about from "../assets/about.webp";

export default function About() {
  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <div className="h-80 rounded-3xl overflow-hidden">
        <img src={about} alt="Team Image" className="size-full object-cover" />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Revolutionizing inventory management for sellers and business owners
      </h2>

      <p className="text-center text-gray-500">
        At Xventory, we believe that managing inventory should be simple,
        efficient, and accessible for businesses of all sizes. That’s why we
        created a powerful platform where sellers and business owners can
        seamlessly connect, manage products, and grow their operations-all from
        one intuitive system.
      </p>

      <div className="grid md:grid-cols-2 gap-3.5">
        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-gray-700">Our mission</h2>

            <p className="text-gray-500">
              Our mission is to simplify the way businesses handle inventory and
              procurement. Whether you're a supplier looking to streamline your
              product management or a business owner searching for the best
              products to stock your shelves, our platform is designed to save
              you time, reduce costs, and help you grow.
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-gray-700">
              Our vision for the future
            </h2>

            <p className="text-gray-500">
              We’re constantly evolving, driven by feedback from our community
              of users. Our goal is to build the most user-friendly, innovative,
              and reliable inventory management platform in the industry-helping
              businesses around the world become more efficient and profitable.
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-gray-700">Who we are</h2>

            <p className="text-gray-500">
              Founded by a team of industry experts with years of experience in
              supply chain management and business operations, Xventory was born
              out of a desire to address the common pain points businesses face
              in managing their inventory. We understand the challenges of
              tracking products, managing orders, and maintaining seller
              relationships. That’s why we built a platform that simplifies
              these processes, helping businesses focus on what really
              matters-delivering value to their customers.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
