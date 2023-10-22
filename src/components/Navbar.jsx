import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "/blob.svg"; // Correct the path to your logo file

const NavbarComponent = ({ setPage }) => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      sticky="top"
      className="shadow-lg"
    >
      <Container>
        <Navbar.Brand href="#" onClick={() => setPage("product")}>
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
            <Nav.Link href="#" onClick={() => setPage("product")}>
              Home
            </Nav.Link>
            <Nav.Link href="#" onClick={() => setPage("cart")}>
              Cart
            </Nav.Link>
            <Nav.Link href="#" onClick={() => setPage("checkout")}>
              Checkout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container className="d-flex justify-content-between">
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavbarComponent;
