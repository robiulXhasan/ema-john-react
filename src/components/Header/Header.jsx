import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-dark py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <img src={logo} alt="" />
        <ul className="text-white d-flex gap-4 list-inline align-items-center">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/inventory">Manage Inventory</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    // <Navbar bg="dark" expand="lg">
    //   <Container>
    //     <Navbar.Brand>
    //       <img src={logo} alt="" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse
    //       className="justify-content-sm-end justify-content-lg-end"
    //       id="navbarScroll"
    //     >
    //       <Nav className="">
    //         <NavItem href="/">
    //           <Nav.Link as={Link} to="/" className="text-white ms-4">
    //             Shop
    //           </Nav.Link>
    //         </NavItem>

    //         {/* <Nav.Link as={Link} to="/" className="text-white ms-4">
    //           Shop
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/" className="text-white ms-4">
    //           Shop
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/" className="text-white ms-4">
    //           Shop
    //         </Nav.Link> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
