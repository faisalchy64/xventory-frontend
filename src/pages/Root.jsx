import AdminRoot from "../components/AdminRoot";
import UserRoot from "../components/UserRoot";
import useAuth from "../hooks/useAuth";

export default function Root() {
  const { auth } = useAuth();

  if (auth && auth.isAdmin) {
    return <AdminRoot />;
  }

  return <UserRoot />;
}
