import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PopupContext } from "./popupcontext";

const Footer = () => {
  const [{ popup, setPopup }, { popupContent, setPopupContent }] = useContext(PopupContext);

  const openPopup = () => {
    setPopup(true);
    setPopupContent(true);
  }

  return (
    <div className="footer container">
      <div className="footer__main">
        <div className="footer__main-name">RetroShark</div>
        <div className="footer__main-rights">All Rights Saved 2020</div>
      </div>
      <div className="footer__info">
        <div className="footer__info-links">
          <Link to="./home">
            <div className="footer-link">Home</div>
          </Link>
          <Link to="./about">
            <div className="footer-link">About</div>
          </Link>
          <Link to="./contact">
            <div className="footer-link">Contact</div>
          </Link>
        </div>
        <div className="footer__info-news">
          <div className="footer__info-news-title">
            Interested in our newsletter?
          </div>
          <button onClick={openPopup}>Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
