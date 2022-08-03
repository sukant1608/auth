import React from "react";
import { auth } from "./config/firebase-config";

const Mainpage = () => {
  // Signout function
  const logout = () => {
    auth.signOut();
  };

  return (
    <center>
      <div style={{ marginTop: "200px" }}>
        <h3>Welcome</h3>
        <h4>{auth.currentUser.email}</h4>
        <button onClick={logout}>Logout</button>
      </div>
    </center>
  );
};

export default Mainpage;
