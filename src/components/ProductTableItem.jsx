export default function ProductTableItem({ product, setEdit, setRemove }) {
  const { _id, name, quantity, price } = product;

  return (
    <tr>
      <td>{_id}</td>
      <td className="capitalize text-nowrap">{name}</td>
      <td>{quantity} KG</td>
      <td>${price}</td>
      <td className="flex items-center gap-2.5">
        <button
          className="btn btn-sm btn-primary"
          onClick={() =>
            setEdit({
              isOpen: true,
              data: { ...product },
            })
          }
        >
          Update
        </button>
        <button
          className="btn btn-sm btn-error text-base-300"
          onClick={() => setRemove({ isOpen: true, _id })}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
