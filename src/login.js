import React from "react";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "./config/firebase-config";
import "./index.css";

const Login = () => {
  // Sign in with google
  const signinGoogle = () => {
    auth.signInWithPopup(googleProvider).catch(alert);
  };
  // Sign in with facebook
  const signinFacebook = () => {
    auth.signInWithPopup(facebookProvider).catch(alert);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <center>
        <h1>Login using the following options</h1>
        <button className="loginBtn loginBtn--google" onClick={signinGoogle}>
          Sign In with Google
        </button>
        <button
          className="loginBtn loginBtn--facebook"
          onClick={signinFacebook}
        >
          Sign In with Facebook
        </button>
      </center>
    </div>
  );
};

export default Login;
