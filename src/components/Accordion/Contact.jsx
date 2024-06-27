import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="content-box">
      <div className="emails">
        <div>Adrese e-mail: </div>

        <div className="emaildiv">
          <i>arpiaro@yahoo.com</i>
          <i>secretariatarpia@gmail.com</i>
        </div>
      </div>

      <br />
      <svg width="32" height="32">
        <use href="./icons.svg#icon-instagram"></use>
      </svg>
      <svg width="32" height="32">
        <use href="./icons.svg#icon-twitter"></use>
      </svg>
    </div>
  );
}
export default Contact;
