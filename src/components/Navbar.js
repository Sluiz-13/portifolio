
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Luiz Felippe Da Silva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="home" smooth={true} duration={500} className="nav-link">Início</Link>
            <Link to="projects" smooth={true} duration={500} className="nav-link">Projetos</Link>
            <Link to="about" smooth={true} duration={500} className="nav-link">Sobre</Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link">Contato</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
