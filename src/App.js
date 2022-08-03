import React from "react";
import { auth } from "./config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./login";
import Mainpage from "./main";

function App() {
  const [user] = useAuthState(auth);
  return user ? <Mainpage /> : <Login />;
}

export default App;
