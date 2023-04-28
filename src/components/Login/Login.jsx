import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { SignInWithEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    SignInWithEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const managePassword = (e) => {
    if (e.target.checked) {
      setShow(!show);
    } else {
      setShow(!show);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="box-shadow p-3 mb-5 bg-white rounded border w-25">
        <Form onSubmit={handleLogin}>
          <h4 className="mb-4 text-center">Login</h4>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>

          <Form.Group className="my-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type={show ? "text" : "password"} name="password" required />
          </Form.Group>
          <Form.Check onChange={managePassword} label="Show Password" />

          <button className="w-100 mt-3 text-dark primary-background" type="submit">
            Login
          </button>
          <p className="text-center">
            <small>
              New to Ema-John?{" "}
              <Link className="primary-color" to="/signup">
                Create new Account
              </Link>
            </small>
          </p>
          <small className="text-danger">{error}</small>
        </Form>
      </div>
    </div>
  );
};

export default Login;
