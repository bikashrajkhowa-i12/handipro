import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <Navbar expand="lg" className="navbar py-2">
      <Container>
        <Navbar.Brand className="nav-brand text-white fs-1">
          💡Handipro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
          <Nav className="mx-auto mt-1 gap-3">
            <Nav.Link as={Link} to="/home" className="nav-link fs-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/markets" className="nav-link fs-5">
              Markets
            </Nav.Link>
            <Nav.Link as={Link} to="/features" className="nav-link fs-5">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="/learn" className="nav-link fs-5">
              Learn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComp;
