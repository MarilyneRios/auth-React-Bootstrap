import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light" data-bs-theme="light" className="border-bottom border-success">
      <Container fluid>
      {/** Titre */}
        <Navbar.Brand as={Link} to="/" className="text-success fs-4">Auth React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/** Liens */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link}  to="/" className="my-auto">
              Home
            </Nav.Link>
            <Nav.Link as={Link}  to="/about" className="my-auto">
              A propos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
        {/** Btns */}
          <Nav className="ms-auto mb-2 mb-lg-0">
          <Nav.Link as={Link}  to="/sign-in">
              <Button variant="outline-success" className="mx-1">
                <FaSignInAlt /> Connexion
              </Button>
            </Nav.Link>

            <Nav.Link as={Link}  to="/sign-up">
              <Button variant="outline-success" className="mx-1">
                <FaSignOutAlt />
                Inscription
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// Pour afficher le nom du user qaund connecté
/**
 <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
 </Navbar.Collapse>
 */
