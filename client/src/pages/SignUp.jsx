import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  //eyes icon
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  // gestion erreurs et chargement
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <FormContainer>
      <h1 className="d-flex justify-content-center text-success">
        Inscription
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2">
          <Form.Control
            type="text"
            id="username"
            placeholder="Pseudo"
            onChange={handleChange}
            autoComplete="username"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            autoComplete="email"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2">
          <div className="d-flex">
            <Form.Control
              type={visiblePassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              onChange={handleChange}
              autoComplete="current-password"
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

        <Form.Group className="my-2">
          <div className="d-flex">
            <Form.Control
              type={visibleConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirmation du mot de passe"
              onChange={handleChange}
              autoComplete="new-password"
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

        <Button type="submit" variant="outline-success" className="my-3 w-100"  disabled={loading}>
          S&rsquo;inscrire
          {loading ? "Loading..." : " S'enregistrer"}
        </Button>
      </Form>

      <Row className="py-3">
        <Col className="text-center">
          Avez-vous déjà un compte ?{" "}
          <Link to="/sign-in" className="text-success">
            Se connecter
          </Link>
          <p className="text-danger mt-5">
            {error &&
              (typeof error === "string"
                ? error
                : "Le Pseudo ou l'email est déjà utilisé!")}
          </p>
        </Col>
      </Row>
    </FormContainer>
  );
}
