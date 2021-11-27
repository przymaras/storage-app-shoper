import Nav from "./Nav";
import NavModules from "./NavModules";
import NavTools from "./NavTools";
import Module from "./Module";

export default function Main(props) {
  return (
    <main className="main">
      <Nav id="nav-modules" title="MODUŁY">
        <NavModules />
      </Nav>
      <Nav id="nav-tools" title="NARZĘDZIA">
        <NavTools />
      </Nav>
      <Module />
    </main>
  );
}
