import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Container,  } from 'react-bootstrap';

const Nav = () => {
  return (
    <>
      <div className='bg-dark mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='d-flex p-2 flex-row justify-content-around p-4'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/services'>Services</Link>
              <Link to='/blog'>Blog</Link>
            </div>
          </div>
        </div>
      </div>

{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to='/'>React Routing</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
        <Nav.Link as={Link} to='/about'>About</Nav.Link>
        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}

    </>
  )
};

export default Nav;