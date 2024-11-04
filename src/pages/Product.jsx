import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Col,
  Container,
  Row,
  Image,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { getProduct } from "../apis/product";
import useAuth from "../hooks/useAuth";
import ProductSkeleton from "../uxs/ProductSkeleton";

export default function Product() {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
  });
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleOrder = async () => {
    if (auth === null) {
      return navigate("/signin");
    }

    console.log(quantity);
    setQuantity(0);
  };

  return (
    <Container className="h-screen d-flex flex-column justify-content-center py-5">
      {isLoading && <ProductSkeleton />}

      {data && (
        <Row className="g-4">
          <Col lg={6}>
            <Image
              src={data.productImage}
              alt="Product image"
              style={{ height: "450px" }}
              className="w-100 object-fit-cover rounded"
            />
          </Col>

          <Col lg={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="fs-3 text-capitalize">
                  {data.productName}
                </Card.Title>

                <Card.Text className="text-body-secondary my-0">
                  {data.productDescription}
                </Card.Text>

                <Card.Text className="fs-4 fw-semibold text-uppercase text-body-secondary my-2">
                  ${data.productPrice}.00 / {data.productMeasure}
                </Card.Text>

                <Card.Text className="text-uppercase text-body-secondary my-0">
                  {data.productQuantity} {data.productMeasure} available in
                  Stock
                </Card.Text>

                <Card.Text className="text-uppercase text-body-secondary my-2">
                  Minimum {data.minimumQuantity} {data.productMeasure} order
                  required
                </Card.Text>
              </Card.Body>

              <Card.Body className="d-flex flex-column justify-content-end">
                <Form.Group className="d-flex align-items-center">
                  <Button
                    variant="secondary"
                    className="bg-gradient"
                    disabled={quantity - 1 < 0}
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-dash-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                    </svg>
                  </Button>

                  <Form.Control
                    type="number"
                    name="quantity"
                    min="0"
                    style={{ width: "100px" }}
                    className="mx-2"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />

                  <Button
                    variant="danger"
                    className="bg-gradient"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                  </Button>
                </Form.Group>

                <Button
                  variant="primary"
                  disabled={
                    quantity < data.minimumQuantity ||
                    data.productQuantity < quantity
                  }
                  className="w-100 bg-gradient mt-4 border-0"
                  onClick={handleOrder}
                >
                  Confirm Order
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {data === undefined && error && (
        <Alert variant="danger" className="text-danger py-2 my-5 border-0">
          {error.response ? error.response.data.message : error.message}
        </Alert>
      )}
    </Container>
  );
}
