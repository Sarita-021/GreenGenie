import React, { useState, useEffect } from 'react';
import "../css/dashboard.css"
import axios from 'axios';

function UserProfile() {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        phone: '',
        profilePicture: '',
        address: {
            Street: '',
            city: '',
            district: '',
            state: '',
            nationality: '',
            pincode: '',
        },
    })

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            try {
                console.log("jiei")
                // const data = localStorage.getItem("user");
                // console.log(data.)
                const response = await axios.get(`/user/:${JSON.parse(localStorage.getItem("user")).username}`); // Replace with your backend endpoint
                console.log(response.data);
                console.log(response.msg)
                // const userData = await response.json();
                // setUser(userData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    // useEffect(() => {

    //     console.log(JSON.parse(localStorage.getItem("user")));
    // }, []);

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            console.log("got rendered")
            const response = await axios.put('/user/:username', user);
            const updatedUser = response.data;
            if (response.success) {
                alert("item added successfully");
                // navigate("/");
            }
            setUser(updatedUser);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ... (loading and error messages) */}

            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" value={user.fullname} onChange={handleChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />

            {/* <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={user.username} onChange={handleChange} /> */}

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={user.phone} onChange={handleChange} />

            {/* Profile picture handling (e.g., file upload or image preview) */}

            <label htmlFor="Street">Street:</label>
            <input type="text" id="Street" name="address.Street" value={user.address.Street} onChange={handleChange} />
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="address.city" value={user.address.city} onChange={handleChange} />
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="address.state" value={user.address.state} onChange={handleChange} />
            <label htmlFor="district">District:</label>
            <input type="text" id="district" name="address.district" value={user.address.district} onChange={handleChange} />
            <label htmlFor="nationality">Nationality:</label>
            <input type="text" id="nationality" name="address.nationality" value={user.address.nationality} onChange={handleChange} />
            <label htmlFor="pincode">Pincode:</label>
            <input type="text" id="pincode" name="address.pincode" value={user.address.pincode} onChange={handleChange} />

            {/* ... (Other address fields) */}

            <button type="submit">Save Profile</button>
        </form>
    );
}

export default UserProfile;
