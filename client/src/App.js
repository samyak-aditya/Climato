import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login.js"
import Signup from "./pages/user/Signup.js"
import RSignIn from "./pages/recycler/RLogin.js"
import RSignup from "./pages/recycler/RSignup.js"
import Landingpage from "./pages/landingpage.js";
import NavBar from "./component/navbar.js";
import { Dashboard } from "./pages/dashboard.js";

function App() {
  return (
    <div className='bg-black '>
    
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>I
        <Route path="/recycler/rlogin" element={<RSignIn />}></Route>
        <Route path="recycler/rsignup" element={<RSignup />}></Route>
        <Route path="/landing" element={<Landingpage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
