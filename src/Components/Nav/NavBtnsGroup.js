import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBtnsContainer from "./NavBtnsContainer";
import { useState } from "react";

import fixFAonClick from "../../fixFAonClick";

export default function NavBtnsGroup(props) {
  const [folded, setFolded] = useState(props.startFolded);

  function handleClick(e) {
    e = fixFAonClick(e);

    if (folded) {
      unfoldCurrentGroupFoldRest();
      setButtonGroupsHeight(e);
    }
  }

  function setButtonGroupsHeight(e) {
    //inline style height needed for CSS "transition: height 500ms" to work properly

    const groupContainerHeight = e.target.parentNode.offsetHeight;

    const buttonHeightWithMargin =
      e.target.parentNode.children[1].children[0].offsetHeight + 8;

    const numberOfButtonsInGroup =
      e.target.parentNode.children[1].children.length;

    const newHeight =
      groupContainerHeight + buttonHeightWithMargin * numberOfButtonsInGroup;
    e.target.parentNode.style.height = `${newHeight}px`;
  }

  function unfoldCurrentGroupFoldRest() {
    setFolded(false);

    props.foldGroups.forEach((foldGr) => {
      // close all groups but not current group
      if (foldGr.id !== props.id) {
        foldGr.f();
      }
    });
  }

  function foldThisGroup() {
    setFolded(true);
  }

  //This not ideal but works... it allows to fold all groups by another one group. It runs every render but it goes fast...
  props.addToFoldGroups(foldThisGroup, props.id);

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
