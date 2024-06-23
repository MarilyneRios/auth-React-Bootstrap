import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

//import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1 className="d-flex justify-content-center text-success">Connexion</h1>

      <Form onSubmit={handleSubmit}>
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

        <Button type="submit" variant="outline-success" className="my-3 w-100">
          Se connecter
        </Button>

        <Button
          variant="outline-dark"
          className="w-100 d-flex align-items-center justify-content-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google"
            height="25"
            width="25"
          />
          Continue avec Google
        </Button>
      </Form>

      <Row className="py-3 ">
        <Col>
          Avez-vous un compte ?{" "}
          <Link to="/sign-up" className="text-success">
            Inscription
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
