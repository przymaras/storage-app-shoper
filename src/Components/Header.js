export default function Header(props) {
  return (
    <header>
      <h1 className="header-title">
        <i className="fas fa-warehouse"></i>Bikel.pl storage App
      </h1>
      <div className="nav-toggle">
        <button className="nav-toggle--button btn" id="nav-modules-open-btn">
          <i className="fas fa-toolbox"></i>
          <i className="far fa-caret-square-down"></i>
        </button>

        <button className="nav-toggle--button btn" id="nav-tools-open-btn">
          <i className="far fa-caret-square-down"></i>
          <i className="fas fa-tools"></i>
        </button>
      </div>
    </header>
  );
}
