import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBtn(props) {
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
