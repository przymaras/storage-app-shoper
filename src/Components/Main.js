import NavContainer from "./Nav/NavContainer";
import NavModules from "./Nav/NavModules";
import NavTools from "./Nav/NavTools";
import ModuleContainer from "./Modules/ModuleContainer";
import Products from "./Modules/Products";
import OrdersSales from "./Modules/OrdersSales";

import { useState } from "react";

export default function Main(props) {
  const [activeModule, setActiveModule] = useState("module-wares");
  const [activeTools, setActiveTools] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const foldGroups = [];

  function addToFoldGroups(f, id) {
    let canAdd = true;
    foldGroups.forEach((group) => group.id === id && (canAdd = false));

    if (canAdd) foldGroups.push({ f, id });
  }

  function navBtnAction(id, groupId) {
    if (id.includes("module-")) {
      setActiveModule(id);
      foldGroups.forEach((foldGroup) => {
        //fold all btn groups but if click comes from active group that is unfolded - don't fold it
        if (groupId !== foldGroup.id) {
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
            <Products
              setActiveTools={setActiveTools}
              filterState={filterState}
            />
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
          addToFoldGroups={addToFoldGroups}
          foldGroups={foldGroups}
          navBtnAction={navBtnAction}
        />
      </NavContainer>
      <NavContainer
        id="nav-tools"
        title="NARZĘDZIA"
        icon="tools"
        visible={props.navToolsVisible}
      >
        <NavTools
          activeModule={activeModule}
          activeTools={activeTools}
          setFilterState={setFilterState}
          navBtnAction={navBtnAction}
        />
      </NavContainer>
      {renderModule(activeModule)}
    </main>
  );
}
