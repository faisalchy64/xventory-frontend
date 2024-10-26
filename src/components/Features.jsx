import { Container, Row, Col, Card } from "react-bootstrap";
import time from "../assets/real-time.png";
import management from "../assets/management.png";
import order from "../assets/order.png";
import analysis from "../assets/analysis.png";

export default function Features() {
  return (
    <Container className="h-screen py-5">
      <h3 className="text-capitalize mb-5">
        Powerful features to elevate your supply chain management
      </h3>

      <Row className="gy-4">
        <Col md={6} lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Img
                variant="top"
                src={time}
                alt="Feature icon"
                className="size"
              />
              <Card.Title className="my-3">
                Stay updated, stay in control
              </Card.Title>
              <Card.Text className="text-xs text-body-secondary">
                Monitor stock levels in real time with our intuitive dashboard.
                Whether you're a supplier or business owner, get instant updates
                on product availability to prevent stockouts or overstock.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Img
                variant="top"
                src={management}
                alt="Feature icon"
                className="size"
              />
              <Card.Title className="my-3">
                Manage inventory with ease
              </Card.Title>
              <Card.Text className="text-xs text-body-secondary">
                Suppliers can effortlessly add, edit, or remove products, set
                pricing, and categorize inventory for a streamlined management
                experience. Organize your stock with customizable filters and
                tags.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Img
                variant="top"
                src={order}
                alt="Feature icon"
                className="size"
              />
              <Card.Title className="my-3">
                Simplified purchasing for business owners
              </Card.Title>
              <Card.Text className="text-xs text-body-secondary">
                Find the products you need from trusted suppliers with ease.
                Business owners can browse product catalogs, place orders, and
                track shipments-all from one platform.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Img
                variant="top"
                src={analysis}
                alt="Feature icon"
                className="size"
              />
              <Card.Title className="my-3">
                Make data-driven decisions
              </Card.Title>
              <Card.Text className="text-xs text-body-secondary">
                Gain valuable insights into your inventory and purchasing trends
                with detailed analytics. From sales performance to stock
                movement, access reports that help you optimize your business
                decisions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
