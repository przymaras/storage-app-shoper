import NavContainer from "./Nav/NavContainer";
import NavModules from "./Nav/NavModules";
import NavTools from "./Nav/NavTools";
import ModuleContainer from "./Modules/ModuleContainer";
import Products from "./Modules/Products";
import OrdersSales from "./Modules/OrdersSales";

import { useState } from "react";

import fixFAonClick from "../fixFAonClick";

export default function Main(props) {
  const [activeModule, setActiveModule] = useState("module-wares");
  const [activeTools, setActiveTools] = useState([]);
  const foldGroups = [];

  function foldGroup(f, id) {
    foldGroups.push({ f, id });
  }

  function handleClick(e) {
    e = fixFAonClick(e);
    console.log(`clicked ${e.target.id}`);

    if (e.target.id.includes("module-")) {
      setActiveModule(e.target.id);
      foldGroups.forEach((foldGroup) => {
        //if click comes from active group that is unfolded - don't fold it
        if (e.target.parentNode.parentNode.id !== foldGroup.id) {
          foldGroup.f();
        }
      });
    }
  }

  function renderModule(module) {
    switch (module) {
      case "module-wares":
        return (
          <ModuleContainer name="Asortyment" icon="luggage-cart">
            <Products setActiveTools={setActiveTools} />
          </ModuleContainer>
        );
      case "module-ordersSales":
        return (
          <ModuleContainer name="Zamówienia sprzedaży" icon="luggage-cart">
            <OrdersSales setActiveTools={setActiveTools} />
          </ModuleContainer>
        );

      default:
        if (activeTools[0]) setActiveTools([]);
        return (
          <ModuleContainer name="Moduł nie znaleziony" icon="luggage-cart">
            Moduł nie został jeszcze zaimplementowany ... sorry ;)
          </ModuleContainer>
        );
    }
  }

  return (
    <main className="main">
      <NavContainer
        id="nav-modules"
        title="MODUŁY"
        icon="toolbox"
        visible={props.navModulesVisible}
      >
        <NavModules
          foldGroup={foldGroup}
          foldGroups={foldGroups}
          handleClick={handleClick}
        />
      </NavContainer>
      <NavContainer
        id="nav-tools"
        title="NARZĘDZIA"
        icon="tools"
        visible={props.navToolsVisible}
      >
        <NavTools activeTools={activeTools} handleClick={handleClick} />
      </NavContainer>
      {renderModule(activeModule)}
    </main>
  );
}
