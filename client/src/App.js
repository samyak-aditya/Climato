import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login.js"
import Signup from "./pages/user/Signup.js"
import RSignIn from "./pages/recycler/RLogin.js"
import RSignup from "./pages/recycler/RSignup.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>I
        <Route path="/recyler/rlogin" element={<RSignIn />}></Route>I
        <Route path="recycler/rsignup" element={<RSignup />}></Route>I
      </Routes>
    </BrowserRouter>
  );
}

export default App;
