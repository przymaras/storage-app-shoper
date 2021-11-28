import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavFilter(props) {
  const [visible, setVisible] = useState(false);

  function handleClick(e) {
    setVisible(!visible);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Filter Submit");
  }

  return (
    <div className="nav-filter-container">
      <form onSubmit={handleSubmit} action="#" className="filter" id="filter">
        <div
          className={`filter-options ${
            visible ? null : "filter-options-folded"
          }`}
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
            <FontAwesomeIcon icon="window-close" />
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="filter-options-toggle-btn btn"
            id="filter-options-toggle-btn"
          >
            <FontAwesomeIcon icon="angle-double-up" />
            <FontAwesomeIcon icon="filter" />
            Filtr
          </button>
          <button type="submit" className="filter-btn btn">
            <FontAwesomeIcon icon="check-square" />
          </button>
        </div>
      </form>
    </div>
  );
}
