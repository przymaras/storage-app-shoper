export default function NavModules(props) {
  return (
    <>
      <div className="nav-buttons">
        <div
          className="nav-buttons-group buttons-group-folded"
          id="buttons-group-1"
        >
          <h2 className="group-title">
            <i className="fas fa-angle-double-down"></i>
            <i className="fas fa-box"></i>
            GRUPA 1
          </h2>
          <div className="nav-buttons no-overflow">
            <button className="nav-btn grouped btn" id="nav-btn-module1">
              <i className="fab fa-algolia"></i>MODUŁ 1
            </button>
            <button className="nav-btn grouped btn" id="nav-btn-module2">
              <i className="fab fa-algolia"></i>MODUŁ 2
            </button>
            <button className="nav-btn grouped btn" id="nav-btn-module3">
              <i className="fab fa-algolia"></i>MODUŁ 3
            </button>
            <button className="nav-btn grouped btn" id="nav-btn-module3">
              <i className="fab fa-algolia"></i>MODUŁ 3
            </button>
            <button className="nav-btn grouped btn" id="nav-btn-module3">
              <i className="fab fa-algolia"></i>MODUŁ 3
            </button>
            <button className="nav-btn grouped btn" id="nav-btn-module3">
              <i className="fab fa-algolia"></i>MODUŁ 3
            </button>
            <button className="nav-btn grouped btn" id="nav-btn-module3">
              <i className="fab fa-algolia"></i>MODUŁ 3
            </button>
            <button className="nav-btn grouped btn" id="nav-btn-module3">
              <i className="fab fa-algolia"></i>MODUŁ 3
            </button>
          </div>
        </div>

        <button className="nav-btn btn" id="nav-btn-module3">
          <i className="fab fa-algolia"></i>MODUŁ 3
        </button>
        <button className="nav-btn btn" id="nav-btn-module4">
          <i className="fab fa-algolia"></i>MODUŁ 4
        </button>

        <div
          className="nav-buttons-group buttons-group-folded"
          id="buttons-group-2"
        >
          <h2 className="group-title">
            <i className="fas fa-angle-double-down"></i>
            <i className="fas fa-box"></i>
            GRUPA 2
          </h2>
          <div className="nav-buttons no-overflow">
            <button className="nav-btn grouped btn" id="nav-btn-module5">
              <i className="fab fa-algolia"></i>MODUŁ 5
            </button>
            <button className="nav-btn grouped btn" id="nav-btn-module6">
              <i className="fab fa-algolia"></i>MODUŁ 6
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
