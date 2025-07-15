import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavComp from "./components/NavComp";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <NavComp />
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
