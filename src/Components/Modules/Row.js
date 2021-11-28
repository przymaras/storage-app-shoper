export default function Row(props) {
  return (
    <div
      className={`module--row ${props.heading ? "heading row-sticky" : null}`}
    >
      {props.children}
    </div>
  );
}
