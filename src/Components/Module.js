export default function Module(props) {
  return (
    <section className="module">
      <h2 className="section-title">
        <i className="fas fa-luggage-cart"></i>
        Nazwa modułu
        <i className="fas fa-luggage-cart"></i>
      </h2>
      <div className="search-form">
        <label className="search-label" htmlFor="search">
          Szukaj:
        </label>
        <input
          className="search-input"
          type="search"
          name="search"
          id="search"
          placeholder="Kod lub nazwa towaru..."
        />
      </div>
      <div className="module--container" id="module-container">
        <div className="module--row heading row-sticky">
          <div className="cell">
            <input type="checkbox" name="row-title" id="row-heading-checkbox" />
          </div>
          <div className="cell" id="">
            Nazwa
          </div>
          <div className="cell" id="">
            Jedn.
          </div>
          <div className="cell" id="">
            Stan
          </div>
          <div className="cell" id="">
            Zamówi&shy;one
          </div>
          <div className="cell" id="">
            Braku&shy;jące
          </div>
          <div className="cell" id="">
            Zapotrze&shy;bowanie
          </div>
          <div className="cell" id="">
            Cena
          </div>
          <div className="cell" id="">
            Kod
          </div>
          <div className="cell" id="">
            Dostawca
          </div>
          <div className="cell" id="">
            Kod u dostawcy
          </div>
          <div className="cell" id="">
            Typ
          </div>
          <div className="cell" id="">
            Grupa
          </div>
          <div className="cell" id="">
            Uwagi
          </div>
        </div>
      </div>
    </section>
  );
}
