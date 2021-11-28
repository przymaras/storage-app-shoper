import Nav from "./Nav/Nav";
import NavModules from "./Nav/NavModules";
import NavTools from "./Nav/NavTools";
import Module from "./Modules/Module";
import Products from "./Modules/Products";

export default function Main(props) {
  function handleClick(e) {
    console.log(`clicked ${e.target.id}`);
  }

  return (
    <main className="main">
      <Nav
        id="nav-modules"
        title="MODUŁY"
        icon="toolbox"
        visible={props.navModulesVisible}
      >
        <NavModules handleClick={handleClick} />
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
