import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  const data = {
    explore: [
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
    ],
    support: [
      {
        id: 1,
        path: "/contact",
        name: "Contact",
      },
      {
        id: 2,
        path: "/help",
        name: "Help Center",
      },
      {
        id: 3,
        path: "/api",
        name: "Api Documentation",
      },
      {
        id: 4,
        path: "/system",
        name: "System Status",
      },
    ],
    legal: [
      {
        id: 1,
        path: "/privacy",
        name: "Privacy Policy",
      },
      {
        id: 2,
        path: "/terms",
        name: "Terms of Service",
      },
      {
        id: 3,
        path: "/cookie",
        name: "Cookie Policy",
      },
      {
        id: 4,
        path: "/data",
        name: "Data Policy",
      },
    ],
  };

  return (
    <>
      <Container fluid className="bg-black bg-gradient p-5">
        <Row className="g-4">
          <Col md={6} lg={3}>
            <Link to="/">
              <h3 className="brand fw-semibold my-0">Xventory</h3>
            </Link>
            <p className="text-xs text-light my-2">
              Start today with a free trial and see how our platform can make
              inventory management easy and efficient for your business.
            </p>
          </Col>

          <Col md={6} lg={3}>
            <ListGroup>
              <ListGroup.Item>Explore</ListGroup.Item>
              {data.explore.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={6} lg={3}>
            <ListGroup>
              <ListGroup.Item>Support</ListGroup.Item>
              {data.support.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={6} lg={3}>
            <ListGroup>
              <ListGroup.Item>Legal</ListGroup.Item>
              {data.legal.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{ background: "#84CC16" }}
        className="d-flex justify-content-center align-items-center py-4"
      >
        <h6 className="text-xs text-light my-0">
          Xventory {new Date().getFullYear()}. All rights reserved.
        </h6>
      </Container>
    </>
  );
}
