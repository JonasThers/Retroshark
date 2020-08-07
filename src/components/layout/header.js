import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1230) {
      setIsMobile(true);
    }
  }, []);

  const openLinkOnMobile = () => {
    if (expanded && isMobile) {
      setExpanded(false);
    }
  };

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
            <Nav.Link onClick={openLinkOnMobile}>
              <Link to='./home'>Home</Link>
            </Nav.Link>
            <Nav.Link onClick={openLinkOnMobile}>
              <Link to='./about'>About</Link>
            </Nav.Link>
            <Nav.Link onClick={openLinkOnMobile}>
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
