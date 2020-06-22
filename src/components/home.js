import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="./contact"><button>Let's get in touch</button></Link>
    </div>
  );
}

export default Home;
