import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#" className="mr-auto header__title">IndigoLearn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="mr-3 nav-items">Choose</Nav.Link>
            <Nav.Link href="#" className="mr-3 nav-items">Learn</Nav.Link>
            <Nav.Link href="#" className="mr-3 nav-items">Accept</Nav.Link>
          </Nav>
          <Nav>
            <Button className="login-button">Login/Signup</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
