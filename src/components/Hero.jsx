import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <Container className="h-screen d-flex align-items-center py-5">
      <Row className="flex-column-reverse flex-md-row g-4">
        <Col md={6}>
          <h1 className="hero-heading my-0">
            Streamline Your Inventory, Boost Your Business
          </h1>
          <p className="text-body-tertiary my-3">
            Manage your products, track your stock, and source new supplies
            effortlessly. Our platform is built to save you time and boost
            productivity, whether you are a supplier or a business owner.
          </p>

          <Link
            to="/signup"
            className="btn btn-lg bg-primary bg-gradient text-white"
          >
            Get started
          </Link>
        </Col>
        <Col md={6}>
          <Image
            src={hero}
            alt="Hero image"
            className="w-100 h-100 object-fit-cover rounded-4"
          />
        </Col>
      </Row>
    </Container>
  );
}
