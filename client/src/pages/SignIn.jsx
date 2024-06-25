import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn() {
  const [formData, setFormData] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("Sending request to /api/auth/signin with data:", formData);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", res.status);

      const data = await res.json();
      setLoading(false);

      console.log("Response data:", data);

      if (data.success === false) {
        setError("Le pseudo ou l'email est incorrect !");
        return;
      }

      navigate("/");
    } catch (error) {
      console.error("Error during fetch:", error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <FormContainer>
      <h1 className="d-flex justify-content-center text-success">Connexion</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
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
              value={formData.password}
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

        <Button
          type="submit"
          variant="outline-success"
          className="my-3 w-100"
          disabled={loading}
        >
          {loading ? "Chargement..." : "Se connecter"}
        </Button>

        <Button
          variant="outline-dark"
          className="w-100 d-flex align-items-center justify-content-center gap-2"
          disabled={loading}
          onClick={() => {
            // Gérez la connexion avec Google ici si OAuth est configuré
          }}
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

      <Row className="py-3">
        <Col>
          Avez-vous un compte ?{" "}
          <Link to="/sign-up" className="text-success">
            Inscription
          </Link>
          {error && (
            <p className="text-danger mt-5">
              {error}
            </p>
          )}
        </Col>
      </Row>
    </FormContainer>
  );
}
