import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="w-4/5 h-screen flex flex-col justify-center items-center gap-2.5 mx-auto">
      <h1 className="text-9xl font-semibold text-gray-800">404!</h1>

      <h3 className="text-4xl font-semibold text-gray-700">Page not found</h3>

      <p className="text-center text-gray-500 py-2.5">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Link to="/" className="btn btn-primary text-base">
        Go back home
      </Link>
    </main>
  );
}
