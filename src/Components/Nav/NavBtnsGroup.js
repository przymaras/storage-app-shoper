import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBtnsContainer from "./NavBtnsContainer";

export default function NavBtnsGroup(props) {
  return (
    <div className="nav-buttons-group buttons-group-folded" id={props.id}>
      <h2 className="group-title">
        <FontAwesomeIcon icon="angle-double-down" />
        <FontAwesomeIcon icon="box" />
        {props.name}
      </h2>
      <NavBtnsContainer>{props.children}</NavBtnsContainer>
    </div>
  );
}
