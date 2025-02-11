import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const uris = ["products", "dashboard", "about", "contact"];

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <nav className="bg-white py-5 border-b">
      <div className="w-4/5 flex justify-between items-center mx-auto">
        <Link to="/">
          <h3 className="logo text-2xl font-bold">Xventory</h3>
        </Link>

        <div className="hidden md:flex items-center gap-2.5">
          <Link
            to="/"
            className="text-sm font-semibold uppercase text-gray-600"
          >
            Home
          </Link>

          {uris.map((uri) => (
            <Link
              key={uri}
              to={uri}
              className="text-sm font-semibold uppercase text-gray-600"
            >
              {uri}
            </Link>
          ))}

          <Link to="/signin">
            <button className="btn btn-primary uppercase">Get Started</button>
          </Link>
        </div>

        <div className="md:hidden relative">
          <button className="btn md:hidden" onClick={() => setShow(!show)}>
            {show ? <X /> : <Menu />}
          </button>

          {show && (
            <div className="w-60 flex md:hidden flex-col items-center gap-2.5 bg-base-100 absolute top-[120%] right-0 px-2.5 py-3.5 z-[1000] rounded-md shadow">
              <Link
                to="/"
                className="btn w-full uppercase text-gray-600 bg-base-200"
              >
                Home
              </Link>

              {uris.map((uri) => (
                <Link
                  key={uri}
                  to={uri}
                  className="btn w-full uppercase text-gray-600 bg-base-200"
                >
                  {uri}
                </Link>
              ))}

              <Link to="/signin" className="btn btn-primary w-full uppercase">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
