import React from "react";

const ContactPageHeader = () => {
  return (
    <header className="contactpage-header">
      <div className="contactpage-header-wrapper container">
        <div className="contactpage-header-title">
          <span className="heading-line"></span>
          <div>
            <h5>Contact us</h5>
            <h1>
              We'd love to hear
              <br />
              from you
            </h1>
            <p>
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-info-links">
            <h4>Let's talk!</h4>
            <div>
              <a href="tel:1 23 456 789">+1 23 456 789</a>
              <a href="mailto:hello@finsweet.com">hello@finsweet.com</a>
            </div>
          </div>
          <div className="contact-info-address">
            <h4>Head Office</h4>
            <p>8 Brewery Drive, Hudson, NH 03051</p>
            <p>USA</p>
          </div>
          <div className="contact-info-address">
            <h4>Branch Office</h4>
            <p>178 Marconi St., Venice, 34293</p>
            <p>Italy</p>
          </div>
          <div className="contact-info-media">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactPageHeader;
