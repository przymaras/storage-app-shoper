import Row from "./Row";
import RowCell from "./RowCell";
import { useState, useEffect, memo, useRef } from "react";

import SearchBar from "./SearchBar";

function Products(props) {
  const [dataAvailable, setDataAvailable] = useState(false);
  const [info, setInfo] = useState("Ładuję dane ...");
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  // const [allProducts, setAllProducts] = useState([]);
  const allProducts = useRef([]);

  const tools = [
    {
      id: "tool-wares1",
      name: "NARZĘDZIE 1",
      icon: ["fab", "algolia"],
    },
    {
      id: "tool-wares2",
      name: "NARZĘDZIE 2",
      icon: ["fab", "algolia"],
    },
  ];

  const orderOfCells = [
    { id: "name" },
    { id: "unit" },
    { id: "quantity" },
    { id: "ordered" },
    { id: "lacking" },
    { id: "needed" },
    { id: "price" },
    { id: "product_id" },
    { id: "supplier" },
    { id: "supplier_code" },
    { id: "type" },
    { id: "mag_group" },
    { id: "description" },
  ];

  const headingCells = {
    heading: true,
    name: "Nazwa",
    unit: "Jedn.",
    quantity: "Stan",
    ordered: "Zamówi\xADone",
    lacking: "Braku\xADjące",
    needed: "Zapotrze\xADbowanie",
    price: "Cena",
    product_id: "Kod",
    supplier: "Dostawca",
    supplier_code: "Kod u dostawcy",
    type: "Typ",
    mag_group: "Grupa",
    description: "Uwagi",
  };

  useEffect(() => {
    props.setActiveTools(tools);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function getData(url) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
    if (props.filterState.mag_group) {
      const url = `http://localhost:3030/products?mag_group=${props.filterState.mag_group}&supplier=${props.filterState.supplier}&type=${props.filterState.type}&showArchive=${props.filterState.showArchive}`;
      getData(url)
        .then((data) => {
          //Temporarly fill with dummy data
          const prods = data.map((product) => {
            return {
              ...product,
              ordered: 1000,
              lacking: 1000,
              needed: 1000,
            };
          });
          setDataAvailable(true);
          // setAllProducts(prods);
          allProducts.current = [...prods];
          setProductsToDisplay(prods);
        })
        .catch((e) => {
          setDataAvailable(false);
          setInfo("Nie mogę załadować danych :(");
          console.log("Can't load data...");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.filterState.mag_group,
    props.filterState.supplier,
    props.filterState.type,
    props.filterState.showArchive,
  ]);

  function sortByColumn(e) {
    const sortBy = e.target.id;
    if (dataAvailable) {
      sortProducts(allProducts.current, setAllProducts, sortBy);
      sortProducts(productsToDisplay, setProductsToDisplay, sortBy);
    }
    console.log(props.filterState);
  }

  function handleSearchValueChange(value) {
    // console.log(`product search: ${value}`);
    // console.log(allProducts);
    let newProducts = [...allProducts.current];

    try {
      newProducts = newProducts.filter((product) => {
        const nameIncludesValue = product.name
          .toUpperCase()
          .includes(value.toUpperCase());

        const idIncludesValue = product.product_id.toString().includes(value);

        if (nameIncludesValue || idIncludesValue) return true;
        else return false;
      });
      setProductsToDisplay(newProducts);
    } catch (e) {
      console.error("Error in search conditions or data structure.");
    }
  }

  function setAllProducts(prod) {
    allProducts.current = [...prod];
  }

  function sortProducts(products, setNewProducts, sortBy) {
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

    setNewProducts(newProducts);
  }

  function renderRowCells(cells) {
    let unsortedCells = [];

    //Convert object to array of key/value pairs objects
    for (const [key, value] of Object.entries(cells)) {
      unsortedCells.push({ id: key, value: value });
    }

    //Sort array according to orderOfCells order by ID. It destroys newCell array and removes cells that are not included in orderOfCells array
    let sortedCells = [];
    orderOfCells.forEach((hCell) => {
      let found = false;
      unsortedCells = unsortedCells.filter((uCell) => {
        if (!found && uCell.id === hCell.id) {
          sortedCells.push(uCell);
          found = true;
          return false;
        } else return true;
      });
    });

    //Fill empty cells with "---"
    sortedCells = sortedCells.map((sCell) => {
      if (sCell.value === "") return { ...sCell, value: "---" };
      else return sCell;
    });

    //Render cells in order of orderOfCells
    sortedCells = sortedCells.map((cell) => {
      return (
        <RowCell
          handleClick={cells.heading ? sortByColumn : null}
          key={`${cells.product_id}_${cell.id}`}
          name={cell.id}
          id={cell.id}
        >
          {cell.value}
        </RowCell>
      );
    });

    //Add checkbox as first cell
    sortedCells.unshift(
      <RowCell
        key={`${cells.product_id}_cb`}
        type="checkbox"
        name={cells.product_id}
        id={cells.product_id}
      />
    );

    return sortedCells;
  }

  function renderProductsRows(p) {
    let rows = [];
    for (let product of p) {
      rows.push(
        <Row key={product.product_id} rowClass="module-wares-row">
          {renderRowCells(product)}
        </Row>
      );
    }
    return rows;
  }

  return (
    <>
      <SearchBar
        placeholder="Kod lub nazwa towaru..."
        externalHandleSearchValueChange={handleSearchValueChange}
      />
      <div className="rows-container">
        <Row heading={true} rowClass="module-wares-row">
          {renderRowCells(headingCells)}
        </Row>
        {dataAvailable ? renderProductsRows(productsToDisplay) : info}
      </div>
    </>
  );
}

export default memo(Products);
