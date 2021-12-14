import Row from "./Row";
import Cell from "./RowCell";
import { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";

import { commonSelectedItemsChange } from "../../tools/commonTools";

function OrdersSales(props) {
  const [ordersAvailable, setOrdersAvailable] = useState(false);
  const [orders, setOrders] = useState({});

  const setActiveTools = props.setActiveTools;

  useEffect(() => {
    const tools = [
      {
        id: "tool-ordersSales1",
        name: "NARZĘDZIE 1",
        icon: ["fab", "algolia"],
      },
      {
        id: "tool-ordersSales2",
        name: "NARZĘDZIE 2",
        icon: ["fab", "algolia"],
      },
    ];
    setActiveTools(tools);
    return () => {
      setActiveTools([]);
    };
  }, [setActiveTools]);

  useEffect(() => {
    const apiUrl = `http://localhost:3030/api?endPoint=`;

    let endPointUrl = `orders?order=order_id`;

    let url = `${apiUrl}${endPointUrl}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setOrders(d.list);
        setOrdersAvailable(true);
      });
  }, []);

  const handleSearchValueChange = (value) => {
    //use useCallback here when needed
    if (value !== "") {
      console.log(`orders search: ${value}`);
    }
  };

  function localSelectedItemsChange(id) {
    commonSelectedItemsChange(
      id,
      "to be updated",
      orders,
      "order_id",
      props.selectedItems,
      props.setSelectedItems
    );
  }

  function orderRowCells(o) {
    const cellsArray = [];
    cellsArray.push(
      <Cell
        type="checkbox"
        name={`${o.order_id}_cb`}
        id={`${o.order_id}`}
        key={`${o.order_id}_cb`}
        handleClick={localSelectedItemsChange}
      />
    );
    cellsArray.push(
      <Cell key={`${o.order_id}_id`} id={`${o.order_id}_id`}>
        {o.order_id}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${o.order_id}_fname`} id={`${o.order_id}_fname`}>
        {o.billing_address.firstname}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${o.order_id}_lname`} id={`${o.order_id}_lname`}>
        {o.billing_address.lastname}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${o.order_id}_date`} id={`${o.order_id}_date`}>
        {o.date}
      </Cell>
    );
    cellsArray.push(
      <Cell key={`${o.order_id}_sum`} id={`${o.order_id}_sum`}>
        {o.sum}
      </Cell>
    );

    return cellsArray;
  }

  function ordersRows(o) {
    let rows = [];
    for (let order of o) {
      rows.push(
        <Row key={order.order_id} rowClass="module-ordersSales-row">
          {orderRowCells(order)}
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
        {ordersAvailable ? ordersRows(orders) : "Wczytuję zamowienia"}
      </div>
    </>
  );
}

OrdersSales.propTypes = {
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

export default memo(OrdersSales);

// endPointUrl = `order-products?filters={"order_id":"${d.list[0].order_id}"}`;
//         url = `${apiUrl}${endPointUrl}`;
//         fetch(url)
//           .then((res) => {
//             return res.json();
//           })
//           .then((d) => {
//             setOrderProducts(d.list);
//           })
