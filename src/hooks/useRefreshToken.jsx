import toast from "react-hot-toast";
import api from "../api";
import useAuth from "./useAuth";

export default function useRefreshToken() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const { data } = await api.get("/refresh-token");
      setAuth({ ...data.data });
      if (data && data.status === 200) {
        localStorage.setItem("auth", JSON.stringify(data.data));
      }
    } catch (error) {
      if (error.response.data.status === 401) {
        toast.error(error.response.data.message);
        localStorage.removeItem("auth");
        setAuth(null);
      }
    }
  };

  return refresh;
}
