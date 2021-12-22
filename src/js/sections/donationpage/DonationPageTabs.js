import React, { useState } from "react";

const DonationPageTabs = () => {
  const [toggleActive, setToggleActive] = useState(1);

  const toggleTab = (index) => {
    setToggleActive(index);
  };

  return (
    <>
      <section className="donationpage-tabs container">
        <div className="donationpage-tabs-description">
          <h2>How you can contribute to protect the Earth</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="donationpage-tabs-tabs">
          <div className="tabs-container">
            <div className="tab-blocks">
              <div
                className={toggleActive === 1 ? "tab active-tab" : "tab"}
                onClick={() => toggleTab(1)}
              >
                Overview
              </div>
              <div
                className={toggleActive === 2 ? "tab active-tab" : "tab"}
                onClick={() => toggleTab(2)}
              >
                Impact
              </div>
              <div
                className={toggleActive === 3 ? "tab active-tab" : "tab"}
                onClick={() => toggleTab(3)}
              >
                What You Get
              </div>
            </div>
            <div className="tab-content">
              <div
                className={
                  toggleActive === 1 ? "content active-content" : "content"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                  <br />
                  <br />
                  Aenean faucibus nibh et justo cursus id rutrum lorem
                  imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </div>
              <div
                className={
                  toggleActive === 2 ? "content active-content" : "content"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                  <br />
                  Aenean faucibus nibh et justo cursus id rutrum lorem
                  imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </div>
              <div
                className={
                  toggleActive === 3 ? "content active-content" : "content"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dontationpage-donation-usage container">
        <h2>How we use your donation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Nunc ut sem vitae risus tristique posuere.
        </p>
        <p>
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
          cursus id rutrum lorem imperdiet.
        </p>
      </section>
    </>
  );
};

export default DonationPageTabs;
