import React from "react";

const ContactPageForm = () => {
  return (
    <div className="contactpage-form container">
      <form>
        <div className="form-row">
          <label>
            First Name
            <input type="text" name="name" />
          </label>
          <label>
            Last Name
            <input type="text" name="name" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Email
            <input type="text" name="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" />
          </label>
        </div>
        <br />
        <label>
          Message
          <br />
          <textarea type="text" placeholder="Type your Message" />
        </label>
        <input
          type="submit"
          value="Send message"
          className="primary-btn submit"
        />
      </form>
    </div>
  );
};

export default ContactPageForm;
