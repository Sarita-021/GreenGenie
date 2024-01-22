import React from "react";
import "../css/header.css";
import { Outlet, NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Education",
    path: "/education",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/assets/logo.jpeg" alt="" />
        </div>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} activeClassName="active">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <span><NavLink to="/login">Login</NavLink></span>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
