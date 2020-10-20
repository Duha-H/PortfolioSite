import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="home connect confined">
        <h3 className="section-title">Reach out!</h3>
        <p>I'm currently <b>in the market for employment</b>, so I'd love to hear from you if you're looking for a developer, or would just like to collaborate or chat about cool stuff!</p>
        <form className="contact-form">
          <div className="contact-component">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="contact-component">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>
          </div>
          <div className="contact-component">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject"/>
          </div>
          <div className="contact-component">
            <label htmlFor="content">Say Hi!</label>
            <textarea name="content" id="content" cols={30} rows={10}></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;