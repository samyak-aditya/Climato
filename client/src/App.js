import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import LandingPage from "./pages/landingpage.js"; // Corrected capitalization of the component name

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Specify the component to render for the "/login" route */}
        <Route path="/landing" element={<LandingPage />} /> {/* Specify the component to render for the "/landing" route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
