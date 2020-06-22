import React, { useState, useEffect } from 'react';

const Popup = () => {

    const [ popup, setPopup ] = useState(false);
    const [ popupContent, setPopupContent ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPopup(true);
        }, 2500);
    }, []);

    const checkForm = () => {
        console.log('Lol');
    }

  return (
    <div className={"popup " + (popup ? 'visible' : 'hide')}>
      <div>Interested in our newsletter?</div>
      <div className={"popup__form " + (popupContent ? 'visible' : 'hide')}>
          <form>
              <input placeholder="Your name"/>
              <input placeholder="Your mail"/>
              <button onClick={checkForm}>Sign me up!</button>
          </form>
      </div>
      <div className="popup__actions">
          <button onClick={() => setPopupContent(true)}>Yes please!</button>
          <button onClick={() => setPopup(false)}>No thanks!</button>
      </div>
    </div>
  );
}

export default Popup;
