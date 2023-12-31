import "./App.css";
import LandingPage from "./pages/landingpage/LandingPage";
import LandingPage2 from "./pages/landingpage/LandingPage2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<LandingPage />}/>
      <Route exact path="/room" element={<LandingPage2 />}/>
      </Routes>
    </>
  );
}

export default App;
