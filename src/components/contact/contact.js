import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'RetroShark | Contact';
  }, []);

  const onSubmit = () => {
    setSent(true);
  };

  return (
    <div className='container page-content'>
      <div className='page-title'>Contact me</div>
      <div className='box-container'>
        <p>
          In need of my help? Or would you just like a discussion with a
          like-minded geek?
        </p>
        <p>Then let's get in touch!</p>

        <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='inputs'>
            <div className='field'>
              <input
                name='name'
                placeholder='Your name'
                ref={register({
                  required: true,
                })}
              />
              {errors.name && <span>I would like to know your name</span>}
            </div>
            <div className='field'>
              <input
                name='email'
                placeholder='Your mail'
                ref={register({
                  required: 'We kind of need your email for this',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'This seems like an invalid email',
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
          <textarea
            name='message'
            placeholder='Your message'
            ref={register({
              required: true,
            })}
            rows='7'
          />
          {errors.message && <span>Don't you have anything to say?</span>}

          <button type='submit'>Send!</button>
        </form>
        {sent && (
          <div>
            Your message has hereby been sent! We'll get back to you as soon as
            possible!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
