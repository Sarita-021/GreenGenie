import React, { useState, useEffect } from 'react';
import "../css/dashboard.css"
import axios from 'axios';

function UserProfile() {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        phone: '',
        address: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/user/username/${JSON.parse(localStorage.getItem("user")).data.username}`); // Replace with your backend endpoint
                console.log(response.data, "data in response.data");
                const userData = response.data;
                console.log(userData, "data stored in userData")
                setUser((user) => Object.assign({}, user, { fullname: userData.data.fullname, email: userData.data.email, phone: userData.data.phone, address: userData.data.address }))
                console.log(user, " data after updating  ");
            } catch (error) {
                setError(error);
                console.log(error, "no data error in url");
            } finally {
                setIsLoading(false);
            }
            console.log(user, " data after updating  ");
        };

        fetchUser();
    }, []);

    const handleChange = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            console.log("got rendered")
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URI}/user/${JSON.parse(localStorage.getItem("user")).username}`, user);
            const updatedUser = response.data;
            if (response.success) {
                alert("updated successfully");
            }
            setUser((updatedUser));
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    console.log(user, "data in user state")

    return (
        <form onSubmit={handleSubmit}>
            {isLoading && <p>Loading user data...</p>}
            {/* ... (loading and error messages) */}

            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" placeholder={user.fullname} value={user?.fullname} onChange={handleChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder={user.email} value={user?.email} onChange={handleChange} />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder={user.phone} value={user?.phone} onChange={handleChange} />

            {/* Profile picture handling (e.g., file upload or image preview) */}

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" placeholder={user.address} value={user?.address} onChange={handleChange} />

            {/* ... (Other address fields) */}

            <button type="submit">Save Profile</button>
        </form>
    );
}

export default UserProfile;
