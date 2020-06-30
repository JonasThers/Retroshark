import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>Retroshark</div>
      <div>Retro Gaming Consultancy</div>
      <Link to="./home">Home</Link>
      <Link to="./contact">Contact</Link>
    </div>
  );
}

export default Header;