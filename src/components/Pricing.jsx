import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

export default function Pricing() {
  const data = {
    basic: [
      "Manage up to 100 products",
      "Real-time inventory tracking",
      "Supplier management",
      "Order history and basic reporting",
      "Email support",
    ],
    standard: [
      "Manage up to 1,000 products",
      "Advanced reporting and analytics",
      "Bulk order processing",
      "Multi-supplier management",
      "Priority email and chat support",
    ],
    premium: [
      "Unlimited product management",
      "Custom reports and analytics",
      "Automated restocking notifications",
      "Integration with accounting and POS systems",
      "Dedicated account manager and 24/7 premium support",
    ],
  };

  return (
    <Container className="h-screen py-5">
      <h3 className="text-capitalize my-0">
        Find the perfect plan to manage your inventory and grow your business
      </h3>

      <Row className="gy-4 my-3">
        <Col md={6} lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Badge bg="dark" className="bg-gradient">
                Basic
              </Badge>
              <Card.Title className="text-capitalize my-2">Free</Card.Title>
              <Card.Text className="text-xs text-body-secondary my-0">
                For small businesses or startups looking to manage their
                inventory efficiently.
              </Card.Text>

              {data.basic.map((item, index) => (
                <Card.Text
                  key={index}
                  className="d-flex align-items-center text-xs text-body-secondary my-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                  </svg>
                  <span className="px-1">{item}</span>
                </Card.Text>
              ))}
            </Card.Body>

            <Card.Body className="d-flex flex-column justify-content-end">
              <Button variant="primary" className="w-100 bg-gradient">
                Get started
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Badge bg="success" className="bg-gradient">
                Standard
              </Badge>
              <Card.Title className="text-capitalize my-2">
                $29/Month
              </Card.Title>
              <Card.Text className="text-xs text-body-secondary my-0">
                Ideal for growing businesses that need more advanced control and
                insights.
              </Card.Text>

              {data.standard.map((item, index) => (
                <Card.Text
                  key={index}
                  className="d-flex align-items-center text-xs text-body-secondary my-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                  </svg>
                  <span className="px-1">{item}</span>
                </Card.Text>
              ))}
            </Card.Body>

            <Card.Body className="d-flex flex-column justify-content-end">
              <Button variant="primary" className="w-100 bg-gradient">
                Upgrade
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Badge bg="danger" className="bg-gradient">
                Premium
              </Badge>
              <Card.Title className="text-capitalize my-2">
                $29/Month
              </Card.Title>
              <Card.Text className="text-xs text-body-secondary my-0">
                The all-in-one solution for large businesses with complex
                inventory needs.
              </Card.Text>

              {data.premium.map((item, index) => (
                <Card.Text
                  key={index}
                  className="d-flex align-items-center text-xs text-body-secondary my-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                  </svg>
                  <span className="px-1">{item}</span>
                </Card.Text>
              ))}
            </Card.Body>

            <Card.Body className="d-flex flex-column justify-content-end">
              <Button variant="primary" className="w-100 bg-gradient">
                Upgrade
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
