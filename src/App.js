import "./css/style.css";
import "./css/module-wares-row.css";
import "./css/module-ordersSales-row.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useToggler } from "./Hooks/useToggler";

function App() {
  const [navModulesVisible, toggleNavModules] = useToggler();
  const [navToolsVisible, toggleNavTools] = useToggler();

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
