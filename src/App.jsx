import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import NavComp from "./components/NavComp";
import LandingPage from "./LandingPage";
import Markets from "./modules/Markets";
import Features from "./modules/Features";
import Learn from "./modules/Learn";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <NavComp />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/features" element={<Features />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>
        <footer>
          <p>© {new Date().getFullYear()} Created by Bikash </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
