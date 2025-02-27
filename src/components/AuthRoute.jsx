import { useLocation, Outlet, Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";

export default function AuthRoute() {
  const from = useLocation();
  const { loading, auth } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (auth && auth.isVerified) {
    return <Outlet />;
  }

  return <Navigate to="/signin" state={{ from }} replace />;
}
