import React, { Component } from 'react'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown,Form} from 'react-bootstrap'

class NavBar extends Component {
	render() {
		return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">ParrandApp</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item href="/category/boliches">Boliches</NavDropdown.Item>
        <NavDropdown.Item href="/category/bares">Bares</NavDropdown.Item>
        <NavDropdown.Item href="/category/confiterias">Confiterías</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">¿Cómo Reservar?</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Quienes Somos</Nav.Link>
    </Nav>
    <Form inline>
      <Link to="/cart">
      <CartWidget />
      </Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
        )
 }
}


export default NavBar;