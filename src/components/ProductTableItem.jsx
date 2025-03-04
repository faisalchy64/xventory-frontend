export default function ProductTableItem({ product, setEdit, setRemove }) {
  const { _id, name, quantity, price } = product;

  return (
    <tr>
      <td className="text-nowrap">{_id}</td>
      <td className="capitalize text-nowrap">{name}</td>
      <td className="text-nowrap">{quantity} KG</td>
      <td className="text-nowrap">${price}</td>
      <td className="flex items-center gap-2.5 text-nowrap">
        <button
          className="btn btn-xs btn-primary"
          onClick={() =>
            setEdit({
              isOpen: true,
              data: { ...product },
            })
          }
        >
          Edit
        </button>
        <button
          className="btn btn-xs btn-error text-base-300"
          onClick={() => setRemove({ isOpen: true, id: 12345 })}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
