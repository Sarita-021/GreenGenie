import React, { useEffect } from "react";
import "../css/header.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const navigation = [
    {
        name: "Home",
        path: "/",
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
    }
];


const Header = () => {
    const navigate = useNavigate();

    let isLogin = localStorage.getItem('islogin');
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    useEffect(() => {
        const data = localStorage.getItem("user");
    }, []);
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="/assets/logo.jpeg" alt="" />
                </div>
                {isLogin ? (
                    <>
                        <ul>
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.path}>{item.name}</NavLink>
                                </li>
                            ))}
                            <li>
                                <NavLink to="/item" >Item </NavLink>
                                <NavLink to="/displayitem">Item Display</NavLink>
                            </li>
                        </ul>
                        <NavLink>
                            <button className="btn-warning" onClick={logout}>Logout</button>
                        </NavLink>

                        <NavLink to={`/profile/${JSON.parse(localStorage.getItem("user"))?.firebaseUserId}`} >
                            <div className="navProfile">
                                <img
                                    src={`${JSON.parse(localStorage.getItem("user"))?.profilePicture
                                        ? JSON.parse(localStorage.getItem("user"))?.profilePicture
                                        : "/assets/defaultProfile.png"
                                        }`}
                                    alt=""
                                />
                            </div>
                        </NavLink>
                    </>
                ) : (
                    <>
                        <ul>
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.path}>{item.name}</NavLink>
                                </li>
                            ))}
                            {/* <NavLink to="/displayitem">Item Display</NavLink> */}
                        </ul>
                        <div>
                            <span>
                                <NavLink to="/login">Login</NavLink>
                            </span>
                        </div>

                    </>
                )}
            </nav>
            <Outlet />
        </>
    );
};

export default Header;
