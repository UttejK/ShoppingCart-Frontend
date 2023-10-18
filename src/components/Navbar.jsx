import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "/image.png";

const NavbarComponent = ({ setPage }) => {
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      sticky="top"
      style={{ height: "10vh", overflow: "hidden" }}
      className="bg-dark bg-gradient shadow-lg vw-100"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Navbar Logo"
            style={{ width: "2rem", margin: "1rem" }}
          />
          ATLANTIS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => setPage("product")}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage("cart")}>Cart</Nav.Link>
            <Nav.Link onClick={() => setPage("checkout")}>Checkout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
