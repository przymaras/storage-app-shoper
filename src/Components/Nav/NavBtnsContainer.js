export default function NavBtnsContainer(props) {
  return (
    <div className={`nav-buttons ${!props.overflow ? "no-overflow" : null}`}>
      {props.children}
    </div>
  );
}
