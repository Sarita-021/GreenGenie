import React from "react";
import "../css/footer.css";
import { Outlet } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="p">
          {" "}
          <span>
            Donate, recycle, wear good. GreenGenie connects your closet to the
            community.
          </span>
        </p>
        <div className="container">
          {/* <div className="row"> */}
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li>
                <a to="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a to="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a to="/blog" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a to="/login" className="footer-link">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact us</h4>

            <p>Hisar, Haryana, INDIA</p>
            <p>+91 8560XXXXXX</p>
            <p>support@GreenGenie.com</p>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="icons">
              <ul className="socials">
                <li>
                  <FaFacebookF size={20} aria-label="Facebook" />
                </li>
                <li>
                  <FaTwitter size={20} aria-label="Twitter" />
                </li>
                <li>
                  <FaGoogle size={20} aria-label="Google" />
                </li>
                <li>
                  <FaYoutube size={20} aria-label="YouTube" />
                </li>
                <li>
                  <FaLinkedinIn size={20} aria-label="LinkedIn" />
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* </div> */}
        <p className="copy-right">
          {" "}
          <span className="footer-copyright">
            Copyright © {new Date().getFullYear()} GreenGenie. All rights
            reserved.
          </span>
        </p>
      </footer>

      <Outlet />
    </>
  );
};

export default Footer;
