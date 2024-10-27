import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <Container className="h-screen d-flex align-items-center py-5">
      <Card className="call-to-action border-0">
        <Card.Body className="p-5">
          <Card.Title className="text-white">
            Take control of your inventory
          </Card.Title>
          <Card.Text className="text-xs text-light">
            Stop wasting time with outdated processes. Track your products,
            manage orders, and grow your business-all in one place. Signup now
            and see how simple inventory management can be.
          </Card.Text>

          <Link
            to="/signup"
            className="btn btn-lg bg-primary bg-gradient text-white"
          >
            Get started
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
