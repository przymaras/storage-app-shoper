import NavContainer from "./Nav/NavContainer";
import NavModules from "./Nav/NavModules";
import NavTools from "./Nav/NavTools";
import ModuleContainer from "./Modules/ModuleContainer";
import Wares from "./Modules/Wares";
import Ware from "./Modules/Ware";
import OrdersSales from "./Modules/OrdersSales";
import Modal from "./Modules/Modal";
import Ok from "./Modules/Ok";
import { waresTools } from "../tools/waresTools";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";

function Main(props) {
  const [activeModule, setActiveModule] = useState("module-wares");
  const [activeTools, setActiveTools] = useState([]);
  const [filterState, setFilterState] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const foldGroups = [];

  const navigate = useNavigate();

  function addToFoldGroups(f, id) {
    const thisGroupIsNotInArray = !foldGroups.some((group) => group.id === id);
    if (thisGroupIsNotInArray) foldGroups.push({ f, id });
  }

  useEffect(() => {
    setSelectedItems([]);
  }, [filterState]);

  function navModulesBtnAction(id, groupId) {
    navigate(`${id}`);
    setActiveModule(id);
    setSelectedItems([]);
    foldGroups.forEach((foldGroup) => {
      //fold all btn groups but if click comes from active group that is unfolded - don't fold it
      if (groupId !== foldGroup.id) foldGroup.f();
    });
  }

  function navToolsBtnAction(id) {
    if (id.includes("tool-wares")) {
      waresTools(id, selectedItems, navigate);
    } else if (id.includes("tool-ordersSales")) {
      console.log("tool-ordersSales", selectedItems);
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
          navBtnAction={navModulesBtnAction}
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
          navBtnAction={navToolsBtnAction}
        />
      </NavContainer>
      <Routes>
        <Route path="/" element={<Navigate replace to="/module-wares" />} />
        <Route
          path="/module-wares"
          element={
            <>
              <ModuleContainer name="Asortyment" icon="luggage-cart">
                <Wares
                  setActiveTools={setActiveTools}
                  filterState={filterState}
                  setSelectedItems={setSelectedItems}
                  selectedItems={selectedItems}
                />
              </ModuleContainer>
              <Outlet />
            </>
          }
        >
          <Route
            path="edit/ok"
            element={
              <Modal>
                <Ok url="/module-wares" />
              </Modal>
            }
          />
          <Route
            path="edit/:id"
            element={
              <Modal>
                <Ware />
              </Modal>
            }
          />
        </Route>
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
