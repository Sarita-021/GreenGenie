import axios from "axios";
import Loader from "../components/Loader/Loader";
import "../css/dashboard.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProfile from "../components/EditProfile";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

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
          <div className="dashboardLeftUserData">
            <div className="dashboardLeftUserDetailsImage">
              <img
                src={
                  user?.profilePicture !== ""
                    ? user?.profilePicture
                    : "/assets/defaultProfile.png"
                }
                alt=""
              />
            </div>
            <div className="userNames">
              <span className="fullname">{user?.fullname}</span>
              <span className="username">@{user?.username}</span>
              <div className="dashboardLeftUserProfileAction">
                <button
                  className="dashboardLeftUserEditProfile"
                  onClick={() => setTab("profile")}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="dashboardLeftOtherDetails">
            <div className="dashboardLeftOtherDetailsItem">
              <FaPhoneVolume />
              <span>{user?.phone}</span>
            </div>
            <div className="dashboardLeftOtherDetailsItem">
              <MdEmail />
              <span>{user?.email}</span>
            </div>
          </div>
          <div className="dashboardLeftUserOrderDetails">
            <div className="dashboardLeftUserOrderDetailsItem">
              <span className="orderNumber">
                <MdOutlineCurrencyRupee /> 8374
              </span>
              <span className="orderText">Revenue</span>
            </div>
            <div className="dashboardLeftUserOrderDetailsItem">
              <span className="orderNumber">83</span>
              <span className="orderText">Orders</span>
            </div>
          </div>
          <div
            className="dashboardLogoutBtn"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </div>
          <div className="dashboardUserAccountDelete">
            <IoWarningOutline />
            Delete Account
          </div>
        </div>
      </div>
      <div className="dashboardRight">
        {tab !== "profile" && (
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
        )}
        {tab === "profile" && <EditProfile userData={user} />}
        {tab === "useritems" && <>User Items</>}
        {tab === "purchases" && <>Purchases</>}
      </div>
    </div>
  );
}
