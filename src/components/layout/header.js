import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg'>
        <Navbar.Brand>RetroShark</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <Nav.Link>
              <Link to='./home'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='./about'>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='./contact'>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='header-brand'>Retro Gaming Consulting</div>
    </div>
  );
};

export default Header;
