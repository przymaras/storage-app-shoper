import Nav from "./Nav/Nav";
import NavModules from "./Nav/NavModules";
import NavTools from "./Nav/NavTools";
import Module from "./Modules/Module";
import Products from "./Modules/Products";
import OrdersSales from "./Modules/OrdersSales";

import { useState } from "react";

export default function Main(props) {
  const [activeModule, setActiveModule] = useState("module-wares");
  const [activeTools, setActiveTools] = useState([]);
  const foldGroups = [];

  function foldGroup(f, id) {
    foldGroups.push({ f, id });
  }

  function handleClick(e) {
    console.log(`clicked ${e.target.id}`);
    // console.log(e);
    // console.log(e.target.parentNode.parentNode.id);

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
          <Module
            name="Asortyment"
            icon="luggage-cart"
            searchBar={true}
            searchBarPlaceholder="Kod lub nazwa towaru ..."
          >
            <Products setActiveTools={setActiveTools} />
          </Module>
        );
      case "module-ordersSales":
        return (
          <Module
            name="Zamówienia sprzedaży"
            icon="luggage-cart"
            searchBar={true}
            searchBarPlaceholder="Szukana fraza ..."
          >
            <OrdersSales />
          </Module>
        );

      default:
        return (
          <Module
            name="Moduł nie znaleziony"
            icon="luggage-cart"
            searchBar={false}
          >
            Moduł nie został jeszcze zaimplementowany ... sorry ;)
          </Module>
        );
    }
  }

  return (
    <main className="main">
      <Nav
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
      </Nav>
      <Nav
        id="nav-tools"
        title="NARZĘDZIA"
        icon="tools"
        visible={props.navToolsVisible}
      >
        <NavTools activeTools={activeTools} handleClick={handleClick} />
      </Nav>
      {renderModule(activeModule)}
    </main>
  );
}
