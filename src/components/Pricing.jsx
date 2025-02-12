import { CircleCheck } from "lucide-react";

export default function Pricing() {
  const data = {
    basic: [
      "Manage up to 100 products",
      "Real-time inventory tracking",
      "Supplier management",
      "Order history and basic reporting",
      "Email support",
    ],
    standard: [
      "Manage up to 1,000 products",
      "Advanced reporting and analytics",
      "Bulk order processing",
      "Multi-supplier management",
      "Priority email and chat support",
    ],
    premium: [
      "Unlimited product management",
      "Custom reports and analytics",
      "Automated restocking notifications",
      "Integration with accounting and POS systems",
      "Dedicated account manager and 24/7 premium support",
    ],
  };

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Find the perfect plan to manage your inventory and grow your business
      </h2>

      <div className="grid md:grid-cols-3 gap-3.5">
        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body justify-between">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-xl font-semibold text-gray-700">Free</h2>
              <p className="text-gray-500">
                For small businesses or startups looking to manage their
                inventory efficiently.
              </p>

              <ul className="flex flex-col gap-1.5">
                {data.basic.map((item, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <CircleCheck size={18} className="stroke-success" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body justify-between">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-xl font-semibold text-gray-700">$29/M</h2>
              <p className="text-gray-500">
                Ideal for growing businesses that need more advanced control and
                insights.
              </p>

              <ul className="flex flex-col gap-1.5">
                {data.standard.map((item, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <span className="flex-shrink-0">
                      <CircleCheck size={18} className="stroke-success" />
                    </span>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body justify-between">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-xl font-semibold text-gray-700">$49/M</h2>
              <p className="text-gray-500">
                The all-in-one solution for large businesses with complex
                inventory needs.
              </p>

              <ul className="flex flex-col gap-1.5">
                {data.premium.map((item, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <span className="flex-shrink-0">
                      <CircleCheck size={18} className="stroke-success" />
                    </span>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </article>
      </div>
    </section>
  );
}
