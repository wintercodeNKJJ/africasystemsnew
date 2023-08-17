import React from "react";

const Contactform = () => {
  return (
    <section id="contact">
      <div className="contact-form">
        <form action="#">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="xyz@example.com" />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project realization..."
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              placeholder="Tell us more about your project..."
            ></textarea>
          </div>
          <div className="input-bottons">
            <button type="submit">Send</button>
            <button type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactform;
