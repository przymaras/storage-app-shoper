import { memo } from "react/cjs/react.development";
import PropTypes from "prop-types";

function RowCell(props) {
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

RowCell.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool,
};

export default memo(RowCell);
