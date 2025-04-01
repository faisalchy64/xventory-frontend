import { useState } from "react";
import { X } from "lucide-react";

export default function CustomerOrderDialog({ view, setView }) {
  const [active, setActive] = useState("Order");
  const text_colors = {
    pending: "text-amber-500",
    paid: "text-green-500",
    delivered: "text-green-500",
    cancelled: "text-red-500",
  };

  return (
    <article className="card card-compact bg-base-100 w-4/5 md:w-1/2 shadow">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{active} details</h2>
          <button
            className="btn btn-ghost"
            onClick={() => setView({ isOpen: false, data: null })}
          >
            <X className="stroke-gray-500" />
          </button>
        </div>

        <div className="h-[450px] overflow-y-auto">
          <div className="flex items-center gap-2.5">
            <button
              className={`flex-grow font-semibold text-gray-700 ${
                active === "Order" && "bg-base-300"
              } px-2.5 py-1.5 rounded-md`}
              onClick={() => setActive("Order")}
            >
              Order
            </button>

            <button
              className={`flex-grow font-semibold text-gray-700 ${
                active === "Product" && "bg-base-300"
              } px-2.5 py-1.5 rounded-md`}
              onClick={() => setActive("Product")}
            >
              Product
            </button>

            <button
              className={`flex-grow font-semibold text-gray-700 ${
                active === "Personal" && "bg-base-300"
              } px-2.5 py-1.5 rounded-md`}
              onClick={() => setActive("Personal")}
            >
              Personal
            </button>
          </div>

          {active === "Order" && (
            <div className="grid md:grid-cols-3 gap-2.5 py-5">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Order Id
                </h3>

                <p className="break-all text-gray-500">{view.data._id}</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Payment Id
                </h3>

                <p className="break-all text-gray-500">
                  {view.data.payment_id}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Payment Intent
                </h3>

                <p className="break-all text-gray-500">
                  {view.data.payment_intent}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Amount
                </h3>

                <p className="text-gray-500">
                  $
                  {view.data.products
                    .reduce(
                      (acc, product) => acc + product.price * product.orderQty,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Order Status
                </h3>

                <p
                  className={`uppercase ${text_colors[view.data.order_status]}`}
                >
                  {view.data.order_status}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Payment Status
                </h3>

                <p
                  className={`uppercase ${
                    text_colors[view.data.payment_status]
                  }`}
                >
                  {view.data.payment_status}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Payment Method
                </h3>

                <p className="uppercase text-gray-500">
                  {view.data.payment_method}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Created At
                </h3>

                <p className="text-gray-500">
                  {new Date(view.data.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Updated At
                </h3>

                <p className="text-gray-500">
                  {new Date(view.data.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          )}

          {active === "Product" && (
            <div className="flex flex-col gap-2.5 py-5">
              {view.data.products.map(
                ({ _id, price, orderQty, unit, product, seller }) => (
                  <article
                    className="card card-compact bg-base-100 shadow"
                    key={_id}
                  >
                    <div className="card-body flex-row justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <figure className="size-12 flex-shrink-0 bg-gray-300 rounded-md">
                          <img
                            src={product && product.image.optimize_url}
                            alt={product && product.name}
                            className="size-full object-cover"
                          />
                        </figure>

                        <div className="flex flex-col">
                          <p className="font-semibold capitalize text-gray-500">
                            {product && product.name}
                          </p>

                          <p className="font-semibold uppercase text-gray-500">
                            {orderQty} {unit} * ${price}
                          </p>

                          <p className="font-semibold capitalize text-gray-500">
                            {seller.name}
                          </p>
                        </div>
                      </div>

                      <p className="flex-grow-0 text-base font-semibold text-gray-700">
                        ${(price * orderQty).toFixed(2)}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          )}

          {active === "Personal" && (
            <div className="grid md:grid-cols-3 gap-2.5 py-5">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">Name</h3>

                <p className="capitalize text-gray-500">
                  {view.data.customer.name}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">Email</h3>

                <p className="text-gray-500">{view.data.customer.email}</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Phone Number
                </h3>

                <p className="text-gray-500">{view.data.phone_number}</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-semibold uppercase text-gray-700">
                  Address
                </h3>

                <p className="capitalize text-gray-500">{view.data.address}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
