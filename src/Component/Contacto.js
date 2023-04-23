import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('react_contact_detail', 'react_contact_form', form.current, 'E7KskCYBvT3gxK-x4')
        .then((result) => {
            alert('message sent successfully...');
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return  <form ref={form} onSubmit={sendEmail} class="form-container">
    <label class="form-label">Full Name</label>
    <input type="text" name="user_name" class="form-input" />
    <label class="form-label">Your Email</label>
    <input type="email" name="user_email" class="form-input" />
    <label class="form-label">Specify the budget you have and any other information you want us to know</label>
    <textarea name="message" class="form-textarea"></textarea>
    <input type="submit" value="Send" class="form-submit" />
  </form>
};

export default Contacto;