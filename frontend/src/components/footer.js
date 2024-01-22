import React from "react";
import "../css/footer.css";
import { Outlet, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div>
                <h3>About us</h3>
                <p>Donate, recycle, wear good. GreenGenie connects your closet to the community.</p>
                <div className="icons">
                    <ul className="socials">
                        <li>
                            <FaFacebook size={24} aria-label="Facebook" />
                        </li>
                        <li>
                            <FaTwitter size={24} aria-label="Twitter" />
                        </li>
                        <li>
                            <FaGoogle size={24} aria-label="Google" />
                        </li>
                        <li>
                            <FaYoutube size={24} aria-label="YouTube" />
                        </li>
                        <li>
                            <FaLinkedin size={24} aria-label="LinkedIn" />
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Contact us</h3>
                <p>Hisar, Haryana, INDIA</p>
                <p>+91 8560XXXXXX</p>
                <p>support@GreenGenie.com</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <p>Copyright © {new Date().getFullYear()} GreenGenie. All rights reserved.</p>
            <Outlet />
        </>
    );
};

export default Footer;
