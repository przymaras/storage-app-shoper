import Nav from "./Nav/Nav";
import NavModules from "./Nav/NavModules";
import NavTools from "./Nav/NavTools";
import Module from "./Modules/Module";
import Products from "./Modules/Products";

export default function Main(props) {
  const foldGroups = [];

  function foldGroup(f, id) {
    foldGroups.push({ f, id });
  }

  function handleClick(e) {
    console.log(`clicked ${e.target.id}`);
    // console.log(e);
    // console.log(e.target.parentNode.parentNode.id);
    foldGroups.forEach((foldGroup) => {
      //if click comes from active group that is unfolded - don't fold it
      if (e.target.parentNode.parentNode.id !== foldGroup.id) {
        foldGroup.f();
      }
    });
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
        <NavTools handleClick={handleClick} />
      </Nav>
      <Module
        name="Produkty"
        icon="luggage-cart"
        searchBar={true}
        searchBarPlaceholder="Kod lub nazwa towaru ..."
      >
        <Products />
      </Module>
    </main>
  );
}
