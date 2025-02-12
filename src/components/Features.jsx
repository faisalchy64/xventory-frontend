import {
  FolderCog,
  Box,
  ScrollText,
  FileChartColumnIncreasing,
} from "lucide-react";

export default function Features() {
  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Powerful features to elevate your supply chain management
      </h2>

      <div className="grid md:grid-cols-3 gap-3.5">
        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <div className="w-fit bg-indigo-50 p-2.5 rounded-md">
              <FolderCog size={32} className="stroke-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700">
              Stay updated, stay in control
            </h2>
            <p className="text-gray-500">
              Monitor stock levels in real time with our intuitive dashboard.
              Whether you're a seller or business owner, get instant updates on
              product availability to prevent stockouts or overstock.
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <div className="w-fit bg-indigo-50 p-2.5 rounded-md">
              <Box size={32} className="stroke-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700">
              Manage inventory with ease
            </h2>
            <p className="text-gray-500">
              Sellers can effortlessly add, edit, or remove products, set
              pricing, and categorize inventory for a streamlined management
              experience. Organize your stock with customizable filters and
              tags.
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <div className="w-fit bg-indigo-50 p-2.5 rounded-md">
              <ScrollText size={32} className="stroke-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700">
              Simplified purchasing for business owners
            </h2>
            <p className="text-gray-500">
              Find the products you need from trusted suppliers with ease.
              Business owners can browse product catalogs, place orders, and
              track shipments-all from one platform.
            </p>
          </div>
        </article>

        <article className="card card-compact bg-base-100 shadow">
          <div className="card-body">
            <div className="w-fit bg-indigo-50 p-2.5 rounded-md">
              <FileChartColumnIncreasing size={32} className="stroke-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700">
              Make data-driven decisions
            </h2>
            <p className="text-gray-500">
              Gain valuable insights into your inventory and purchasing trends
              with detailed analytics. From sales performance to stock movement,
              access reports that help you optimize your business decisions.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
