import React from "react"
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <div>
      
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
          
        </Routes> 

    </div>
  );
}

export default App;
