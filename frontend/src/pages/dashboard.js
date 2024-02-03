import axios from "axios";
import Loader from "../components/Loader/Loader";
import "../css/dashboard.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProfile from "../components/EditProfile";

export default function Dashboard() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("useritems");

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

  const deleteAccount = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_SERVER_URI}/user/id/${userId}`
      );
      localStorage.removeItem("user");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
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
            <button
              className="dashboardLeftUserEditProfile"
              onClick={() => setTab("profile")}
            >
              Edit Profile
            </button>
            <button
              className="dashboardLeftUserDeleteAccount"
              onClick={() => deleteAccount()}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
      <div className="dashboardRight">
        <div className="dashboardRightTabs">
          <button
            className={tab === "useritems" ? "active" : ""}
            onClick={() => setTab("useritems")}
          >
            User Items
          </button>
          <button
            className={tab === "purchases" ? "active" : ""}
            onClick={() => setTab("purchases")}
          >
            Purchases
          </button>
        </div>
        {tab === "profile" && <EditProfile />}
        {tab === "useritems" && <>User Items</>}
        {tab === "purchases" && <>Purchases</>}
      </div>
    </div>
  );
}
