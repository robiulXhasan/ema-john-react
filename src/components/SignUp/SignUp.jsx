import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUserWithEmailPassword } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(email, password, confirmPassword);
    setError("");
    if (password != confirmPassword) {
      setError("Password did not matched!");
      return;
    }
    createUserWithEmailPassword(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="box-shadow p-3 mb-5 bg-white rounded border w-25">
        <Form onSubmit={handleSignUp}>
          <h4 className="mb-4 text-center">Sign Up</h4>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>

          <Form.Group className="mt-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" required />
          </Form.Group>
          <Form.Group className="mt-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm" required />
          </Form.Group>

          <button className="w-100 mt-3 text-dark primary-background" type="submit">
            Sign Up
          </button>
          <p className="text-center">
            <small>
              Already have an account?{" "}
              <Link className="primary-color" to="/Login">
                Login
              </Link>
            </small>
          </p>
          <small className="text-danger">{error}</small>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
