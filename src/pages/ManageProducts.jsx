import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useApiPrivate from "../hooks/useApiPrivate";
import ProductTableItem from "../components/ProductTableItem";
import Modal from "../components/Modal";
import ProductUpdateForm from "../components/ProductUpdateForm";
import ProductRemoveDialog from "../components/ProductRemoveDialog";
import TableItemSkeleton from "../ux/TableItemSkeleton";
import { manageProduct } from "../apis/product";

export default function ManageProducts() {
  const [edit, setEdit] = useState({ isOpen: false, data: null });
  const [remove, setRemove] = useState({ isOpen: false, _id: null });
  const [page, setPage] = useState(1);
  const { auth } = useAuth();
  const apiPrivate = useApiPrivate();
  const { isLoading, data, error } = useQuery({
    queryKey: ["manage-products", auth._id, page],
    queryFn: () => manageProduct(apiPrivate, auth._id, page),
  });

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Manage Products</h2>

      <div className="min-h-[390px] bg-base-100 p-5 rounded-2xl shadow overflow-x-auto">
        {isLoading && <TableItemSkeleton />}

        {error && (
          <p className="w-fit text-red-500 bg-red-50 px-2.5 py-1.5 mx-auto rounded-md">
            {error.status
              ? error.response.data.message
              : "There is a connection error. Try again a few minutes after."}
          </p>
        )}

        {data && data.data.products.length === 0 && (
          <p className="w-fit text-gray-500 bg-gray-50 px-2.5 py-1.5 mx-auto rounded-md">
            No products found.
          </p>
        )}

        {data && data.data.products.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.data.products.map((product) => (
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

      {data && data.data.products.length > 0 && (
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
            disabled={Math.ceil(data.data.total / 6) === page}
            onClick={() =>
              setPage(
                (prev) => Math.ceil(data.data.total / 6) > prev && prev + 1
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
          <ProductRemoveDialog remove={remove} setRemove={setRemove} />
        </Modal>
      )}
    </section>
  );
}
