import "./css/style.css";
import "./css/module-wares-row.css";
import "./css/module-ordersSales-row.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [navModulesVisible, setNavModulesVisible] = useState(false);
  const [navToolsVisible, setNavToolsVisible] = useState(false);

  function toggleNavModules() {
    setNavModulesVisible((prevState) => !prevState);
    setNavToolsVisible(false);
  }

  function toggleNavTools() {
    setNavToolsVisible((prevState) => !prevState);
    setNavModulesVisible(false);
  }


  return (
    <>
      <Header
        toggleNavModules={toggleNavModules}
        toggleNavTools={toggleNavTools}
      />
      <Main
        navModulesVisible={navModulesVisible}
        navToolsVisible={navToolsVisible}
      />
    </>
  );
}

export default App;
