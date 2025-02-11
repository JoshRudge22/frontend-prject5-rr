import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import signInStyles from "../../styles/SignInForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import loginImage from "../../media/login.jpg";  // Image for sign-in
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";  // Custom hook for setting user
import axios from "axios";

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={signInStyles.pageWrapper}>
      <Row className={signInStyles.Row}>
        <Col className="my-auto p-0 p-md-2" md={6}>
          <Container className={signInStyles.formContainer}>
            <h1 className={signInStyles.header}>Sign In</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  className={signInStyles.Input}
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={signInStyles.Input}
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Button
                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                type="submit"
              >
                Sign In
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container>
            <Link className={signInStyles.Link} to="/signup">
              Don't have an account? <span>Sign up now!</span>
            </Link>
          </Container>
        </Col>
        <Col md={6} className={`my-auto d-none d-md-block p-2 ${signInStyles.SignInCol}`}>
          <img
            src={loginImage}
            alt="Sign Up Illustration"
            className={signInStyles.fillerImage}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SignInForm;
