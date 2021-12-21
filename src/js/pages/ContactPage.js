import React from "react";
import ContactPageForm from "../sections/contactpage/ContactPageForm";
import ContactPageHeader from "../sections/contactpage/ContactPageHeader";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <ContactPageHeader />
      <ContactPageForm />
    </div>
  );
};

export default ContactPage;
