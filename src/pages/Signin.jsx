import { useEffect } from "react";
import { Container, Alert, Row, Col, Image, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { signin } from "../apis/user";
import img from "../assets/signin.svg";

export default function Signin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { isPending, data, mutate, error } = useMutation({
    mutationFn: signin,
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const from = (state && state.from.pathname) || "/";

  const onSubmit = async (data) => {
    mutate(data);
    reset();
  };

  useEffect(() => {
    if (data) {
      setAuth(data);
      localStorage.setItem("auth", JSON.stringify(data));
    }

    if (auth) {
      navigate(from, { replace: true });
    }
  }, [data, auth, setAuth, from, navigate]);

  return (
    <Container className="h-screen d-flex flex-column justify-content-center py-5">
      <Row className="d-flex align-items-center g-4">
        <Col lg={6} className="d-none d-md-block">
          <Image
            src={img}
            alt="Signin image"
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
