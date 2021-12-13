import PropTypes from "prop-types";

function Row(props) {
  return (
    <div
      className={`module--row${props.heading ? " heading row-sticky" : ""} ${
        props.rowClass
      }`}
    >
      {props.children}
    </div>
  );
}

Row.propTypes = {
  rowClass: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

export default Row;
