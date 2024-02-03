import axios from "axios";
import Loader from "../components/Loader/Loader";
import "../css/dashboard.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const {userId} = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URI}/user/id/${userId}`
      );
      setUser(res.data.data);
    } catch (error) {
      setError("Error !! Try Again...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="dashboard">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboardLeft">
        <div className="dashboardLeftUserDetails">
          <div className="dashboardLeftUserDetailsImage">
            <img src={user?.profilePicture} alt="" />
          </div>
          <div className="dashboardLeftUserDetailsFullname">
            Fullname: <span>{user?.fullname}</span>
          </div>
          <div className="dashboardLeftUserDetailsUsername">
            Username: <span>{user?.username}</span>
          </div>
          <div className="dashboardLeftUserDetailsEmail">
            Email: <span>{user?.email}</span>
          </div>
          <div className="dashboardLeftUserDetailsPhone">
            Phone: <span>{user?.phone}</span>
          </div>
          <div className="dashboardLeftUserDetailsAddress">
            Address: <span>{user?.address}</span>
          </div>
          <div className="dashboardLeftUserProfileAction">
            <button className="dashboardLeftUserEditProfile">
              Edit Profile
            </button>
            <button className="dashboardLeftUserDeleteAccount">
              Delete Account
            </button>
          </div>
        </div>
      </div>
      <div className="dashboardRight">
        
      </div>
    </div>
  );
}
