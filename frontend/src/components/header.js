import React, { useEffect, useState } from "react";
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
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setLoginStatus(true);
    }
  }, []);
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/assets/logo.jpeg" alt="" />
        </div>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
        {loginStatus ? (
          <NavLink
            to={`/profile/${JSON.parse(localStorage.getItem("user"))._id}`}
          >
            <div className="navProfile">
              <img
                src={`${
                  JSON.parse(localStorage.getItem("user")).profilePicture
                    ? JSON.parse(localStorage.getItem("user")).profilePicture
                    : "/assets/defaultProfile.png"
                }`}
                alt=""
              />
            </div>
          </NavLink>
        ) : (
          <div>
            <span>
              <NavLink to="/login">Login</NavLink>
            </span>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
