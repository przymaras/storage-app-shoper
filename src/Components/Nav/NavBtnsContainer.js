export default function NavBtnsContainer(props) {
  return (
    <div className={`nav-buttons ${!props.overflow ? "no-overflow" : null}`}>
      {props.children}
    </div>
  );
}

// {props.children.map((child) => {
//   if (child.props) {
//     return {
//       ...child,
//       props: { ...child.props, foldGroups: props.foldGroups },
//     };
//   } else {
//     return child;
//   }
