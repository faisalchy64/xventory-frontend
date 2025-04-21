export default function TableItemSkeleton() {
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
          </th>

          <th>
            <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
          </th>

          <th>
            <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
          </th>

          <th>
            <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
          </th>

          <th>
            <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
          </th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item}>
            <td>
              <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
            </td>

            <td>
              <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
            </td>

            <td>
              <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
            </td>

            <td>
              <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
            </td>

            <td>
              <span className="h-5 block bg-gray-200 animate-pulse rounded-md" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
