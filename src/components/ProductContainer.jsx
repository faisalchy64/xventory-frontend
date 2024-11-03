import { Container, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product";
import ProductCard from "./ProductCard";
import ProductsSkeleton from "../uxs/ProductsSkeleton";

export default function ProductContainer() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <Container className="h-screen py-5">
      <h3 className="text-capitalize my-0">
        Browse, compare and order products from trusted suppliers
      </h3>

      <Row className="gy-4 my-3">
        {isLoading && <ProductsSkeleton />}

        {data &&
          data.products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </Row>

      {data && data.products.length === 0 && (
        <Alert variant="secondary" className="text-dark py-2 my-5 border-0">
          No products found.
        </Alert>
      )}

      {data === undefined && error && (
        <Alert variant="danger" className="text-danger py-2 my-5 border-0">
          {error.response ? error.response.data.message : error.message}
        </Alert>
      )}

      <Link
        to="/products"
        style={{ width: "fit-content" }}
        className="d-block btn btn-lg bg-primary bg-gradient text-white mx-auto"
      >
        See All Products
      </Link>
    </Container>
  );
}
