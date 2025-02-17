export default function ManageProducts() {
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
            <tr>
              <td className="text-nowrap">12345</td>
              <td className="text-nowrap">Apple</td>
              <td className="text-nowrap">150 KG</td>
              <td className="text-nowrap">$100</td>
              <td className="flex items-center gap-2.5 text-nowrap">
                <button className="btn btn-xs btn-primary">Edit</button>
                <button className="btn btn-xs btn-error">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="text-nowrap">12345</td>
              <td className="text-nowrap">Orange</td>
              <td className="text-nowrap">200 KG</td>
              <td className="text-nowrap">$150</td>
              <td className="flex items-center gap-2.5 text-nowrap">
                <button className="btn btn-xs btn-primary">Edit</button>
                <button className="btn btn-xs btn-error">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
