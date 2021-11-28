import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBtnsContainer from "./NavBtnsContainer";
import { useState, useEffect } from "react";

export default function NavBtnsGroup(props) {
  const [folded, setFolded] = useState(true);

  function handleClick(e) {
    let ev = {};
    if (e.target.nodeName === "path") {
      // there are font awesome icons inside button and they causing nested e.target when clicked on icon or its area
      ev = { target: e.target.parentNode.parentNode };
    } else {
      ev = e;
    }

    if (folded) {
      unfoldCurrentGroupFoldRest();
      setButtonGroupsHeight(ev);
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

    const foldGroups = props.foldGroups;

    foldGroups.forEach((foldGr) => {
      // close all groups but not current group
      if (foldGr.id !== props.id) {
        foldGr.f();
      }
    });
  }

  function fold() {
    setFolded(true);
  }

  useEffect(() => {
    //pass fold function of each group to array in Main.js
    const foldGroup = props.foldGroup;
    foldGroup(fold, props.id);

    // can use folowing as comment (without quotes) to avoid error when using []
    // "eslint-disable-next-line react-hooks/exhaustive-deps"
  }, [props.foldGroup, props.id]);

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
