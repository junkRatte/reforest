import React from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <i class="fas fa-window-close" onClick={props.onCancel}></i>
      <h2>Join as a volunteer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius
        enim in eros elementum tristique.
      </p>
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
        <label>
          Email
          <input type="text" name="email" />
        </label>
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

export default Modal;
