export default function SearchBar(props) {
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
      />
    </div>
  );
}
