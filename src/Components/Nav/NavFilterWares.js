import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function NavFilter(props) {
  const [visible, setVisible] = useState(false);

  const defaultFilterState = {
    showArchive: false,
    type: "wszystkie",
    group: "wszystkie",
    supplier: "wszystkie",
  };

  const [filterState, setFilterState] = useState(defaultFilterState);

  function handleClick(e) {
    setVisible(!visible);
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFilterState((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Filter Submit");
    console.log(filterState);
    props.setFilterState(filterState);
  }

  function handleReset(e) {
    setFilterState(defaultFilterState);
  }

  useEffect(() => {
    props.setFilterState(filterState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <label htmlFor="showArchive">Archiwalne</label>
            <input
              onChange={handleChange}
              checked={filterState.showArchive}
              type="checkbox"
              name="showArchive"
              id="arch-checkbox"
            />
          </div>
          <div className="filter-opt select">
            <label htmlFor="type">Typ:</label>
            <select
              onChange={handleChange}
              value={filterState.type}
              name="type"
              id="type"
            >
              <option value="wszystkie">Wszystkie</option>
              <option value="surowiec">Surowiec</option>
              <option value="produkt">Produkt</option>
            </select>
          </div>
          <div className="filter-opt select">
            <label htmlFor="group">Grupa:</label>
            <select
              onChange={handleChange}
              value={filterState.group}
              name="group"
              id="group"
            >
              <option value="wszystkie">Wszystkie</option>
              <option value="elektronika">Elektronika</option>
              <option value="Gotowe">Gotowe</option>
            </select>
          </div>
          <div className="filter-opt select">
            <label htmlFor="supplier">Dostawca:</label>
            <select
              onChange={handleChange}
              value={filterState.supplier}
              name="supplier"
              id="supplier"
            >
              <option value="wszystkie">Wszystkie</option>
              <option value="tme">TME Sp. z o.o.</option>
              <option value="piekarz">Piekarz s.j.</option>
            </select>
          </div>
        </div>
        <div className="filter-header">
          <button onClick={handleReset} type="reset" className="filter-btn btn">
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
