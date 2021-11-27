export default function Nav(props) {
  return (
    <nav className="nav-overlay hide-overlay" id={props.id}>
      <div className="nav-toolbar">
        <h2 className="section-title">
          <i className="fas fa-toolbox"></i>
          {props.title}
          <i className="fas fa-toolbox"></i>
        </h2>
        <div className="nav-tools-container">{props.children}</div>
      </div>
    </nav>
  );
}
