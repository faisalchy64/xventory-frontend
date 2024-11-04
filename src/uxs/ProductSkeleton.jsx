import { Row, Col, Card, Form, Button } from "react-bootstrap";

export default function ProductSkeleton() {
  return (
    <Row className="g-4">
      <Col lg={6}>
        <Card.Header
          style={{ height: "450px" }}
          className="bg-gray animate-pulse w-100 border-0 rounded"
        />
      </Col>

      <Col lg={6}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="bg-gray animate-pulse fs-3 rounded">
              abc
            </Card.Title>

            <Card.Text className="bg-gray animate-pulse my-0 rounded">
              abc
            </Card.Text>

            <Card.Text className="bg-gray animate-pulse fs-4 my-2 rounded">
              $00.00
            </Card.Text>

            <Card.Text className="bg-gray animate-pulse my-0 rounded">
              abc
            </Card.Text>

            <Card.Text className="bg-gray animate-pulse my-2 rounded">
              abc
            </Card.Text>
          </Card.Body>

          <Card.Body className="d-flex flex-column justify-content-end">
            <Form.Group className="d-flex align-items-center">
              <Button disabled className="animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-dash-circle text-primary"
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
                disabled
                style={{ width: "100px" }}
                className="bg-gray animate-pulse mx-2"
              />

              <Button disabled className="animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </Button>
            </Form.Group>

            <Button
              disabled
              className="animate-pulse w-100 text-primary mt-4 border-0"
            >
              abc
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
