import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextBlock from './textblock';
import dreamcast from '../../imgs/dreamcast.jpg';
import snes from '../../imgs/snes.jpg';
import turbografx from '../../imgs/turbografx.jpg';

const Home = () => {
  useEffect(() => {
    document.title = 'RetroShark | Home';
  }, []);

  return (
    <div className='container'>
      <div className='intro'>
        <div className='intro__text'>
          Get the help you need when it comes to good old gaming
        </div>
        <div class='intro__buttons'>
          <Link to='./about'>
            <button>Cases</button>
          </Link>
          <Link to='./contact'>
            <button>Contact me!</button>
          </Link>
        </div>
      </div>
      <div className='text-blocks'>
        <TextBlock
          imgUrl={dreamcast}
          content='Just bought a new Dreamcast, but you dont know what great games to get for it?'
        />
        <TextBlock
          imgUrl={turbografx}
          content='Want to buy a Turbografx-16, but afraid to get ripped off by people selling it for overprice?'
        />
        <TextBlock
          imgUrl={snes}
          content='Want to sell your old Super Nintendo, but dont know how much you can allow to charge for it?'
        />
      </div>
      <p>I'll make sure that you're all good to go to enjoy all the great classics out there!</p>
      <p>So in case you're tired of Bowser ruining your retro gaming experience...</p>
      <Link to='./contact'>
        <button>Lets get in touch!</button>
      </Link>
    </div>
  );
};

export default Home;
