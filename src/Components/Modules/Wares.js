import Row from "./Row";
import RowCell from "./RowCell";
import { useState, useEffect, memo, useRef, useCallback } from "react";

import SearchBar from "./SearchBar";

import { commonSelectedItemsChange } from "../../tools/commonTools";
import PropTypes from "prop-types";

function Wares(props) {
  const [dataAvailable, setDataAvailable] = useState(false);
  const [info, setInfo] = useState("Ładuję dane ...");
  const [waresToDisplay, setWaresToDisplay] = useState([]);
  // const [allWares, setAllWares] = useState([]);
  const allWares = useRef([]);

  const setActiveTools = props.setActiveTools;
  const setSelectedItems = props.setSelectedItems;

  const orderOfCells = [
    { id: "name" },
    { id: "unit" },
    { id: "quantity" },
    { id: "needed" },
    { id: "lacking" },
    { id: "ordered" },
    { id: "price" },
    { id: "id" },
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
    ordered: "W dost\xADawie",
    lacking: "Braku\xADjące",
    needed: "Zapotrze\xADbowanie",
    price: "Cena",
    id: "Kod",
    supplier: "Dostawca",
    supplier_code: "Kod u dostawcy",
    type: "Typ",
    mag_group: "Grupa",
    description: "Uwagi",
  };

  useEffect(() => {
    const tools = [
      {
        id: "tool-wares-add-new",
        name: "DODAJ NOWY",
        icon: ["fab", "algolia"],
      },
      {
        id: "tool-wares-edit",
        name: "EDYTUJ",
        icon: ["fab", "algolia"],
      },
      {
        id: "tool-wares-clone",
        name: "KLONUJ",
        icon: ["fab", "algolia"],
      },
      {
        id: "tool-wares-release",
        name: "WYDAJ",
        icon: ["fab", "algolia"],
      },
      {
        id: "tool-wares-combine",
        name: "KOMPLETUJ",
        icon: ["fab", "algolia"],
      },
      {
        id: "tool-wares-uncombine",
        name: "DEKOMPLETUJ",
        icon: ["fab", "algolia"],
      },
      {
        id: "tool-wares-delete",
        name: "USUŃ",
        icon: ["fab", "algolia"],
      },
    ];

    setActiveTools(tools);

    return () => {
      setActiveTools([]);
    };
  }, [setActiveTools]);

  useEffect(() => {
    async function getData(url) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
    if (props.filterState.mag_group) {
      const url = `http://localhost:3030/wares?mag_group=${props.filterState.mag_group}&supplier=${props.filterState.supplier}&type=${props.filterState.type}&showArchive=${props.filterState.showArchive}`;
      getData(url)
        .then((data) => {
          //Temporarly fill with dummy data
          const wares = data.map((ware) => {
            return {
              ...ware,
              ordered: 1000,
              lacking: 1000,
              needed: 1000,
            };
          });
          setDataAvailable(true);
          // setAllWares(wares);
          allWares.current = [...wares];
          setWaresToDisplay(wares);
        })
        .catch((e) => {
          setDataAvailable(false);
          setInfo("Nie mogę załadować danych :(");
          console.error("Can't load data...");
        });
    }
  }, [
    props.filterState.mag_group,
    props.filterState.supplier,
    props.filterState.type,
    props.filterState.showArchive,
  ]);

  const handleSearchValueChange = useCallback(
    (value) => {
      let newWares = [...allWares.current];

      try {
        newWares = newWares.filter((ware) => {
          const nameIncludesValue = ware.name
            .toUpperCase()
            .includes(value.toUpperCase());

          const idIncludesValue = ware.id.toString().includes(value);

          if (nameIncludesValue || idIncludesValue) return true;
          else return false;
        });
        setWaresToDisplay(newWares);
      } catch (e) {
        console.error("Error in search conditions or data structure.");
      }
      setSelectedItems([]);
    },
    [allWares, setSelectedItems]
  );

  function localSelectedItemsChange(id) {
    commonSelectedItemsChange(
      id,
      headingCells.id,
      waresToDisplay,
      "id",
      props.selectedItems,
      setSelectedItems
    );
  }

  function sortByColumn(e) {
    const sortBy = e.target.id;
    if (dataAvailable) {
      sortWares(allWares.current, setAllWares, sortBy);
      sortWares(waresToDisplay, setWaresToDisplay, sortBy);
    }
  }

  function setAllWares(ware) {
    allWares.current = [...ware];
  }

  function sortWares(wares, setNewWares, sortBy) {
    let newWares = [...wares];
    if (typeof newWares[0][sortBy] === "string") {
      newWares.sort((a, b) => {
        if (a[sortBy].toUpperCase() < b[sortBy].toUpperCase()) return -1;
        if (a[sortBy].toUpperCase() > b[sortBy].toUpperCase()) return 1;

        return 0;
      });
    } else {
      newWares.sort((a, b) => {
        return a[sortBy] - b[sortBy];
      });
    }

    setNewWares(newWares);
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
          key={`${cells.id}_${cell.id}`}
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
        handleClick={localSelectedItemsChange}
        key={`${cells.id}_cb`}
        type="checkbox"
        name={cells.id}
        id={cells.id}
        checked={props.selectedItems.includes(cells.id)}
      />
    );

    return sortedCells;
  }

  function renderWaresRows(w) {
    let rows = [];
    for (let ware of w) {
      rows.push(
        <Row key={ware.id} rowClass="module-wares-row">
          {renderRowCells(ware)}
        </Row>
      );
    }
    return rows;
  }

  return (
    <>
      <SearchBar
        placeholder="Kod lub nazwa towaru..."
        parentHandleChange={handleSearchValueChange}
      />
      <div className="rows-container">
        <Row heading={true} rowClass="module-wares-row">
          {renderRowCells(headingCells)}
        </Row>
        {dataAvailable ? renderWaresRows(waresToDisplay) : info}
      </div>
    </>
  );
}

Wares.propTypes = {
  setActiveTools: PropTypes.func.isRequired,
  filterState: PropTypes.exact({
    showArchive: PropTypes.bool,
    type: PropTypes.string,
    mag_group: PropTypes.string,
    supplier: PropTypes.string,
  }).isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  selectedItems: PropTypes.array.isRequired,
};

export default memo(Wares);
