import { X } from "lucide-react";

export default function ProductRemoveDialog({ remove, setRemove }) {
  const onRemove = () => {
    console.log(remove);
    setRemove({ isOpen: false, id: null });
  };

  return (
    <article className="card card-compact bg-base-100 w-4/5 md:w-1/2 shadow">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Remove Product</h2>
          <button
            className="btn btn-ghost"
            onClick={() => setRemove({ isOpen: false, id: null })}
          >
            <X className="stroke-gray-500" />
          </button>
        </div>

        <h3 className="text-base font-semibold text-center text-gray-700">
          Are you sure you want to remove this product?
        </h3>

        <p className="text-sm text-center text-gray-500">
          This action cannot be undone.
        </p>

        <div className="flex justify-end">
          <button className="btn btn-error text-base-300" onClick={onRemove}>
            Confirm
          </button>
        </div>
      </div>
    </article>
  );
}
