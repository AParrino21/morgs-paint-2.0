import React from "react";
import "./Contact.css";
import { Divider } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";

const Contact = () => {
    const { contactPic } = React.useContext(AuthContext);
  return (
    <div className="contact">
      <header>
        <h1>Contact</h1>
      </header>
      <br />
      <Divider />
      <br />
      <div>
        <div>
          <img
            className="contact-img"
            src={contactPic}
            alt="artist"
          />
          <div>
            <strong>Need to get in touch?</strong>
            <br />
            <br />
            <p>
              I also do commission work! I have done wedding paintings based off
              photos, custom jeep tire covers, I work with resin and clay,
              tattoo designs and countless other specialties.
            </p>
            <br />
            <br />
            <p>
              If you are interest in any of these or just have questions about a
              painting/your order - feel free to reach out to me personally
              anytime and I will get back to you within 1-2 business days.
            </p>
            <br />
            <br />
            <h3>MORGANDANTONART@GMAIL.COM</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
