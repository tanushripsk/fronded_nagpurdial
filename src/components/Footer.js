import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-section">
            <h4>Our Links:</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/advertisemodel">Advertise</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/model">Free Listing</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us:</h4>
            <p>Phone: +919975288300</p>
            <p>E-mail: help@nagpurdial.com</p>
          </div>
          <div className="footer-section">
            <h4>Follow us on:</h4>
            <div className="social-media">
              <a
                href="https://www.facebook.com/pskitservices/"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/nagpurdial2023/?hl=en"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nagpur-dial-7b2aa8193/"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCtvy5OqTnh5I8kiOkgoAb9Q?view_as=subscriber"
                className="social-icon youtube"
                aria-label="YouTube"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                href="https://x.com/Nagpur_Dial"
                className="social-icon twitter"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://in.pinterest.com/nagpurdial/"
                className="social-icon pinterest"
                aria-label="Pinterest"
              >
                <i className="fa fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </footer>
        <hr />
        <div className="footer-bottom">
          <p className="copyright">
            <strong>Copyright © 2024</strong>{" "}
            <i className="fa fa-heart" style={{ color: "red" }}></i>{" "}
            <a href="https://pskitservices.com/">
              Design By Psk Technologies Pvt. Ltd
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
