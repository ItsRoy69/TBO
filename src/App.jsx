import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingpage/LandingPage";
import ShareRooms from "./pages/sharerooms/ShareRooms";
import ShareCabs from "./pages/sharecabs/ShareCabs";
import Emergency from "./pages/emergency/Emergency";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={ <LandingPage />} />
          <Route path="/sharerooms" element={<ShareRooms />} />
          <Route path="/sharecabs" element={<ShareCabs />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
