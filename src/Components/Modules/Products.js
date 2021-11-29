import Row from "./Row";
import Cell from "./RowCell";
import { useState, useEffect } from "react";

export default function Products(props) {
  const [dataAvailable, setDataAvailable] = useState(false);
  const [info, setInfo] = useState("Ładuję dane ...");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3030/products");
      const data = await res.json();
      return data;
    }
    getData()
      .then((data) => {
        const prods = data.map((product) => {
          return {
            ...product,
            ordered: 1000,
            lacking: 1000,
            needed: 1000,
          };
        });
        setDataAvailable(true);
        setProducts(prods);
      })
      .catch((e) => {
        setInfo("Nie mogę załadować danych :(");
        console.log("Can't load data...");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(e) {
    sortProducts(e.target.id);
  }

  function sortProducts(sortBy) {
    let newProducts = [...products];
    if (typeof newProducts[0][sortBy] === "string") {
      newProducts.sort((a, b) => {
        if (a[sortBy].toUpperCase() < b[sortBy].toUpperCase()) return -1;
        if (a[sortBy].toUpperCase() > b[sortBy].toUpperCase()) return 1;

        return 0;
      });
    } else {
      newProducts.sort((a, b) => {
        return a[sortBy] - b[sortBy];
      });
    }

    setProducts(newProducts);
  }

  const headingCells = [
    { id: "cb", name: "cb" },
    { id: "name", name: "Nazwa" },
    { id: "unit", name: "Jedn." },
    { id: "quantity", name: "Stan" },
    { id: "ordered", name: "Zamówi\xADone" },
    { id: "lacking", name: "Braku\xADjące" },
    { id: "needed", name: "Zapotrze\xADbowanie" },
    { id: "price", name: "Cena" },
    { id: "product_id", name: "Kod" },
    { id: "supplier", name: "Dostawca" },
    { id: "supplier_code", name: "Kod u dostawcy" },
    { id: "type", name: "Typ" },
    { id: "mag_group", name: "Grupa" },
    { id: "description", name: "Uwagi" },
  ];

  function headingRow() {
    return headingCells.map((cell) => {
      if (cell.id === "cb") {
        return (
          <Cell
            onClick={handleClick}
            key={`heading_${cell.id}`}
            type="checkbox"
            name={cell.name}
            id={cell.id}
          />
        );
      } else {
        return (
          <Cell
            onClick={handleClick}
            key={`heading_${cell.id}`}
            name={cell.name}
            id={cell.id}
          >
            {cell.name}
          </Cell>
        );
      }
    });
  }

  function productRow(p) {
    const cellsArray = [];
    cellsArray.push(
      <Cell
        type="checkbox"
        name={`${p.product_id}_cb`}
        id={`${p.product_id}_cb`}
        key={`${p.product_id}_cb`}
      />
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_name`} id={`${p.product_id}_name`}>
        {p.name}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_unit`} id={`${p.product_id}_unit`}>
        {p.unit}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_quantity`} id={`${p.product_id}_quantity`}>
        {p.quantity}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_ordered`} id={`${p.product_id}_ordered`}>
        {p.ordered}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_lacking`} id={`${p.product_id}_lacking`}>
        {p.lacking}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_needed`} id={`${p.product_id}_needed`}>
        {p.needed}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_price`} id={`${p.product_id}_price`}>
        {p.price.toFixed(2)}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_id`} id={`${p.product_id}_id`}>
        {p.product_id}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_supplier`} id={`${p.product_id}_supplier`}>
        {p.supplier}
      </Cell>
    );
    cellsArray.push(
      <Cell
        key={`${p.product_id}_supplier_code`}
        id={`${p.product_id}_supplier_code`}
      >
        {p.supplier_code ? p.supplier_code : "---"}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_type`} id={`${p.product_id}_type`}>
        {p.type}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${p.product_id}_mag_group`} id={`${p.product_id}_mag_group`}>
        {p.mag_group}
      </Cell>
    );
    cellsArray.push(
      <Cell
        key={`${p.product_id}_description`}
        id={`${p.product_id}_description`}
      >
        {p.description ? p.description : "---"}
      </Cell>
    );

    return cellsArray;
  }

  function productRows(p) {
    let rows = [];
    for (let product of products) {
      rows.push(<Row key={product.product_id}>{productRow(product)}</Row>);
    }
    return rows;
  }

  return (
    <>
      <Row heading={true}>{headingRow()}</Row>
      {dataAvailable ? productRows(products) : info}
    </>
  );
}
