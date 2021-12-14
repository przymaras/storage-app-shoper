import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import { useToggler } from "../../hooks/useToggler";
import PropTypes from "prop-types";

function NavFilter(props) {
  const [visible, toggleVisible] = useToggler(false);

  const setMainFilterState = props.setFilterState;

  const defaultFilterState = useRef({
    showArchive: false,
    type: "wszystkie",
    mag_group: "wszystkie",
    supplier: "wszystkie",
  });

  const [filterState, setFilterState] = useState({
    ...defaultFilterState.current,
  });

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFilterState((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMainFilterState(filterState);
    localStorage.setItem("filter_wares", JSON.stringify(filterState));
  }

  function handleReset(e) {
    setFilterState(defaultFilterState.current);
  }

  useEffect(() => {
    const filter =
      JSON.parse(localStorage.getItem("filter_wares")) ||
      defaultFilterState.current;
    setMainFilterState(filter);
    setFilterState(filter);
    return () => {
      localStorage.removeItem("filter_wares");
    };
  }, [setMainFilterState, defaultFilterState]);

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
            <label htmlFor="mag_group">Grupa:</label>
            <select
              onChange={handleChange}
              value={filterState.mag_group}
              name="mag_group"
              id="mag_group"
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
              <option value="TME Sp z o.o.">TME Sp. z o.o.</option>
              <option value="PIEKARZ">Piekarz s.j.</option>
            </select>
          </div>
        </div>
        <div className="filter-header">
          <button onClick={handleReset} type="reset" className="filter-btn btn">
            <FontAwesomeIcon icon="window-close" />
          </button>
          <button
            onClick={toggleVisible}
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

NavFilter.propTypes = {
  setFilterState: PropTypes.func.isRequired,
};

export default NavFilter;
