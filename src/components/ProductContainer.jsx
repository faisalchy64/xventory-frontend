import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ProductContainer() {
  return (
    <Container className="h-screen d-flex flex-column justify-content-center py-5">
      <h3 className="text-capitalize my-0">
        Browse, compare and order products from trusted suppliers
      </h3>

      <Row className="gy-4 my-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>

      <Link
        to="/products"
        className="btn btn-lg bg-primary bg-gradient text-white mx-auto"
      >
        See All Products
      </Link>
    </Container>
  );
}
