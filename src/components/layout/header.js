import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar collapseOnSelect expand='lg' expanded={expanded}>
        <Navbar.Brand>
          <Link to='./home'>RetroShark</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <Nav.Link
              onClick={() => setExpanded(expanded ? false : 'expanded')}
            >
              <Link to='./home'>Home</Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(expanded ? false : 'expanded')}
            >
              <Link to='./about'>About</Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(expanded ? false : 'expanded')}
            >
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
