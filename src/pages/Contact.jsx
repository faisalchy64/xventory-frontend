import { Container, Image, Card } from "react-bootstrap";
import contact from "../assets/contact.jpg";

export default function Contact() {
  return (
    <Container className="h-screen py-5">
      <Image
        src={contact}
        alt="Contact image"
        className="w-100 img-height object-fit-cover rounded-4"
      />

      <h3 className="text-capitalize my-4">We’d Love to Hear From You</h3>

      <p className="text-xs text-body-tertiary">
        At Xventory, we’re here to help you every step of the way. Whether you
        have questions about our platform, need support with your account, or
        want to learn more about how we can help your business, our team is
        ready to assist you.
      </p>

      <Card>
        <Card.Body>
          <Card.Title>Contact information</Card.Title>
          <Card.Subtitle>Email</Card.Subtitle>
          <Card.Text className="text-secondary">support@xventory.com</Card.Text>
          <Card.Subtitle>Phone</Card.Subtitle>
          <Card.Text className="text-secondary">+1 (555) 123-4567</Card.Text>
          <Card.Subtitle>Address</Card.Subtitle>
          <Card.Text className="text-secondary">
            123 Main St, Anytown, USA
          </Card.Text>
          <Card.Subtitle>Office hours</Card.Subtitle>
          <Card.Text className="text-secondary">Mon - Fri, 9AM - 5PM</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
