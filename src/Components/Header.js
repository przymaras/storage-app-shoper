import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  const toggleNav = props.toggleNav;
  return (
    <header>
      <h1 className="header-title">
        <FontAwesomeIcon icon="warehouse" />
        Bikel.pl storage App
      </h1>
      <div className="nav-toggle">
        <button
          onClick={toggleNav}
          className="nav-toggle--button btn"
          id="nav-modules-open-btn"
        >
          <FontAwesomeIcon icon="toolbox" />
          <FontAwesomeIcon icon={["far", "caret-square-down"]} />
        </button>

        <button
          onClick={toggleNav}
          className="nav-toggle--button btn"
          id="nav-tools-open-btn"
        >
          <FontAwesomeIcon icon={["far", "caret-square-down"]} />
          <FontAwesomeIcon icon="tools" />
        </button>
      </div>
    </header>
  );
}
