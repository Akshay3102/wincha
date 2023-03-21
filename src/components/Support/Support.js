import React from "react";
import "./Support.css";
import Contact_Logo from "../../assets/Images/Support/Support_Icon.png";
import Footer from "../Footer/Footer";

function Support() {
  return (
    <div>
      <div className="container">
        <div className="support_bg">
          <div className="right_content">
            <div className="contact">
              <div className="support_head">
                <h1>SUPPORT</h1>
              </div>
              <div className="message">
                <h1>WE'RE HERE TO HELP</h1>
              </div>
            </div>
            <div className="contact_box">
              <div className="contact_logo">
                <img src={Contact_Logo} alt="" />
              </div>
              <div className="contact_head">
                <p>We'll get back to you within 24 hours.</p>
              </div>
              <div className="contact_button">
                <button>CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Support;
