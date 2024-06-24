import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      data-bs-theme="light"
      className="border-bottom border-success"
    >
      <Container fluid>
        {/** Titre */}
        <Navbar.Brand as={Link} to="/" className="text-success fs-4">
          Auth React-Bootstrap
        </Navbar.Brand>

        {/** Btns on small screens */}
        <div className="d-lg-none d-flex align-items-center">
          <Nav.Link as={Link} to="/sign-in" className="p-0">
            <Button variant="success" className="mx-1">
              <FaSignInAlt /> Connexion
            </Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/sign-up" className="p-0">
            <Button variant="outline-success" className="mx-1">
              <FaSignOutAlt /> Inscription
            </Button>
          </Nav.Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/** Liens and buttons on large screens */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between w-100">
          <div className="d-flex justify-content-center flex-grow-1">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} to="/" className="my-auto">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="my-auto">
                A propos
              </Nav.Link>
            </Nav>
          </div>

          <div className="d-none d-lg-flex align-items-center">
            <Nav.Link as={Link} to="/sign-in" className="p-0">
              <Button variant="success" className="mx-1">
                <FaSignInAlt /> Connexion
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-up" className="p-0">
              <Button variant="outline-success" className="mx-1">
                <FaSignOutAlt /> Inscription
              </Button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
