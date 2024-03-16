import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login.js"
import Signup from "./pages/user/Signup.js"
import RSignIn from "./pages/recycler/RLogin.js"
import RSignup from "./pages/recycler/RSignup.js"
import Landingpage from "./pages/landingpage.js";
import NavBar from "./component/navbar.js";
import { Dashboard } from "./pages/dashboard.js";
import Recycle from "./pages/user/Recycle.js";
import History from "./pages/user/History.js";
import LeaderBoard from "./pages/LeaderBoard.js";
import Learn from "./pages/Learn.js";

function App() {
  return (
    <div className='bg-black '>
    
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>I
        <Route path="/recycler/rlogin" element={<RSignIn />}></Route>
        <Route path="recycler/rsignup" element={<RSignup />}></Route>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/landing" element={<Landingpage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/recycle" element={<Recycle/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/leaderboard" element={<LeaderBoard/>}></Route>
        <Route path="/learn" element={<Learn/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
