import { useState, useEffect } from "react";
import useAuth from "./useAuth";

export default function useAuthCheck() {
  const [loading, setLoading] = useState(true);
  const { setAuth } = useAuth();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      setAuth(auth);
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [setAuth]);

  return loading;
}
