import { Container, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="grow" variant="danger" size="sm" />
      <Spinner animation="grow" variant="danger" size="sm" className="mx-3" />
      <Spinner animation="grow" variant="danger" size="sm" />
    </Container>
  );
}
