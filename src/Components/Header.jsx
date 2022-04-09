import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
let Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to={"/products"}>
              Products
            </NavLink>
            <NavLink className="nav-link" to={"/categories"}>
              Categories
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
