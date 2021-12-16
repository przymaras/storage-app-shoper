import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Module(props) {
  return (
    <section className="module">
      <h2 className="section-title">
        <FontAwesomeIcon icon={props.icon} />
        {props.name}
        <FontAwesomeIcon icon={props.icon} />
      </h2>
      <div className="module--container" id="module-container">
        {props.children}
      </div>
    </section>
  );
}

Module.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Module;
