import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import firebaseAuth from "../firebase";
import useAuth from "../hooks/useAuth";
import { withGoogle } from "../apis/user";

export default function WithGoogle() {
  const provider = new GoogleAuthProvider();
  const { isPending, mutate, data, error } = useMutation({
    mutationFn: withGoogle,
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const from = (state && state.from.pathname) || "/";

  const signinWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(firebaseAuth, provider);
      const token = await user.getIdToken();
      mutate({ token });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (auth || (data && data.status === 200)) {
      localStorage.setItem("auth", JSON.stringify(data.data));
      navigate(from, { replace: true });
    }

    if (error) {
      toast.error(
        error.status
          ? error.response.data.message
          : "There is a connection error."
      );
    }
  }, [auth, from, data, error, navigate]);

  return (
    <button
      className="btn btn-ghost bg-base-200 text-base"
      disabled={isPending}
      onClick={signinWithGoogle}
    >
      Continue with Google
    </button>
  );
}
