import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "/image.png";

const NavbarComponent = ({ page, setPage }) => {
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      className="bg-dark bg-gradient vh-5 position-fixed shadow-lg vw-100 z-1"
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
        <Nav className="gap-2">
          <Nav.Link href="#home" onClick={() => setPage("product")}>
            Home
          </Nav.Link>
          <Nav.Link href="#cart" onClick={() => setPage("cart")}>
            Cart
          </Nav.Link>
          <Nav.Link href="#checkout" onClick={() => setPage("checkout")}>
            Checkout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
