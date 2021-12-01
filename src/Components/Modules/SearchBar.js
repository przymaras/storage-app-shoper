import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    props.externalHandleSearchValueChange(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
