import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import PropTypes from "prop-types";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const parentHandleChange = props.parentHandleChange;

  function handleChange(value) {
    setSearchValue(value);
    parentHandleChange(value);
  }
  // useEffect(() => {
  //   parentHandleChange(searchValue);
  // }, [searchValue, parentHandleChange]);
  useEffect(() => {
    const savedSearchValue = localStorage.getItem("search_value");
    if (savedSearchValue.length > 0) {
      setSearchValue(savedSearchValue);
    }
    return () => {
      localStorage.setItem("search_value", "");
    };
  }, []);

  return (
    <div className="search-form">
      <label className="search-label" htmlFor="search">
        Szukaj:
      </label>
      <input
        className="search-input"
        type="search"
        name="search"
        id="search"
        placeholder={props.placeholder}
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

SearchBar.defaultProps = {
  placeholder: "Wyszukaj...",
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  parentHandleChange: PropTypes.func.isRequired,
};

export default SearchBar;
