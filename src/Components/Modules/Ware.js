import { useParams, useNavigate } from "react-router-dom";

function Ware(props) {
  const params = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="ware-container">
      <form onSubmit={handleSubmit}>
        <label>Kod towaru:</label>
        <input type="text" value={params.id} />
      </form>
      <button
        onClick={() => {
          if (
            window.confirm(
              "Stracisz wszystkie wprowazone zmiany - czy napewno?"
            )
          ) {
            navigate("/module-wares");
          }
        }}
      >
        Powrót
      </button>
    </div>
  );
}

export default Ware;
