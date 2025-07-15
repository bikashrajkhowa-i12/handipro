import { Navbar, Nav, Container } from "react-bootstrap";

const NavComp = () => {
  return (
    <Navbar expand="lg" className="py-2">
      <Container>
        <Navbar.Brand className="nav-brand text-white fs-1">
          ✨Handipro
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavComp;
