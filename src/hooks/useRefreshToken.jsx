import api from "../api";
import useAuth from "./useAuth";

export default function useRefreshToken() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const res = await api.get("/refresh-token");
      setAuth({ ...res.data.data });
      console.log(res);
    } catch (error) {
      // maybe clear the local storage and set setAuth to null
      console.log(error);
    }
  };

  return refresh;
}
