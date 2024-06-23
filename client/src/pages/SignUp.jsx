import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    switch (id) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1 className="d-flex justify-content-center text-success">Inscription</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2" controlId="username">
          <Form.Control
            type="text"
            id="username"
            placeholder="Pseudo"
            value={username}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <div className="d-flex">
            <Form.Control
              type={visiblePassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handleChange}
              autoComplete="password"
              className="me-2"
            ></Form.Control>
            {visiblePassword ? (
              <FaEyeSlash
                onClick={() => setVisiblePassword(false)}
                className="m-3"
                size={20}
              />
            ) : (
              <FaEye
                onClick={() => setVisiblePassword(true)}
                size={20}
                className="m-3"
              />
            )}
          </div>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <div className="d-flex">
            <Form.Control
              type={visibleConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirmation du mot de passe"
              value={confirmPassword}
              onChange={handleChange}
              autoComplete="confirmPassword"
              className="me-2"
            ></Form.Control>
            {visibleConfirmPassword ? (
              <FaEyeSlash
                onClick={() => setVisibleConfirmPassword(false)}
                className="m-3"
                size={20}
              />
            ) : (
              <FaEye
                onClick={() => setVisibleConfirmPassword(true)}
                size={20}
                className="m-3"
              />
            )}
          </div>
        </Form.Group>

        <Button type="submit" variant="outline-success" className="my-3 w-100">
          S&rsquo;inscrire
        </Button>
      </Form>

      <Row className="py-3">
        <Col className="text-center">
          Avez-vous déjà un compte ?{" "}
          <Link to="/sign-in" className="text-success">
            Se connecter
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
