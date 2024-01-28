import React from "react";
import "../../css/auth.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/auth_firebase";
import { createUser } from "../../config/DB_API";
import { useState } from "react";
import Loader from "../Loader/Loader";
import CompleteProfile from "./CompleteProfile";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState();

  const handleSignIn = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserData({
          userId: user.uid,
          fullname: user.providerData[0].displayName,
          email: user.providerData[0].email,
          photoURL: user.providerData[0].photoURL
        });
      })
      .catch((error) => {
        console.log("ERROR signing in");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (userData) {
    return <CompleteProfile userData={userData} />;
  }

  return (
    <div className="auth">
      <div className="authWrapper">
        <img src="/assets/logo.jpeg" alt="" />
        <span></span>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="authGoogleBtn">
            <img src="/assets/google-icon.png" alt="" />
            <span className="authGoogleText" onClick={() => handleSignIn()}>
              Sign In With Google
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
