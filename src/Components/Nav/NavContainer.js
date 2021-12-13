import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function NavContainer(props) {
  return (
    <nav
      className={`nav-overlay ${props.visible ? null : "hide-overlay"}`}
      id={props.id}
    >
      <div className="nav-toolbar">
        <h2 className="section-title">
          <FontAwesomeIcon icon={props.icon} />
          {props.title}
          <FontAwesomeIcon icon={props.icon} />
        </h2>
        <div className="nav-tools-container">{props.children}</div>
      </div>
    </nav>
  );
}

NavContainer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

export default NavContainer;
