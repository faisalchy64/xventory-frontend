import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import img from "../assets/create.svg";

export default function CreateProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container className="h-screen d-flex flex-column justify-content-center py-5">
      <Row className="d-flex align-items-center g-4">
        <Col lg={6} className="d-none d-md-block">
          <Image
            src={img}
            alt="Create image"
            className="w-100 h-100 object-fit-contain rounded-4"
          />
        </Col>

        <Col lg={6}>
          <Form
            className="form bg-light bg-gradient border rounded p-4 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="my-0">Create new product</h3>

            <Form.Group className="my-3">
              <Form.Label htmlFor="name" className="my-0">
                Name
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Enter product name"
                autoComplete="off"
                className="my-1"
                {...register("productName", {
                  required: {
                    value: true,
                    message: "Name is required.",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]{3,}$/,
                    message: "Enter valid name.",
                  },
                })}
              />

              {errors && errors.productName && (
                <Form.Text className="text-danger">
                  {errors.productName.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="description" className="my-0">
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                rows="5"
                id="description"
                placeholder="Enter product description"
                autoComplete="off"
                style={{ resize: "none" }}
                className="my-1"
                {...register("productDescription", {
                  required: {
                    value: true,
                    message: "Description is required.",
                  },
                  pattern: {
                    value: /^(?!\s)([a-zA-Z0-9.,'"\-:;()&%$#!? ]{10,500})$/,
                    message: "Enter valid description.",
                  },
                })}
              />

              {errors && errors.productDescription && (
                <Form.Text className="text-danger">
                  {errors.productDescription.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label htmlFor="price" className="my-0">
                Price
              </Form.Label>
              <Form.Control
                type="number"
                id="price"
                min="0"
                placeholder="Enter product price"
                className="my-1"
                {...register("productPrice", {
                  required: {
                    value: true,
                    message: "Price is required.",
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Enter valid price.",
                  },
                })}
              />

              {errors && errors.productPrice && (
                <Form.Text className="text-danger">
                  {errors.productPrice.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="quantity" className="my-0">
                Quantity
              </Form.Label>
              <Form.Control
                type="number"
                id="quantity"
                min="0"
                placeholder="Enter product quantity"
                className="my-1"
                {...register("productQuantity", {
                  required: {
                    value: true,
                    message: "Quantity is required.",
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Enter valid quantity.",
                  },
                })}
              />

              {errors && errors.productQuantity && (
                <Form.Text className="text-danger">
                  {errors.productQuantity.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label htmlFor="minimumQuantity" className="my-0">
                Minimum Order Quantity
              </Form.Label>
              <Form.Control
                type="number"
                id="minimumQuantity"
                min="0"
                placeholder="Enter minimum order quantity"
                className="my-1"
                {...register("minimumQuantity", {
                  required: {
                    value: true,
                    message: "Minimum order quantity is required.",
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Enter valid minimum order quantity.",
                  },
                })}
              />

              {errors && errors.minimumQuantity && (
                <Form.Text className="text-danger">
                  {errors.minimumQuantity.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="measurement" className="my-0">
                Measurement
              </Form.Label>
              <Form.Select
                id="measurement"
                className="my-1"
                {...register("productMeasure", {
                  required: {
                    value: true,
                    message: "Measurement is required.",
                  },
                })}
              >
                <option value="">Select product measurement</option>
                <option value="kg">KG</option>
                <option value="dozen">DOZEN</option>
                <option value="piece">PIECE</option>
              </Form.Select>

              {errors && errors.productMeasure && (
                <Form.Text className="text-danger">
                  {errors.productMeasure.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label htmlFor="image" className="my-0">
                Image
              </Form.Label>
              <Form.Control
                type="file"
                id="image"
                min="0"
                className="my-1"
                {...register("productImage", {
                  required: {
                    value: true,
                    message: "Image is required.",
                  },
                })}
              />

              {errors && errors.productImage && (
                <Form.Text className="text-danger">
                  {errors.productImage.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="submit"
                value="Submit"
                className="btn bg-primary bg-gradient text-white border-0"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
