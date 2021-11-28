import "./css/style.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

import { useState } from "react";
import React from "react";

function App() {
  const [navModulesVisible, setNavModulesVisible] = useState(false);
  const [navToolsVisible, setNavToolsVisible] = useState(false);

  function toggleNav(nav) {
    // there are font awesome icons inside button and they causing nested target
    if (
      nav.target.id === "nav-modules-open-btn" ||
      nav.target.parentNode.id === "nav-modules-open-btn" ||
      nav.target.parentNode.parentNode.id === "nav-modules-open-btn"
    ) {
      setNavModulesVisible(!navModulesVisible);
      setNavToolsVisible(false);
    } else {
      setNavToolsVisible(!navToolsVisible);
      setNavModulesVisible(false);
    }
  }

  return (
    <>
      <Header toggleNav={toggleNav} />
      <Main
        navModulesVisible={navModulesVisible}
        navToolsVisible={navToolsVisible}
      />
    </>
  );
}

export default App;
