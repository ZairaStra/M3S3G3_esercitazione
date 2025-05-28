import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

const NavSearch = () => (
  <Navbar expand="lg" className="mb-5 py-4 bars-style" bg="light" data-bs-theme="light" sticky="top">
    <Container fluid>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img alt="brand-icon" src={logo} width="40" height="50" className="d-inline-block align-middle" />
        <span className="ms-3 d-none d-md-block">RemoteJobs</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/favourites">
            Favourite Companies
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavSearch;
