import React from "react";
import "./Styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <h3 className={"footer-text"}>Raising capital never been this easy!</h3>
      <address className={"contact-us"}>
        <a href="mailto:dijin28@outlook.com">Get in touch with us</a>
      </address>

      <p>
        {" "}
        Made with <span className={"heart-icon"}>&#10084;</span> in Bengaluru
      </p>
    </footer>
  );
};

export default Footer;
