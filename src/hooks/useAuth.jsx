import { useState, useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      setAuth({ ...auth });
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [setAuth]);

  return { loading, auth, setAuth };
}
