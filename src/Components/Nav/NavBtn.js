import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBtn(props) {
  const handleClick = props.handleClick;

  return (
    <button
      onClick={handleClick}
      className={`nav-btn ${props.grouped ? "grouped" : null} btn`}
      id={props.id}
    >
      <FontAwesomeIcon icon={props.icon} />
      {props.name}
    </button>
  );
}
