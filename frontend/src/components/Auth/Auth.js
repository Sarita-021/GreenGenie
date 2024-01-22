import React from "react";
import "../../css/auth.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/auth_firebase";
import { createUser } from "../../config/DB_API";
import { useState } from "react";
import Loader from "../Loader/Loader";

export default function Auth() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                createUser(
                    user.uid,
                    user.providerData[0].displayName,
                    user.providerData[0].email,
                    user.providerData[0].photoURL
                );
            })
            .catch((error) => {
                console.log("ERROR signing in");
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

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
