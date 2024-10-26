import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <Col md={6} lg={4}>
      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/faisalchy64/image/upload/f_auto,q_auto/v1/inventory-management/lbfzbblqzan7mfmh6uoc?_a=BAMAGScc0"
        />
        <Card.Body>
          <Card.Title className="text-capitalize">green apple</Card.Title>
          <Card.Text className="text-xs text-body-secondary my-0">
            Fresh and organic green apple.
          </Card.Text>
          <Card.Text className="fw-semibold text-body-secondary my-2">
            $5.00
          </Card.Text>

          <Link
            to={`/products/id`}
            className="btn bg-primary bg-gradient text-white"
          >
            Order Now
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
