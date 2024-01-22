import React from "react";
import "../css/header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="/assets/logo.jpeg" alt="" />
                </div>
                <ul>
                    <li>Dashboard</li>
                    <li>Education</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <div>
                    <span>Login</span>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;