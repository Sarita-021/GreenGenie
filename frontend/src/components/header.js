import React from "react";
import "../css/header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;