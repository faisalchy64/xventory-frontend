import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import AuthProvider from "./components/AuthProvider";
import Loading from "./uxs/Loading";
import router from "./router";

export default function App() {
  const loading = useAuthCheck();

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
