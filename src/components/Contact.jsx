import React from 'react';


const Contact = () => {
  return (
    <form id="contact" className="contact section">
      <h2 className="section-header">Contact Me</h2>
      <div className="contact-info flex">
      <input type="text" name="name" placeholder="Name" className="input contact-input" />
      <input type="email" name="email" placeholder="Email" className="input contact-input" />
      </div>
      
      <textarea name="message" rows="10" placeholder="Message" className="input contact-input"></textarea>
      <button type="submit" className="submit-contact">Submit</button>
    </form>
  );
};

export default Contact;
