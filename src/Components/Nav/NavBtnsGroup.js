import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBtnsContainer from "./NavBtnsContainer";
import { useState } from "react";

export default function NavBtnsGroup(props) {
  const [folded, setFolded] = useState(true);

  function handleClick(e) {
    if (folded) {
      setFolded(false);
    }
  }

  function fold() {
    setFolded(true);
  }

  return (
    <div
      onClick={handleClick}
      className={`nav-buttons-group ${folded ? "buttons-group-folded" : null}`}
      id={props.id}
    >
      <h2 className="group-title">
        <FontAwesomeIcon icon="angle-double-down" />
        <FontAwesomeIcon icon="box" />
        {props.name}
      </h2>
      <NavBtnsContainer>{props.children}</NavBtnsContainer>
    </div>
  );
}
