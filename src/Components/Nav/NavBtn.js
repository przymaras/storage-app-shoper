import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBtn(props) {
  return (
    <button
      className={`nav-btn ${props.grouped ? "grouped" : null} btn`}
      id={props.id}
    >
      <FontAwesomeIcon icon={props.icon} />
      {props.name}
    </button>
  );
}
