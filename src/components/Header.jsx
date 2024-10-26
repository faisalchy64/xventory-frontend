import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
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

  const handleSignOut = () => {
    console.log("Sign-out");
  };

  return (
    <Navbar expand="md" className="bg-body-tertiary py-3">
      <Container className="d-flex align-items-center">
        <Link to="/">
          <h3 className="brand fw-semibold my-0">Xventory</h3>
        </Link>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="navs ms-auto">
            {uris.map((uri) => (
              <Link
                key={uri.id}
                to={uri.path}
                className={`${
                  pathname === uri.path && "fw-semibold text-dark"
                }`}
              >
                {uri.name}
              </Link>
            ))}

            <>
              <Link to="/signin" className="btn bg-dark bg-gradient text-white">
                Sign-in
              </Link>
              <Link
                to="/signup"
                className="btn bg-primary bg-gradient text-white"
              >
                Get started
              </Link>
            </>

            <>
              <h6 className="text-body-tertiary text-uppercase my-0">
                | faisal |
              </h6>
              <Button
                variant="danger"
                className="bg-gradient"
                onClick={handleSignOut}
              >
                Sign-out
              </Button>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
