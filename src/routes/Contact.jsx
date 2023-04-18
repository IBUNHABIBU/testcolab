import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_js8iquw', 'template_7dhiwmf', e.target, 'czVI_u4x7LdAvviyK')
      .then((result) => {
        setMessage(`Message sent ${result.text}, I will reply as soon as possible.`);
      }, (error) => {
        setError(error.text);
      });
  };
  return (
    <div className="contact" id="contacts">
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message" />
          <button type="submit" className="btn">Send</button>
          {error && <span className="error"> Oops! Something went wrong, please try again.</span> }
          {message && <span>{message}</span> }
        </form>
      </div>
    </div>
  );
};

export default Contacts;