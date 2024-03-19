import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import LogoImg from "../../assets/logo.png"
import "./menu.css"

const Menu = () => {
  return (
    <Navbar expand="lg" className="">
    <Container>
      <Navbar.Brand href="#home">
        <img src={LogoImg} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">works</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
        </Nav>
        <div className="one">
            <a href="#">Contact</a>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu