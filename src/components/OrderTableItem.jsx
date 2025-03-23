export default function OrderTableItem({ order }) {
  const { _id, customer, amount, payment_status, order_status } = order;

  return (
    <tr>
      <td>{_id}</td>
      <td className="uppercase">{customer.name}</td>
      <td>${amount}</td>

      <td>
        <span className="uppercase text-green-500 bg-green-50 px-1.5 py-0.5 rounded-md">
          {payment_status}
        </span>
      </td>

      <td>
        <span className="uppercase text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded-md">
          {order_status}
        </span>
      </td>

      <td>
        <button className="btn btn-sm text-gray-500">View</button>
      </td>
    </tr>
  );
}
