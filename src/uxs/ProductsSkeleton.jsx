import { Col, Card, Button } from "react-bootstrap";

export default function ProductsSkeleton() {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {skeletons.map((skeleton) => (
        <Col md={6} lg={4} key={skeleton}>
          <Card>
            <Card.Header
              variant="top"
              style={{ height: "250px" }}
              className="bg-gray animate-pulse border-0"
            />
            <Card.Body>
              <Card.Title className="bg-gray animate-pulse rounded">
                abc
              </Card.Title>
              <Card.Text className="bg-gray animate-pulse my-0 rounded">
                abc
              </Card.Text>
              <Card.Text className="bg-gray animate-pulse fw-semibold my-2 rounded">
                $00.00 / abc
              </Card.Text>

              <Button className="bg-gray animate-pulse btn border-0">
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
