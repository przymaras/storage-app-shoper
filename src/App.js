import "./css/style.css";
import "./css/module-wares-row.css";
import "./css/module-ordersSales-row.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

import { useState } from "react";
import React from "react";

import fixFAonClick from "./fixFAonClick";

function App() {
  const [navModulesVisible, setNavModulesVisible] = useState(false);
  const [navToolsVisible, setNavToolsVisible] = useState(false);

  function handleClick(e) {
    e = fixFAonClick(e);

    toggleNav(e);
  }

  function toggleNav(e) {
    if (e.target.id === "nav-modules-open-btn") {
      setNavModulesVisible(!navModulesVisible);
      setNavToolsVisible(false);
    } else {
      setNavToolsVisible(!navToolsVisible);
      setNavModulesVisible(false);
    }
  }

  return (
    <>
      <Header handleClick={handleClick} />
      <Main
        navModulesVisible={navModulesVisible}
        navToolsVisible={navToolsVisible}
      />
    </>
  );
}

export default App;
