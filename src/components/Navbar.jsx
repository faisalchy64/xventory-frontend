import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { EllipsisVertical, Menu, X } from "lucide-react";
import { signout } from "../apis/user";
import useAuth from "../hooks/useAuth";

export default function Navbar({ setOpen }) {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const { isPending, mutate } = useMutation({
    mutationFn: signout,
  });
  const { auth, setAuth } = useAuth();
  const uris = ["products", "dashboard", "about", "contact"];

  const handleSignout = () => {
    const { email } = auth;
    mutate({ email });
    setAuth(null);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    setShow(false);
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

        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            to="/"
            className="text-sm font-semibold uppercase text-gray-500"
          >
            Home
          </Link>

          {uris.map((uri) => {
            if (uri === "dashboard" && auth === null) {
              return null;
            }

            return (
              <Link
                key={uri}
                to={uri}
                className="text-sm font-semibold uppercase text-gray-500"
              >
                {uri}
              </Link>
            );
          })}

          {auth ? (
            <button
              className="btn btn-error uppercase text-base-200"
              disabled={isPending}
              onClick={handleSignout}
            >
              Signout
            </button>
          ) : (
            <Link to="/signin" className="btn btn-primary uppercase">
              Sign in
            </Link>
          )}
        </div>

        <div className="lg:hidden relative">
          <button className="btn lg:hidden" onClick={() => setShow(!show)}>
            {show ? (
              <X className="stroke-gray-500" />
            ) : (
              <Menu className="stroke-gray-500" />
            )}
          </button>

          {show && (
            <div className="w-40 flex lg:hidden flex-col items-center gap-2.5 bg-base-100 absolute top-[120%] right-0 px-2.5 py-3.5 z-[1000] rounded-2xl shadow">
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
                <button
                  className="btn btn-block btn-error uppercase text-base-200"
                  disabled={isPending}
                  onClick={handleSignout}
                >
                  Signout
                </button>
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
