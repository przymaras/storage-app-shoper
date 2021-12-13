import NavContainer from "./Nav/NavContainer";
import NavModules from "./Nav/NavModules";
import NavTools from "./Nav/NavTools";
import ModuleContainer from "./Modules/ModuleContainer";
import Products from "./Modules/Products";
import OrdersSales from "./Modules/OrdersSales";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

function Main(props) {
  const [activeModule, setActiveModule] = useState("module-wares");
  const [activeTools, setActiveTools] = useState([]);
  const [filterState, setFilterState] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const foldGroups = [];

  let navigate = useNavigate();

  function addToFoldGroups(f, id) {
    const thisGroupIsNotInArray = !foldGroups.some((group) => group.id === id);
    if (thisGroupIsNotInArray) foldGroups.push({ f, id });
  }

  useEffect(() => {
    setSelectedItems([]);
  }, [filterState]);

  function navBtnAction(id, groupId) {
    if (id.includes("module-")) {
      navigate(`${id}`);
      setActiveModule(id);
      setSelectedItems([]);
      foldGroups.forEach((foldGroup) => {
        //fold all btn groups but if click comes from active group that is unfolded - don't fold it
        if (groupId !== foldGroup.id) {
          foldGroup.f();
        }
      });
    }

    if (id.includes("tool-")) {
      console.log(selectedItems);
    }
  }

  // function renderModule(module) {
  //   switch (module) {
  //     case "module-wares":
  //       return (
  //         <ModuleContainer name="Asortyment" icon="luggage-cart">
  //           <Products
  //             setActiveTools={setActiveTools}
  //             filterState={filterState}
  //             setSelectedItems={setSelectedItems}
  //             selectedItems={selectedItems}
  //           />
  //         </ModuleContainer>
  //       );
  //     case "module-ordersSales":
  //       return (
  //         <ModuleContainer name="Zamówienia sprzedaży" icon="luggage-cart">
  //           <OrdersSales
  //             setActiveTools={setActiveTools}
  //             setSelectedItems={setSelectedItems}
  //             selectedItems={selectedItems}
  //           />
  //         </ModuleContainer>
  //       );

  //     default:
  //       if (activeTools[0]) setActiveTools([]);
  //       return (
  //         <ModuleContainer name="Moduł nie znaleziony" icon="luggage-cart">
  //           Moduł nie został jeszcze zaimplementowany ... sorry ;)
  //         </ModuleContainer>
  //       );
  //   }
  // }

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
      <Routes>
        <Route path="/" element={<Navigate replace to="/module-wares" />} />
        <Route
          path="/module-wares"
          element={
            <ModuleContainer name="Asortyment" icon="luggage-cart">
              <Products
                setActiveTools={setActiveTools}
                filterState={filterState}
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
              />
            </ModuleContainer>
          }
        />
        <Route
          path="/module-ordersSales"
          element={
            <ModuleContainer name="Zamówienia sprzedaży" icon="luggage-cart">
              <OrdersSales
                setActiveTools={setActiveTools}
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
              />
            </ModuleContainer>
          }
        />
        <Route
          path="/*"
          element={
            <ModuleContainer name="Moduł nie znaleziony" icon="luggage-cart">
              Moduł nie został jeszcze zaimplementowany ... sorry ;)
            </ModuleContainer>
          }
        />
      </Routes>
    </main>
  );
}

Main.propTypes = {
  navModulesVisible: PropTypes.bool.isRequired,
  navToolsVisible: PropTypes.bool.isRequired,
};

export default Main;
