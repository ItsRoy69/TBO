import "./App.css";
import LandingPage from "./pages/landingpage/LandingPage";
import LandingPage2 from "./pages/landingpage/LandingPage2";
import LandingPage3 from "./pages/landingpage/LandingPage3";
import LandingPage4 from "./pages/landingpage/LandingPage4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<LandingPage />}/>
      <Route exact path="/room" element={<LandingPage2 />}/>
      <Route exact path="/cab" element={<LandingPage3 />}/>
      <Route exact path="/emergency" element={<LandingPage4 />}/>
      </Routes>
    </>
  );
}

export default App;
