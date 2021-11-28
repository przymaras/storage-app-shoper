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

  const dummyCells = [
    "cb",
    "KONWERTER USB - RS232 UART FT232RL FTDI",
    "szt.",
    "1000",
    "1000",
    "1000",
    "1000",
    "22,35",
    "10001",
    "TME Sp z o.o.",
    "CB-HFT6.4/1M-RD",
    "Surowiec",
    "MODUŁY",
    "Długi termin",
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

  function dummyRow() {
    return dummyCells.map((cell) => {
      if (cell === "cb") {
        return <Cell key={cell} type="checkbox" name={cell} id={cell} />;
      } else {
        return (
          <Cell key={Math.floor(Math.random() * 1000000)} name={cell} id={cell}>
            {cell}
          </Cell>
        );
      }
    });
  }

  function dummyRows() {
    let rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push(<Row key={i}>{dummyRow()}</Row>);
    }
    return rows;
  }

  return (
    <>
      <Row heading={true}>{headingRow()}</Row>
      {dummyRows()}
    </>
  );
}
