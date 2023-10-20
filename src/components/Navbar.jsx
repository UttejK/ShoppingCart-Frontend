import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "/blob.svg"; // Correct the path to your logo file

const NavbarComponent = ({ setPage }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      style={{ height: "10vh", overflow: "hidden" }}
      className="shadow-lg"
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
        <Navbar.Collapse id="basic-navbar-nav">
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
