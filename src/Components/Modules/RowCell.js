export default function Cell(props) {
  return props.type === "checkbox" ? (
    <div className="cell">
      <input type="checkbox" name={props.name} id={props.id} />
    </div>
  ) : (
    <div className="cell" id={props.id}>
      {props.children}
    </div>
  );
}
