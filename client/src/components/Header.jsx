import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light" data-bs-theme="light" className="border-bottom border-success">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-success fs-4">Auth React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="my-auto">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="my-auto">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="#sign-up">
              <Button variant="outline-success" className="mx-1">
                <FaSignOutAlt />
                Inscription
              </Button>
            </Nav.Link>
            <Nav.Link href="#sign-in">
              <Button variant="outline-success" className="mx-1">
                <FaSignInAlt /> Connexion
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
