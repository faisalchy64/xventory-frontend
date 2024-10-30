import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import signin from "../assets/signin.svg";

export default function Signin() {
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
            src={signin}
            alt="Signup image"
            className="w-100 h-100 object-fit-contain rounded-4"
          />
        </Col>

        <Col lg={6}>
          <Form
            className="form bg-light bg-gradient border rounded p-4 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="my-0">Sign in to your account</h3>

            <Form.Group className="my-3">
              <Form.Label htmlFor="email" className="my-0">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="my-1"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required.",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter valid email.",
                  },
                })}
              />

              {errors && errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
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
                })}
              />

              {errors && errors.password && (
                <Form.Text className="text-danger">
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="d-flex justify-content-between my-3">
              <Link to="/signup" className="text-xs text-primary">
                Create new account
              </Link>

              <Link to="/forgot-password" className="text-xs text-primary">
                Forgot password
              </Link>
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
