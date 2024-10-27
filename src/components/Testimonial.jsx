import { Container, Row, Col, Card } from "react-bootstrap";

export default function Testimonial() {
  return (
    <Container className="h-screen py-5">
      <h3 className="text-capitalize mb-5">
        Your success, our mission, testimonials from thriving businesses
      </h3>

      <Row className="g-4">
        <Col md={5}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <Card.Img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=600"
                alt="Person image"
                className="size object-fit-cover rounded-circle"
              />
              <Card.Body className="py-0">
                <Card.Subtitle>John Doe,</Card.Subtitle>
                <Card.Text className="text-xs text-body-secondary">
                  Owner, ABC Retail
                </Card.Text>
              </Card.Body>
            </Card.Body>

            <Card.Body>
              <Card.Text className="text-xs text-body-secondary">
                "This inventory management app has been a game-changer for my
                business. It's intuitive, efficient, and has streamlined our
                entire supply chain process."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <Card.Img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=600"
                alt="Person image"
                className="size object-fit-cover rounded-circle"
              />
              <Card.Body className="py-0">
                <Card.Subtitle>Sarah Lee,</Card.Subtitle>
                <Card.Text className="text-xs text-body-secondary">
                  Supplier, XYZ Wholesaler
                </Card.Text>
              </Card.Body>
            </Card.Body>

            <Card.Body>
              <Card.Text className="text-xs text-body-secondary">
                "As a supplier, I've never had an easier time tracking and
                managing my inventory. The app's features make it a breeze to
                keep everything organized and up-to-date."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <Card.Img
                src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&w=600"
                alt="Person image"
                className="size object-fit-cover rounded-circle"
              />
              <Card.Body className="py-0">
                <Card.Subtitle>Emily Chen,</Card.Subtitle>
                <Card.Text className="text-xs text-body-secondary">
                  Owner, Acme Enterprises
                </Card.Text>
              </Card.Body>
            </Card.Body>

            <Card.Body>
              <Card.Text className="text-xs text-body-secondary">
                "I was hesitant to try a new inventory management system, but
                this app has exceeded all of my expectations. It's
                user-friendly, and the customer support team is fantastic."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <Card.Img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=600"
                alt="Person image"
                className="size object-fit-cover rounded-circle"
              />
              <Card.Body className="py-0">
                <Card.Subtitle>Michael Johnson,</Card.Subtitle>
                <Card.Text className="text-xs text-body-secondary">
                  Owner, Omega Express
                </Card.Text>
              </Card.Body>
            </Card.Body>

            <Card.Body>
              <Card.Text className="text-xs text-body-secondary">
                "This app has saved me so much time and money. I can easily
                compare prices, place orders, and monitor my inventory levels
                all in one place."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <Card.Img
                src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&w=600"
                alt="Person image"
                className="size object-fit-cover rounded-circle"
              />
              <Card.Body className="py-0">
                <Card.Subtitle>Lisa Patel,</Card.Subtitle>
                <Card.Text className="text-xs text-body-secondary">
                  Owner, Delta Marketplace
                </Card.Text>
              </Card.Body>
            </Card.Body>

            <Card.Body>
              <Card.Text className="text-xs text-body-secondary">
                "As a growing business, we needed a reliable and scalable
                inventory management solution. This app has been the perfect
                fit, and it's helped us streamline our operations."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <Card.Img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&w=600"
                alt="Person image"
                className="size object-fit-cover rounded-circle"
              />
              <Card.Body className="py-0">
                <Card.Subtitle>David Lee,</Card.Subtitle>
                <Card.Text className="text-xs text-body-secondary">
                  Supplier, Gamma Distributors
                </Card.Text>
              </Card.Body>
            </Card.Body>

            <Card.Body>
              <Card.Text className="text-xs text-body-secondary">
                "I highly recommend this inventory management app to any
                business owner or supplier looking to improve their operations.
                It's been a game-changer for us."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
