import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Card,
  Form,
  Button,
} from "react-bootstrap";

export default function Product() {
  const [quantity, setQuantity] = useState(0);

  return (
    <Container className="h-screen d-flex align-items-center py-5">
      <Row className="g-4">
        <Col lg={6}>
          <Image
            src="https://res.cloudinary.com/faisalchy64/image/upload/f_auto,q_auto/v1/inventory-management/lbfzbblqzan7mfmh6uoc?_a=BAMAGScc0"
            alt="Product image"
            className="w-100 h-100 object-fit-cover rounded-4"
          />
        </Col>
        <Col lg={6}>
          <Card className="h-100 d-flex flex-column justify-content-between">
            <Card.Body>
              <Card.Title className="fs-3 text-capitalize">
                green apple
              </Card.Title>

              <Card.Text className="text-body-secondary my-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam veniam perspiciatis, numquam, nesciunt vero iure
                repellendus cupiditate maiores officiis reiciendis ab corrupti
                tenetur? Suscipit unde, distinctio voluptatem non quasi dolore
                temporibus qui possimus vel excepturi! Ab sint nisi veritatis
                possimus inventore, eius eveniet odit sit saepe voluptates
                quidem dolores officiis!
              </Card.Text>

              <Card.Text className="fs-4 fw-semibold text-body-secondary my-2">
                $5.00
              </Card.Text>

              <Card.Text className="text-uppercase text-body-secondary my-0">
                150 kg available in Stock
              </Card.Text>

              <Card.Text className="text-uppercase text-body-secondary my-2">
                Minimum 10 kg order required
              </Card.Text>
            </Card.Body>

            <Card.Body className="d-flex flex-column">
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
                className="w-100 bg-gradient mt-4 border-0"
              >
                Confirm Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
