import React, { Component } from 'react'
import CartWidget from './CartWidget';
import {Navbar,Nav,NavDropdown,Form} from 'react-bootstrap'

class NavBar extends Component {
	render() {
		return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">ParrandApp</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Quienes Somos</Nav.Link>
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Boliches</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Bares</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Confiterías</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">¿Cómo Reservar?</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <CartWidget />
    </Form>
  </Navbar.Collapse>
</Navbar>
        )
 }
}


export default NavBar;