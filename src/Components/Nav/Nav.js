import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav(props) {
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
