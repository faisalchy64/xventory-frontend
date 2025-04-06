import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useApiPrivate from "../hooks/useApiPrivate";
import Error from "../components/Error";
import Empty from "../components/Empty";
import TableItemSkeleton from "../ux/TableItemSkeleton";
import Modal from "../components/Modal";
import RemoveDialog from "../components/RemoveDialog";
import { manageUsers, deleteUser } from "../apis/user";

export default function ManageUsers() {
  const [page, setPage] = useState(1);
  const [remove, setRemove] = useState({ isOpen: false, _id: null });
  const { auth } = useAuth();
  const apiPrivate = useApiPrivate();
  const { isLoading, data, error } = useQuery({
    queryKey: ["manage-users", auth._id, page],
    queryFn: () => manageUsers(apiPrivate, page),
  });

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Manage Users</h2>

      <div className="min-h-[390px] bg-base-100 p-5 rounded-2xl shadow overflow-x-auto">
        {isLoading && <TableItemSkeleton />}

        {error && <Error error={error} />}

        {data?.data?.users?.length === 0 && <Empty />}

        {data?.data?.users?.length > 0 && (
          <table className="table">
            <thead className="text-sm uppercase text-gray-700">
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Verified</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="font-semibold text-gray-500">
              {data?.data?.users?.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td className="capitalize">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isVerified ? "True" : "False"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-error text-base-200"
                      onClick={() => setRemove({ isOpen: true, _id: user._id })}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {data?.data?.users?.length > 0 && (
        <div className="flex items-center gap-2.5">
          <button
            className="btn btn-sm btn-primary"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev > 1 && prev - 1)}
          >
            Previous
          </button>
          <button className="btn btn-sm text-gray-500">{page}</button>
          <button
            className="btn btn-sm btn-primary"
            disabled={Math.ceil(data?.data?.total / 6) === page}
            onClick={() =>
              setPage(
                (prev) => Math.ceil(data?.data?.total / 6) > prev && prev + 1
              )
            }
          >
            Next
          </button>
        </div>
      )}

      {remove.isOpen && (
        <Modal>
          <RemoveDialog
            title="Remove this user"
            mutationFn={deleteUser}
            queryKey="manage-users"
            message="User removed successfully."
            remove={remove}
            setRemove={setRemove}
          />
        </Modal>
      )}
    </section>
  );
}
