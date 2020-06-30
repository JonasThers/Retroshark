import React from 'react';
import { Link } from "react-router-dom";
import TextBlock from "./textblock";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
        <TextBlock
            content='Just bought a new Dreamcast, but you dont know what great games to get for it?'
        />
        <TextBlock
            content='Want to buy a Turbografx-16, but afraid to get ripped off by people selling it for overprice?'
        />
        <TextBlock
            content='Want to sell your old Super Nintendo, but dont know how much you can allow to charge for it?'
        />
      <Link to="./contact">
          <button>Let's get in touch</button>
      </Link>
    </div>
  );
}

export default Home;
