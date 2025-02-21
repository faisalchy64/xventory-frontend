import { useState } from "react";
import Modal from "../components/Modal";
import ProductUpdateForm from "../components/ProductUpdateForm";
import ProductTableItem from "../components/ProductTableItem";

export default function ManageProducts() {
  const [editShow, setEditShow] = useState(false);

  const handleEdit = (data) => {
    setEditShow(true);
    console.log(data);
  };

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
            <ProductTableItem handleEdit={handleEdit} />
            <ProductTableItem handleEdit={handleEdit} />
            <ProductTableItem handleEdit={handleEdit} />
          </tbody>
        </table>
      </div>

      {editShow && (
        <Modal>
          <ProductUpdateForm setEditShow={setEditShow} />
        </Modal>
      )}
    </section>
  );
}
