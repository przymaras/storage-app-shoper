export default function NavTools(props) {
  return (
    <>
      <div className="nav-buttons">
        <button className="nav-btn btn" id="nav-btn-tool1">
          <i className="fas fa-address-card"></i>
          <p>NARZĘDZIE 1</p>
        </button>
        <button className="nav-btn btn" id="nav-btn-tool2">
          <i className="fab fa-algolia"></i>NARZĘDZIE 2
        </button>
        <button className="nav-btn btn" id="nav-btn-tool3">
          <i className="fab fa-algolia"></i>NARZĘDZIE 3
        </button>
        <button className="nav-btn btn" id="nav-btn-tool4">
          <i className="fab fa-algolia"></i>NARZĘDZIE 4
        </button>
        <button className="nav-btn btn" id="nav-btn-tool5">
          <i className="fab fa-algolia"></i>NARZĘDZIE 5
        </button>
      </div>

      <div className="nav-filter-container">
        <form action="#" className="filter" id="filter">
          <div
            className="filter-options filter-options-folded"
            id="filter-options"
          >
            <div className="filter-opt chbox">
              <label htmlFor="arch">Archiwalne</label>
              <input type="checkbox" name="arch" id="arch-checkbox" />
            </div>
            <div className="filter-opt select">
              <label htmlFor="type">Typ:</label>
              <select name="type" id="type">
                <option value="wszystkie">Wszystkie</option>
                <option value="surowiec">Surowiec</option>
                <option value="produkt">Produkt</option>
              </select>
            </div>
            <div className="filter-opt select">
              <label htmlFor="group">Grupa:</label>
              <select name="group" id="group">
                <option value="wszystkie">Wszystkie</option>
                <option value="elektronika">Elektronika</option>
                <option value="Gotowe">Gotowe</option>
              </select>
            </div>
            <div className="filter-opt select">
              <label htmlFor="supplier">Dostawca:</label>
              <select name="supplier" id="supplier">
                <option value="wszystkie">Wszystkie</option>
                <option value="tme">TME Sp. z o.o.</option>
                <option value="piekarz">Piekarz s.j.</option>
              </select>
            </div>
          </div>
          <div className="filter-header">
            <button type="reset" className="filter-btn btn">
              <i className="fas fa-window-close"></i>
            </button>
            <button
              className="filter-options-toggle-btn btn"
              id="filter-options-toggle-btn"
            >
              <i className="fas fa-angle-double-up"></i>
              <i className="fas fa-filter"></i>
              Filtr
            </button>
            <button type="submit" className="filter-btn btn">
              <i className="fas fa-check-square"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
