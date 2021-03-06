import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PopupContext } from './popupcontext';

const Popup = () => {
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 2500);
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    setSignUp(true);
    setTimeout(() => {
      setPopup(false);
    }, 2500);
  };

  const [{ popup, setPopup }, { popupContent, setPopupContent }] = useContext(
    PopupContext
  );

  const closePopup = () => {
    setPopup(false);
    setPopupContent(false);
  };

  return (
    <div className={'popup ' + (popup ? 'visible' : 'hide')}>
      <div className='popup__title'>Interested in our newsletter?</div>
      <div className={'popup__form ' + (popupContent ? 'visible' : 'hide')}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name='email'
            placeholder='Your email'
            ref={register({
              required: 'We kind of need your email for this',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'This seems like an invalid email',
              },
            })}
          />
          {errors.email && errors.email.message}
          {signUp && (
            <div>Sit back, relax and look forward to amazing newsletters!</div>
          )}

          <button type='submit'>Sign me up</button>
        </form>
      </div>
      <div className='popup__actions'>
        <button onClick={() => setPopupContent(true)}>Yes please!</button>
        <button className='no' onClick={closePopup}>No thanks!</button>
      </div>
    </div>
  );
};

export default Popup;
