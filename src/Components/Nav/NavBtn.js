import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function NavBtn(props) {
  return (
    <button
      onClick={(e) => props.navBtnAction(props.id, props.groupId)}
      className={`nav-btn ${props.grouped ? "grouped" : null} btn`}
      id={props.id}
    >
      <FontAwesomeIcon icon={props.icon} />
      {props.name}
    </button>
  );
}

NavBtn.defaultProps = { grouped: false, groupId: "not-in-group" };

NavBtn.propTypes = {
  navBtnAction: PropTypes.func.isRequired,
  icon: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NavBtn;
