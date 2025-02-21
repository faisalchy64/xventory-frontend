export default function ProductTableItem({ handleEdit }) {
  return (
    <tr>
      <td className="text-nowrap">12345</td>
      <td className="text-nowrap">Apple</td>
      <td className="text-nowrap">150 KG</td>
      <td className="text-nowrap">$100</td>
      <td className="flex items-center gap-2.5 text-nowrap">
        <button
          className="btn btn-xs btn-primary"
          onClick={() => handleEdit({ id: 12345 })}
        >
          Edit
        </button>
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
}
