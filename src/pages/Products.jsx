import { Container, Row, Alert } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product";
import ProductSearch from "../components/ProductSearch";
import ProductCard from "../components/ProductCard";
import ProductsSkeleton from "../uxs/ProductsSkeleton";
import PaginationContainer from "../components/PaginationContainer";
import { useState } from "react";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(currentPage),
  });

  return (
    <Container className="h-screen py-5">
      <ProductSearch />

      <h3 className="text-capitalize my-4">
        Browse, compare and order products from trusted suppliers
      </h3>

      <Row className="gy-4">
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

      {data && data.products.length > 0 && (
        <PaginationContainer
          total={data.total}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
}
