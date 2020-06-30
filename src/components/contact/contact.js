import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const [ sent, setSent ] = useState(false);

    const onSubmit = () => {
        setSent(true);
    };

    return (
        <div>
            <div>In need of my help? Or would you just like a discussion with a like-minded geek?</div>
            <div>Then let's get in touch!</div>

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

                <textarea
                    name="message"
                    ref={register({
                        required: true,
                    })}
                    rows='7'
                />
                {errors.message && <span>Don't you have anything to say?</span>}

                <button type="submit">Send!</button>
            </form>
            {sent && (
                <div>Your message has hereby been sent! We'll get back to you as soon as possible!</div>
            )}
        </div>
    );
};

export default Contact;
