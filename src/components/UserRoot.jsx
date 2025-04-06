import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useApiPrivate from "../hooks/useApiPrivate";
import Error from "./Error";
import Empty from "./Empty";
import OrderTableItem from "../components/OrderTableItem";
import TableItemSkeleton from "../ux/TableItemSkeleton";
import Modal from "../components/Modal";
import OrderDialog from "../components/OrderDialog";
import { manageOrders } from "../apis/order";
import products from "../assets/products.png";
import orders from "../assets/orders.png";
import purchase from "../assets/purchase.png";

export default function UserRoot() {
  const [view, setView] = useState({ isOpen: false, data: null });
  const { auth } = useAuth();
  const apiPrivate = useApiPrivate();
  const { isLoading, data, error } = useQuery({
    queryKey: ["recent-orders", auth._id, 1],
    queryFn: () => manageOrders(apiPrivate, auth._id, 1),
  });

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>

      <div className="grid md:grid-cols-2 gap-3.5">
        <article className="card card-compact bg-primary shadow">
          <div className="card-body">
            <img src={products} alt="Icon" className="size-10" />
            <div className="flex justify-between items-center text-white">
              <p className="text-base">Available Products</p>
              <h1 className="text-2xl font-bold">1000</h1>
            </div>
          </div>
        </article>

        <article className="card card-compact bg-error shadow">
          <div className="card-body">
            <img src={orders} alt="Icon" className="size-10" />
            <div className="flex justify-between items-center text-white">
              <p className="text-base">Available Orders</p>
              <h1 className="text-2xl font-bold">1000</h1>
            </div>
          </div>
        </article>

        <article className="card card-compact bg-neutral shadow">
          <div className="card-body">
            <img src={purchase} alt="Icon" className="size-10" />
            <div className="flex justify-between items-center text-white">
              <p className="text-base">Purchase History</p>
              <h1 className="text-2xl font-bold">1000</h1>
            </div>
          </div>
        </article>
      </div>

      <div className="flex flex-col gap-3.5">
        <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>

        <div className="min-h-[390px] bg-base-100 p-5 rounded-2xl shadow overflow-x-auto">
          {isLoading && <TableItemSkeleton />}

          {error && <Error error={error} />}

          {data?.data?.orders?.length === 0 && <Empty />}

          {data?.data?.orders?.length > 0 && (
            <table className="table">
              <thead className="text-sm uppercase text-gray-700">
                <tr>
                  <th>Order ID</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="font-semibold text-gray-500">
                {data?.data?.orders?.map((order) => (
                  <OrderTableItem
                    key={order._id}
                    order={order}
                    setView={setView}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {view.isOpen && (
        <Modal>
          <OrderDialog view={view} setView={setView} />
        </Modal>
      )}
    </section>
  );
}
