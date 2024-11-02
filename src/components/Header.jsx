import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { signout } from "../apis/user";

export default function Header() {
  const [run, setRun] = useState(false);
  const { pathname } = useLocation();
  const { isLoading, data } = useQuery({
    queryKey: ["auth"],
    queryFn: signout,
    enabled: run,
  });
  const { auth, setAuth } = useAuth();
  const uris = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/products",
      name: "Products",
    },
    {
      id: 3,
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      id: 4,
      path: "/about",
      name: "About",
    },
    {
      id: 5,
      path: "/contact",
      name: "Contact",
    },
  ];

  useEffect(() => {
    if (data) {
      setRun(false);
      setAuth(null);
      localStorage.removeItem("auth");
    }
  }, [data, setAuth]);

  return (
    <Navbar expand="md" className="bg-body-tertiary py-3">
      <Container className="d-flex align-items-center">
        <Link to="/">
          <h3 className="brand fw-semibold my-0">Xventory</h3>
        </Link>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="navs ms-auto">
            {uris.map((uri) => {
              if (uri.path === "/dashboard" && auth === null) {
                return null;
              }

              return (
                <Link
                  key={uri.id}
                  to={uri.path}
                  className={`${
                    pathname === uri.path && "fw-semibold text-dark"
                  }`}
                >
                  {uri.name}
                </Link>
              );
            })}

            {auth ? (
              <>
                <h6 className="text-body-tertiary fw-semibold text-uppercase my-0">
                  | {auth && auth.name.split(" ")[0]} |
                </h6>
                <Button
                  disabled={isLoading}
                  variant="danger"
                  className="bg-gradient"
                  onClick={() => setRun(true)}
                >
                  Sign-out
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="btn bg-dark bg-gradient text-white"
                >
                  Sign-in
                </Link>
                <Link
                  to="/signup"
                  className="btn bg-primary bg-gradient text-white"
                >
                  Get started
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
