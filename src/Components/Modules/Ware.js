import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Ware(props) {
  const params = useParams();
  const navigate = useNavigate();

  const [dataAvailable, setDataAvailable] = useState(false);
  const [info, setInfo] = useState("Ładuję dane ...");
  const [wareData, setWareData] = useState({});

  useEffect(() => {
    async function getData(url) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
    const url = `http://localhost:3030/wares/${params.id}`;
    getData(url)
      .then((data) => {
        setDataAvailable(true);
        setWareData(...data);
      })
      .catch((e) => {
        setDataAvailable(false);
        setInfo("Nie mogę załadować danych :(");
        console.error("Can't load data...");
      });
  }, [params.id]);

  function handleSubmit(e) {
    e.preventDefault();

    //POST request with body equal on data in JSON format
    fetch("http://localhost:3030/wares", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wareData),
    })
      .then((response) => response.ok)
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log("Success:", data);
        navigate("/module-wares/edit/ok");
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setWareData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return dataAvailable ? (
    <>
      <h2>Edycja towaru</h2>
      <form onSubmit={handleSubmit} className="ware">
        <label>Kod:</label>
        <input type="text" name="id" disabled={true} value={wareData.id} />
        <label>Nazwa:</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={wareData.name}
        />
        <label>Jednostka:</label>
        <input
          onChange={handleChange}
          type="text"
          name="unit"
          value={wareData.unit}
        />
        <label>Typ:</label>
        <input
          onChange={handleChange}
          type="text"
          name="type"
          value={wareData.type}
        />
        <label>Grupa:</label>
        <input
          onChange={handleChange}
          type="text"
          name="mag_group"
          value={wareData.mag_group}
        />
        <label>Dostawca:</label>
        <input
          onChange={handleChange}
          type="text"
          name="supplier"
          value={wareData.supplier}
        />
        <label>Kod u dostawcy:</label>
        <input
          onChange={handleChange}
          type="text"
          name="supplier_code"
          value={wareData.supplier_code}
        />
        <label>Uwagi:</label>
        <input
          onChange={handleChange}
          type="text"
          name="description"
          value={wareData.description}
        />
        <label>Shoper ID:</label>
        <input
          onChange={handleChange}
          type="text"
          name="shoper_id"
          value={wareData.shoper_id}
        />
        <button className="btn nav-btn modal-btn">ZAPISZ</button>
      </form>
      <button
        onClick={() => {
          if (
            window.confirm(
              "Stracisz wszystkie niezapisane zmiany - czy napewno?"
            )
          ) {
            navigate("/module-wares");
          }
        }}
        className="btn nav-btn modal-btn"
      >
        POWRÓT
      </button>
    </>
  ) : (
    info
  );
}

export default Ware;
