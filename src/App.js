import "./css/style.css";
import "./css/module-wares-row.css";
import "./css/module-ordersSales-row.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

import { useState } from "react";

function App() {
  const [navModulesVisible, setNavModulesVisible] = useState(false);
  const [navToolsVisible, setNavToolsVisible] = useState(false);

  function toggleNav(id) {
    if (id === "nav-modules-open-btn") {
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
