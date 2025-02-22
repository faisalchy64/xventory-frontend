export default function ProductTableItem({ setEdit, setRemove }) {
  return (
    <tr>
      <td className="text-nowrap">12345</td>
      <td className="text-nowrap">Apple</td>
      <td className="text-nowrap">150 KG</td>
      <td className="text-nowrap">$100</td>
      <td className="flex items-center gap-2.5 text-nowrap">
        <button
          className="btn btn-xs btn-primary"
          onClick={() =>
            setEdit({
              isOpen: true,
              data: { id: 12345, name: "Apple", quantity: 150, price: 100 },
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
