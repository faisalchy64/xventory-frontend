export default function Error({ error }) {
  return (
    <p className="w-fit text-sm text-red-500 bg-red-50 px-2.5 py-1.5 mx-auto rounded-md">
      {error.status
        ? error.response.data.message
        : "An unexpected error occurred."}
    </p>
  );
}
