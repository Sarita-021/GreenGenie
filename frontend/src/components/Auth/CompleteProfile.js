import { useEffect, useRef, useState } from "react";
import "../../css/CompleteProfile.css";
import { createUser, setCookies } from "../../config/DB_API";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function CompleteProfile({ userData }) {
    const address = useRef({});
    const [userExists, setUserExists] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    console.log("second")
    const handleSubmit = async () => {
        console.log("fourth")
        const resp = await createUser(
            userData?.userId,
            userData?.fullname,
            userData?.email,
            userData?.photoURL,
            address.current
        );
        console.log(resp, " he");
        if (resp) {
            console.log("jkdfk")
            window.location.href = "/";
        }
    };

    const checkUserExists = async () => {
        const user = await axios.get(
            `${process.env.REACT_APP_SERVER_URI}/user/${userData.email}`
        );
        console.log(user, " fifth");

        if (user.data.msg === "user not found") {
            console.log("user not found");
            setUserExists(false);
        } else {
            setCookies("accessToken", user.data.user);
            console.log(user.data.user.username, "sixth")
            navigate("/user.data.user.username")
            // console.log()
        }
        setIsLoading(false);
    };

    useEffect(() => {
        console.log("third")
        checkUserExists();
    }, []);

    if (isLoading) {
        console.log("mid")
        return <div>Loading...</div>;
    }


    if (userExists) {
        console.log("center");
        navigate("/");
        localStorage.setItem("islogin", true);
        alert(localStorage.getItem("islogin"));
        return;
    }
    else {
        return (
            <div className="completeProfile">
                <h1>Complete Profile</h1>
                <section>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="number"
                            onChange={(e) => {
                                address.current = { ...address.current, phone: e.target.value };
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                address.current = {
                                    ...address.current,
                                    street: e.target.value,
                                };
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                address.current = { ...address.current, city: e.target.value };
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="district">District</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                address.current = {
                                    ...address.current,
                                    district: e.target.value,
                                };
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                address.current = { ...address.current, state: e.target.value };
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="nationality">Nationality</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                address.current = {
                                    ...address.current,
                                    nationality: e.target.value,
                                };
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="pincode">Pincode</label>
                        <input
                            type="number"
                            onChange={(e) => {
                                address.current = {
                                    ...address.current,
                                    pincode: e.target.value,
                                };
                            }}
                        />
                    </div>
                    <button onClick={() => handleSubmit()}>Complete Profile</button>
                </section>
            </div>
        );
    }
}
