import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useApiPrivate from "../hooks/useApiPrivate";
import Error from "../components/Error";
import Empty from "../components/Empty";
import OrderTableItem from "../components/OrderTableItem";
import TableItemSkeleton from "../ux/TableItemSkeleton";
import Modal from "../components/Modal";
import OrderDialog from "../components/OrderDialog";
import { manageOrders } from "../apis/order";

export default function ManageOrders() {
  const [page, setPage] = useState(1);
  const [view, setView] = useState({ isOpen: false, data: null });
  const { auth } = useAuth();
  const apiPrivate = useApiPrivate();
  const { isLoading, data, error } = useQuery({
    queryKey: ["manage-orders", auth._id, page],
    queryFn: () => manageOrders(apiPrivate, auth._id, page),
  });

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Manage Orders</h2>

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

      {data?.data?.orders?.length > 0 && (
        <div className="flex items-center gap-2.5">
          <button
            className="btn btn-sm btn-primary"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev > 1 && prev - 1)}
          >
            Previous
          </button>
          <button className="btn btn-sm text-gray-500">{page}</button>
          <button
            className="btn btn-sm btn-primary"
            disabled={Math.ceil(data?.data?.total / 6) === page}
            onClick={() =>
              setPage(
                (prev) => Math.ceil(data?.data?.total / 6) > prev && prev + 1
              )
            }
          >
            Next
          </button>
        </div>
      )}

      {view.isOpen && (
        <Modal>
          <OrderDialog view={view} setView={setView} />
        </Modal>
      )}
    </section>
  );
}
