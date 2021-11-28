import Row from "./Row";
import Cell from "./RowCell";

export default function Products(props) {
  const headingCells = [
    "cb",
    "Nazwa",
    "Jedn.",
    "Stan",
    "Zamówi\xADone",
    "Braku\xADjące",
    "Zapotrze\xADbowanie",
    "Cena",
    "Kod",
    "Dostawca",
    "Kod u dostawcy",
    "Typ",
    "Grupa",
    "Uwagi",
  ];

  function headingRow() {
    return headingCells.map((cell) => {
      if (cell === "cb") {
        return <Cell key={cell} type="checkbox" name={cell} id={cell} />;
      } else {
        return (
          <Cell key={cell} name={cell} id={cell}>
            {cell}
          </Cell>
        );
      }
    });
  }

  return <Row heading={true}>{headingRow()}</Row>;
}
