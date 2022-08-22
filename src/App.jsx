import React from "react"
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";


function App() {
  return (
    <div>
      
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
        </Routes> 

    </div>
  );
}

export default App;
