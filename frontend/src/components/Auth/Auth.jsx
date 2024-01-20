import "./Auth.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "../../config/auth_firebase"

export default function Auth() {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("ERROR signing in");
        console.log(error);
      });
  };

  return (
    <div className="auth">
      <div className="authWrapper">
        <img src="/assets/logo.jpeg" alt="" />
        <span></span>
        <div>
          <img src="/assets/google-icon.png" alt="" />
          <span className="authGoogleText" onClick={() => handleSignIn()}>
            Sign In With Google
          </span>
        </div>
      </div>
    </div>
  );
}
