import React, { useEffect } from "react";
import Case from "./case";
import caseData from "../../json/cases";

const About = () => {
  useEffect(() => {
    document.title = "RetroShark | About";
  }, []);

  return (
    <div className="container">
      <h2>Who am I?</h2>
      <div>
        I'm pretty much just a guy, who is passionate about video games,
        especially those from older generations.
      </div>
      <div>
        Since my early childhood, I have acquired a decent collection of games
        spanning across different generations of consoles and therefor a great
        knowledge within the field.
      </div>
      <div>
        Therefore I aim to guide others with the same interest to make sure that
        they get the best out of it. Meaning that they don't miss out on any
        overlooked great games and consoles, that they get their money's worth
        when buying, and all in all just have fun with their great passion
      </div>
      <div>Here are some of my cases:</div>
      {caseData.map((caseData, index) => {
        return (
          <Case
            key={index}
            contentReversed={caseData.contentReversed}
            title={caseData.title}
            description={caseData.description}
            imgUrl={caseData.img}
          />
        );
      })}
    </div>
  );
};

export default About;
