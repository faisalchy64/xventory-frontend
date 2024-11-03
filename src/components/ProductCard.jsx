import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const {
    _id,
    productName,
    productDescription,
    productPrice,
    productMeasure,
    productImage,
  } = product;

  return (
    <Col md={6} lg={4}>
      <Card>
        <Card.Img
          variant="top"
          src={productImage}
          style={{ height: "250px" }}
          alt="Product image"
          className="object-fit-cover"
        />
        <Card.Body>
          <Card.Title className="text-capitalize">{productName}</Card.Title>
          <Card.Text className="text-xs text-body-secondary my-0">
            {productDescription}
          </Card.Text>
          <Card.Text className="fw-semibold text-uppercase text-body-secondary my-2">
            ${productPrice}.00 / {productMeasure}
          </Card.Text>

          <Link
            to={`/products/${_id}`}
            className="btn bg-primary bg-gradient text-white"
          >
            Order Now
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
