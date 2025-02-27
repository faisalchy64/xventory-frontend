import { Outlet, Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";

export default function WithoutAuthRoute() {
  const { loading, auth } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (auth === null) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}
