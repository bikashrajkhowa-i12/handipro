import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

import NavComp from "./components/NavComp";
import LandingPage from "./pages/LandingPage";
import Markets from "./pages/Markets";
import Features from "./pages/Features";
import Learn from "./pages/Learn";
import DetailsPage from "./pages/DetailsPage";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import FooterComp from "./components/FooterComp";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

const App = () => {
  const location = useLocation();
  const visibility = !["/termsandconditions", "/privacypolicy"].includes(
    location.pathname
  );

  return (
    <div className="app-container">
      {visibility && (
        <header>
          <NavComp />
        </header>
      )}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/features" element={<Features />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/markets/:key" element={<DetailsPage />} />

          {/* T&C and Privacy & Policy routes */}
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      {visibility && <FooterComp />}
    </div>
  );
};

export default App;
