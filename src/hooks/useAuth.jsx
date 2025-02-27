import { useState, useEffect } from "react";

export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      setAuth({ ...auth });
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return { loading, auth, setAuth };
}
