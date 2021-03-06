import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <h1 className="header-title">
        <FontAwesomeIcon icon="warehouse" />
        Bikel.pl storage App
      </h1>
      <div className="nav-toggle">
        <button
          onClick={props.toggleNavModules}
          className="nav-toggle--button btn"
          id="nav-modules-open-btn"
        >
          <FontAwesomeIcon icon="toolbox" />
          <FontAwesomeIcon icon={["far", "caret-square-down"]} />
        </button>

        <button
          onClick={props.toggleNavTools}
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

Header.propTypes = {
  toggleNavTools: PropTypes.func.isRequired,
  toggleNavModules: PropTypes.func.isRequired,
};

export default Header;
