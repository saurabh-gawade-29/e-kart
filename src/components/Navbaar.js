import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbaar() {
  const cartProducts = useSelector((state) => {
    return state.cart;
  });
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary shadow my-navbar"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand className="fw-bold text-white">🛒 E-Kart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 mx-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
            text-white
          >
            <Nav.Link to="/" as={Link} className="navLink">
              PRODUCTS
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="/cart" as={Link} className="navLink">
              MY BAG {cartProducts.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
