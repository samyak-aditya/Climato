import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login.js"
import Signup from "./pages/user/Signup.js"
import RSignIn from "./pages/recycler/RLogin.js"
import RSignup from "./pages/recycler/RSignup.js"
import Landingpage from "./pages/landingpage.js";
import NavBar from "./component/navbar.js";
import { Dashboard } from "./pages/dashboard.js";
<<<<<<< HEAD
import { Learning } from "./pages/user/learning.js";
=======
import Recycle from "./pages/user/Recycle.js";
import History from "./pages/user/History.js";
>>>>>>> 2add84142928b0094df7287e0c19718e1e98beba

function App() {
  return (
    <div className='bg-black '>
<<<<<<< HEAD
    
    
=======
    <BrowserRouter>
>>>>>>> 2add84142928b0094df7287e0c19718e1e98beba
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>I
        <Route path="/recycler/rlogin" element={<RSignIn />}></Route>
        <Route path="recycler/rsignup" element={<RSignup />}></Route>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/landing" element={<Landingpage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
<<<<<<< HEAD
        <Route path="/learn" element={<Learning />}></Route>
=======
        <Route path="/recycle" element={<Recycle/>}></Route>
        <Route path="/history" element={<History/>}></Route>
>>>>>>> 2add84142928b0094df7287e0c19718e1e98beba
      </Routes>
    
    </div>
  );
}

export default App;
