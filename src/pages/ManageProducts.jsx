import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useApiPrivate from "../hooks/useApiPrivate";
import Error from "../components/Error";
import Empty from "../components/Empty";
import ProductTableItem from "../components/ProductTableItem";
import Modal from "../components/Modal";
import ProductUpdateForm from "../components/ProductUpdateForm";
import RemoveDialog from "../components/RemoveDialog";
import TableItemSkeleton from "../ux/TableItemSkeleton";
import { manageProducts, deleteProduct } from "../apis/product";

export default function ManageProducts() {
  const [page, setPage] = useState(1);
  const [edit, setEdit] = useState({ isOpen: false, data: null });
  const [remove, setRemove] = useState({ isOpen: false, _id: null });
  const { auth } = useAuth();
  const apiPrivate = useApiPrivate();
  const { isLoading, data, error } = useQuery({
    queryKey: ["manage-products", auth._id, page],
    queryFn: () => manageProducts(apiPrivate, auth._id, page),
  });

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Manage Products</h2>

      <div className="min-h-[390px] bg-base-100 p-5 rounded-2xl shadow overflow-x-auto">
        {isLoading && <TableItemSkeleton />}

        {error && <Error error={error} />}

        {data?.data?.products?.length === 0 && <Empty />}

        {data?.data?.products?.length > 0 && (
          <table className="table">
            <thead className="text-sm uppercase text-gray-700">
              <tr>
                <th>Image</th>
                <th>Product Id</th>
                <th>Seller Id</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-500">
              {data?.data?.products?.map((product) => (
                <ProductTableItem
                  key={product._id}
                  product={product}
                  setEdit={setEdit}
                  setRemove={setRemove}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {data?.data?.products?.length > 0 && (
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

      {edit.isOpen && (
        <Modal>
          <ProductUpdateForm edit={edit} setEdit={setEdit} />
        </Modal>
      )}

      {remove.isOpen && (
        <Modal>
          <RemoveDialog
            title="Remove your product"
            mutationFn={deleteProduct}
            queryKey="manage-products"
            message="Product removed successfully."
            remove={remove}
            setRemove={setRemove}
          />
        </Modal>
      )}
    </section>
  );
}
