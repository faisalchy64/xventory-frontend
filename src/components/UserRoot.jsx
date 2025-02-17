import products from "../assets/products.png";
import orders from "../assets/orders.png";
import purchase from "../assets/purchase.png";

export default function AdminRoot() {
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

        <div className="bg-base-100 p-5 rounded-2xl shadow overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>User Id</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-nowrap">12345</td>
                <td className="text-nowrap">Apple</td>
                <td className="text-nowrap">150 KG</td>
                <td className="text-nowrap">$100</td>
              </tr>

              <tr>
                <td className="text-nowrap">12345</td>
                <td className="text-nowrap">Orange</td>
                <td className="text-nowrap">200 KG</td>
                <td className="text-nowrap">$150</td>
              </tr>

              <tr>
                <td className="text-nowrap">12345</td>
                <td className="text-nowrap">Mango</td>
                <td className="text-nowrap">250 KG</td>
                <td className="text-nowrap">$200</td>
              </tr>

              <tr>
                <td className="text-nowrap">12345</td>
                <td className="text-nowrap">Banana</td>
                <td className="text-nowrap">150 DZ</td>
                <td className="text-nowrap">$250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
