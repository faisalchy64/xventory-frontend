import { Container, Row, Pagination } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import ProductSearch from "../components/ProductSearch";

export default function Products() {
  return (
    <Container className="h-screen d-flex flex-column justify-content-center py-5">
      <ProductSearch />

      <h3 className="text-capitalize my-4">
        Browse, compare and order products from trusted suppliers
      </h3>

      <Row className="gy-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>

      <Pagination className="mx-auto my-4">
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item active>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
}
