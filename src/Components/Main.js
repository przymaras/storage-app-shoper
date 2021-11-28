import Nav from "./Nav/Nav";
import NavModules from "./Nav/NavModules";
import NavTools from "./Nav/NavTools";
import Module from "./Modules/Module";
import Products from "./Modules/Products";

export default function Main(props) {
  return (
    <main className="main">
      <Nav id="nav-modules" title="MODUŁY" icon="toolbox">
        <NavModules />
      </Nav>
      <Nav id="nav-tools" title="NARZĘDZIA" icon="tools">
        <NavTools />
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
