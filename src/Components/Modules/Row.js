export default function Row(props) {
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
