import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const VolunteerSignUp = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalForm = () => {
    setOpenModal(true);
  };

  const closeModalForm = () => {
    setOpenModal(false);
  };

  return (
    <div className="container">
      <div className="volunteer-signup">
        <h2>
          You can contribute to make
          <br />
          the environment greener!
        </h2>
        <div className="volunteer-signup-btns">
          <button className="primary-btn" onClick={openModalForm}>
            Join as a volunteer
          </button>
          <button className="secondary-btn">Donate</button>
        </div>
      </div>
      {openModal && <Modal onCancel={closeModalForm} />}
      {openModal && <Backdrop />}
    </div>
  );
};

export default VolunteerSignUp;
