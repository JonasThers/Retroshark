import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TextBlock from "./textblock";
import dreamcast from "../../imgs/dreamcast.jpg";
import snes from "../../imgs/snes.jpg";
import turbografx from "../../imgs/turbografx.jpg"

const Home = () => {
  useEffect(() => {
    document.title = "RetroShark | Home";
  }, []);

  return (
    <div className="container">
      <h2>Home</h2>
      <div className="text-blocks">
        <TextBlock
          imgUrl={dreamcast}
          content="Just bought a new Dreamcast, but you dont know what great games to get for it?"
        />
        <TextBlock
          imgUrl={turbografx}
          content="Want to buy a Turbografx-16, but afraid to get ripped off by people selling it for overprice?"
        />
        <TextBlock
          imgUrl={snes}
          content="Want to sell your old Super Nintendo, but dont know how much you can allow to charge for it?"
        />
      </div>
      <Link to="./contact">
        <button>Let"s get in touch</button>
      </Link>
    </div>
  );
};

export default Home;
