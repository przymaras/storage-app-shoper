import PropTypes from "prop-types";

function NavBtnsContainer(props) {
  return (
    <div className={`nav-buttons ${!props.overflow ? "no-overflow" : null}`}>
      {props.children}
    </div>
  );
}

NavBtnsContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

export default NavBtnsContainer;

// {props.children.map((child) => {
//   if (child.props) {
//     return {
//       ...child,
//       props: { ...child.props, foldGroups: props.foldGroups },
//     };
//   } else {
//     return child;
//   }
