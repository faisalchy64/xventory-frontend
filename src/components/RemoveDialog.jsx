import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import useApiPrivate from "../hooks/useApiPrivate";

export default function RemoveDialog({
  title,
  mutationFn,
  queryKey,
  message,
  remove,
  setRemove,
}) {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync, error } = useMutation({
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
  });
  const apiPrivate = useApiPrivate();

  const onRemove = async () => {
    const { _id } = remove;
    const data = await mutateAsync({ apiPrivate, _id });

    if (data?.status === 200) {
      toast.success(message);
      setRemove({ isOpen: false, _id: null });
    }
  };

  return (
    <article className="card card-compact bg-base-100 w-4/5 md:w-1/2 shadow">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            className="btn btn-ghost"
            onClick={() => setRemove({ isOpen: false, _id: null })}
          >
            <X className="stroke-gray-500" />
          </button>
        </div>

        {error && (
          <p className="text-center text-red-500 bg-red-50 px-2.5 py-1.5 rounded-md">
            {error.status
              ? error.response.data.message
              : "There is a connection error."}
          </p>
        )}

        <h3 className="text-base font-semibold text-center text-gray-700">
          Are you sure you want to perform this action?
        </h3>

        <p className="text-sm text-center text-gray-500">
          This action cannot be undone.
        </p>

        <div className="flex justify-end">
          <button
            className="btn btn-error text-base-300"
            disabled={isPending}
            onClick={onRemove}
          >
            Confirm
          </button>
        </div>
      </div>
    </article>
  );
}
