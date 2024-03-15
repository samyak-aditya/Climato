import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from "./pages/Login.js";
import LandingPage from "./pages/landingpage.js"; // Corrected capitalization of the component name
=======
import Login from "./pages/user/Login.js"
import Signup from "./pages/user/Signup.js"
import RSignIn from "./pages/recycler/RLogin.js"
import RSignup from "./pages/recycler/RSignup.js"
>>>>>>> b325a63be348d77733bdef55ac3966f2b7a061d1

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login />} /> {/* Specify the component to render for the "/login" route */}
        <Route path="/landing" element={<LandingPage />} /> {/* Specify the component to render for the "/landing" route */}
=======
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>I
        <Route path="/recyler/rlogin" element={<RSignIn />}></Route>I
        <Route path="recycler/rsignup" element={<RSignup />}></Route>I
>>>>>>> b325a63be348d77733bdef55ac3966f2b7a061d1
      </Routes>
    </BrowserRouter>
  );
}

export default App;
