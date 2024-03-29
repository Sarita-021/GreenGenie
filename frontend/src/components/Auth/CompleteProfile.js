import { useEffect, useRef, useState } from "react";
import "../../css/CompleteProfile.css";
import { createUser, setCookies } from "../../config/DB_API";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CompleteProfile({ userData }) {
    const address = useRef({});
    const [gender, setGender] = useState("M");
    const [userExists, setUserExists] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const handleSubmit = async () => {
        const resp = await createUser(
            userData?.userId,
            userData?.fullname,
            userData?.email,
            userData?.photoURL,
            gender,
            address.current
        );
        if (resp) {
            navigate("/");
            localStorage.setItem("islogin", true);
        }
    };

    const checkUserExists = async () => {
        const user = await axios.get(
            `${process.env.REACT_APP_SERVER_URI}/user/${userData.email}`
        );

        if (user.data.msg === "user not found through email") {
            console.log("user not found");
            setUserExists(false);
        } else {
            setCookies("accessToken", user.data?.data);
            navigate("/");
            localStorage.setItem("islogin", true);
        }
        setIsLoading(false);
        return;
    };

    useEffect(() => {
        checkUserExists();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!userExists) {
        return (
            <div className="completeProfile">
                <h1>Complete Profile</h1>
                <section>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <div className="genderOptions">
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" onChange={(e)=>{setGender('M')}} />
                        </div>
                        <div className="genderOptions">
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" onChange={(e)=>{setGender('F')}} />
                        </div>
                        <div className="genderOptions">
                            <label htmlFor="others">Others</label>
                            <input type="radio" name="gender" onChange={(e)=>{setGender('O')}} />
                        </div>
                    </div>
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
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                address.current = {
                                    ...address.current,
                                    address: e.target.value,
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
