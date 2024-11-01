import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import Loading from "./uxs/Loading";
import router from "./router";

export default function App() {
  const loading = useAuthCheck();

  if (loading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;
}
