import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    console.log("lol");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          ref={register({
            required: true,
          })}
        />
        {errors.name && <span>I would like to know your name</span>}

        <input
          name="email"
          ref={register({
            required: "We kind of need your email for this",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "This seems like an invalid email",
            },
          })}
        />
        {errors.email && errors.email.message}

        <button type="submit">Sign me up</button>
      </form>
    </div>
  );
};

export default Contact;
