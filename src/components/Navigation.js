import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar variant="light" className="navigation-bar border-bottom" sticky="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text">Resume Builder</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="text mx-2">Home</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
