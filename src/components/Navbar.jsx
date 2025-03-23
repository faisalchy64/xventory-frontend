import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { EllipsisVertical, ShoppingBag, UserRound, Menu } from "lucide-react";
import { signOut } from "firebase/auth";
import { signout } from "../apis/user";
import useAuth from "../hooks/useAuth";
import firebaseAuth from "../firebase";

export default function Navbar({ setOpen }) {
  const [show, setShow] = useState(false);
  const [authMenu, setAuthMenu] = useState(false);
  const { pathname } = useLocation();
  const { isPending, mutate } = useMutation({
    mutationFn: signout,
  });
  const { auth, setAuth } = useAuth();
  const uris = ["products", "about", "contact"];

  const handleSignout = async () => {
    const { email } = auth;
    mutate({ email });

    if (firebaseAuth.currentUser) {
      await signOut(firebaseAuth);
    }

    setAuth(null);
    setShow(false);
    setAuthMenu(false);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    setShow(false);
    setAuthMenu(false);
  }, [pathname]);

  return (
    <nav className="bg-white py-5 border-b">
      <div className="w-4/5 flex justify-between items-center mx-auto">
        <div className="flex items-center gap-2.5">
          {auth && pathname.includes("/dashboard") && (
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setOpen(true)}
            >
              <EllipsisVertical className="stroke-gray-500" />
            </button>
          )}
          <Link to="/">
            <h3 className="logo text-2xl font-bold">Xventory</h3>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-2.5 relative">
          <Link
            to="/"
            className="text-sm font-semibold uppercase text-gray-500"
          >
            Home
          </Link>

          {uris.map((uri) => (
            <Link
              key={uri}
              to={uri}
              className="text-sm font-semibold uppercase text-gray-500"
            >
              {uri}
            </Link>
          ))}

          <Link to="/cart" className="btn">
            <ShoppingBag className="stroke-gray-500" />
          </Link>

          {auth ? (
            <button
              className="btn btn-circle btn-primary"
              onClick={() => setAuthMenu(!authMenu)}
            >
              <UserRound />
            </button>
          ) : (
            <Link to="/signin" className="btn btn-primary uppercase">
              Sign in
            </Link>
          )}

          {authMenu && auth && (
            <div className="hidden lg:flex flex-col items-center gap-2.5 bg-base-100 absolute top-[120%] right-0 px-2.5 py-3.5 z-[1000] rounded-2xl shadow">
              <p className="text-gray-500 border-b">{auth.email}</p>

              <Link to="/dashboard" className="uppercase text-gray-500">
                Dashboard
              </Link>

              <button
                className="btn btn-block btn-error uppercase text-base-200"
                disabled={isPending}
                onClick={handleSignout}
              >
                Signout
              </button>
            </div>
          )}
        </div>

        <div className="lg:hidden flex items-center gap-2.5 relative">
          <Link to="/cart" className="btn">
            <ShoppingBag className="stroke-gray-500" />
          </Link>

          <button
            className={`btn lg:hidden ${auth && "btn-circle btn-primary"}`}
            onClick={() => setShow(!show)}
          >
            {auth ? <UserRound /> : <Menu className="stroke-gray-500" />}
          </button>

          {show && (
            <div
              className={`${
                auth ? "w-fit" : "w-40"
              } flex lg:hidden flex-col items-center gap-2.5 bg-base-100 absolute top-[120%] right-0 px-2.5 py-3.5 z-[1000] rounded-2xl shadow`}
            >
              {auth && <p className="text-gray-500 border-b">{auth.email}</p>}

              <Link to="/" className="uppercase text-gray-500">
                Home
              </Link>

              {uris.map((uri) => {
                if (uri === "dashboard" && auth === null) {
                  return null;
                }

                return (
                  <Link key={uri} to={uri} className="uppercase text-gray-500">
                    {uri}
                  </Link>
                );
              })}

              {auth ? (
                <>
                  <Link to="/dashboard" className="uppercase text-gray-500">
                    Dashboard
                  </Link>

                  <button
                    className="btn btn-block btn-error uppercase text-base-200"
                    disabled={isPending}
                    onClick={handleSignout}
                  >
                    Signout
                  </button>
                </>
              ) : (
                <Link
                  to="/signin"
                  className="btn btn-block btn-primary uppercase"
                >
                  Sign in
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
