import { useState } from "react";
import ProductTableItem from "../components/ProductTableItem";
import Modal from "../components/Modal";
import ProductUpdateForm from "../components/ProductUpdateForm";
import ProductRemoveDialog from "../components/ProductRemoveDialog";

export default function ManageProducts() {
  const [edit, setEdit] = useState({ isOpen: false, data: null });
  const [remove, setRemove] = useState({ isOpen: false, id: null });

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Manage Products</h2>

      <div className="bg-base-100 p-5 rounded-2xl shadow overflow-x-auto">
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
            <ProductTableItem setEdit={setEdit} setRemove={setRemove} />
          </tbody>
        </table>
      </div>

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
