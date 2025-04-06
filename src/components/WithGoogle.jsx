import { useLocation, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import firebaseAuth from "../firebase";
import { withGoogle } from "../apis/user";

export default function WithGoogle() {
  const provider = new GoogleAuthProvider();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: withGoogle,
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const from = (state && state.from.pathname) || "/";

  const signinWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(firebaseAuth, provider);
      const token = await user.getIdToken();
      const data = await mutateAsync({ token });

      if (data?.status === 200) {
        localStorage.setItem("auth", JSON.stringify(data.data));
        navigate(from, { replace: true });
      }
    } catch (error) {
      toast.error(
        error.status
          ? error.response.data.message
          : "An unexpected error occurred."
      );
    }
  };

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
