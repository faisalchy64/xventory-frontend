import { Container, Alert, Row, Col, Image, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { signup } from "../apis/user";
import img from "../assets/signup.svg";
import { useEffect } from "react";

export default function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isPending, data, mutate, error } = useMutation({
    mutationFn: signup,
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const from = (state && state.from.pathname) || "/";

  const onSubmit = async (data) => {
    mutate(data);
    reset();
  };

  useEffect(() => {
    if (auth) {
      navigate(from, { replace: true });
    }
  }, [auth, from, navigate]);

  return (
    <Container className="h-screen d-flex flex-column justify-content-center py-5">
      <Row className="d-flex align-items-center g-4">
        <Col lg={6} className="d-none d-md-block">
          <Image
            src={img}
            alt="Signup image"
            className="w-100 h-100 object-fit-contain rounded-4"
          />
        </Col>

        <Col lg={6}>
          {error && (
            <Alert
              variant="danger"
              className="form text-danger py-2 mx-auto border-0"
            >
              {error.response ? error.response.data.message : error.message}
            </Alert>
          )}

          {data && (
            <Alert
              variant="success"
              className="form text-success py-2 mx-auto border-0"
            >
              {data.message} Please check your inbox or spam box.
            </Alert>
          )}

          <Form
            className="form bg-light bg-gradient border rounded p-4 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="my-0">Create an account</h3>

            <Form.Group className="my-3">
              <Form.Label htmlFor="name" className="my-0">
                Name
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                className="my-1"
                {...register("name", {
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

              {errors && errors.name && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
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

            <Form.Group className="my-3">
              <Form.Label htmlFor="role" className="my-0">
                Role
              </Form.Label>
              <Form.Select
                id="role"
                aria-label="Default select example"
                className="my-1"
                {...register("role", {
                  required: {
                    value: true,
                    message: "Role is required.",
                  },
                })}
              >
                <option value="">Select user role</option>
                <option value="user">USER</option>
                <option value="supplier">SUPPLIER</option>
              </Form.Select>

              {errors && errors.role && (
                <Form.Text className="text-danger">
                  {errors.role.message}
                </Form.Text>
              )}
            </Form.Group>

            <Link to="/signin" className="text-xs text-primary">
              Already have an account?
            </Link>

            <Form.Group className="my-3">
              <Form.Control
                type="submit"
                value={isPending ? "Loading..." : "Submit"}
                disabled={isPending}
                className="btn bg-primary bg-gradient text-white border-0"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
