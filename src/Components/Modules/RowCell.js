import { memo } from "react/cjs/react.development";

function Cell(props) {
  return props.type === "checkbox" ? (
    <div className="cell">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        checked={props.checked}
        onChange={() => props.handleClick(props.id)}
      />
    </div>
  ) : (
    <div onClick={props.handleClick} className="cell" id={props.id}>
      {props.children}
    </div>
  );
}

export default memo(Cell);
