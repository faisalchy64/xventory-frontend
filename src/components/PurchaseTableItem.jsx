export default function PurchaseTableItem({ order, setView }) {
  const { _id, products, payment_status, order_status } = order;
  const text_colors = {
    pending: "text-amber-500",
    paid: "text-green-500",
    delivered: "text-green-500",
    cancelled: "text-red-500",
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>
        $
        {products
          .reduce((acc, product) => acc + product.price * product.orderQty, 0)
          .toFixed(2)}
      </td>
      <td className={`uppercase ${text_colors[payment_status]}`}>
        {payment_status}
      </td>
      <td className={`uppercase ${text_colors[order_status]}`}>
        {order_status}
      </td>
      <td>
        <button
          className="btn btn-sm text-gray-500"
          onClick={() => setView({ isOpen: true, data: { ...order } })}
        >
          View
        </button>
      </td>
    </tr>
  );
}
