import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import signup from "../assets/signup.svg";

export default function ResetPassword() {
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
            src={signup}
            alt="Reset password image"
            className="w-100 h-100 object-fit-contain rounded-4"
          />
        </Col>

        <Col lg={6}>
          <Form
            className="form bg-light bg-gradient border rounded p-4 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="my-0">Enter new password</h3>

            <Form.Group className="my-3">
              <Form.Label htmlFor="password" className="my-0">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter your password"
                className="my-1"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required.",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "Minimum 8 characters needed (at least one letter, one digit and one special character).",
                  },
                })}
              />

              {errors && errors.password && (
                <Form.Text className="text-danger">
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>

            <Link to="/signin" className="text-xs text-primary">
              Back to the sign-in page
            </Link>

            <Form.Group className="my-3">
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
