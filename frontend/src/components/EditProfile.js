import axios from "axios";
import { useRef, useState } from "react";
import "../css/editProfile.css";

export default function EditProfile({ userData }) {
  const [fullname, setFullname] = useState(userData?.fullname);
  const [email, setEmail] = useState(userData?.email);
  const [phone, setPhone] = useState(userData?.phone);
  const [address, setAddress] = useState(userData?.address);
  const [username, setUsername] = useState(userData?.username);

  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URI}/user/${userData?.username}`,
        {
          fullname,
          username,
          email,
          phone,
          address,
        }
      );
      if(res.status === 201){
        window.location.reload();
      }
    } catch (err) {
      setError("Error occurred !!");
    }
  };

  return (
    <div className="editProfile">
      <h1>Edit Profile</h1>
      <div>
        <div>
          <span>Fullname</span>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone</span>
          <input
            type="number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Address</span>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        {error && <span className="error-message">{error}</span>}
        <button onClick={handleUpdate}>Save</button>
      </div>
    </div>
  );
}
