import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
const Navigation = () => {
  let location = useLocation();
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              TODOLIST
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                as={Link}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                as={Link}
                to="/About"
              >
                About
              </Nav.Link>{" "}
              <div style={{ position: "absolute", right: "0" }}>
                <Nav.Link className="btn" as={Link} to="/login">
                  Login
                </Nav.Link>
              </div>
              <Nav.Link className="btn " as={Link} to="/SignUp">
                SignUp
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Navigation;
