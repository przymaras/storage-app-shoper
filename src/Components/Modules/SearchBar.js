import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const parentHandleChange = props.parentHandleChange;

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    parentHandleChange(searchValue);
  }, [searchValue, parentHandleChange]);

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
        onChange={handleChange}
      />
    </div>
  );
}
