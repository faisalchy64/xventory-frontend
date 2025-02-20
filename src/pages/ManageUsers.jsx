export default function ManageUsers() {
  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Manage Users</h2>

      <div className="bg-base-100 p-5 rounded-2xl shadow overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-nowrap">12345</td>
              <td className="text-nowrap">Abc</td>
              <td className="text-nowrap">abc@abc.com</td>
              <td className="text-nowrap">True</td>
              <td className="flex items-center gap-2.5 text-nowrap">
                <button className="btn btn-xs btn-primary">Edit</button>
                <button className="btn btn-xs btn-error">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
