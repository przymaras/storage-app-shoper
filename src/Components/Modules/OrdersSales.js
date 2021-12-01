import Row from "./Row";
import Cell from "./RowCell";
import { useState, useEffect } from "react";

import SearchBar from "./SearchBar";

export default function OrdersSales(props) {
  const [ordersAvailable, setOrdersAvailable] = useState(false);
  const [orders, setOrders] = useState({});
  const setActiveTools = props.setActiveTools;

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
  useEffect(() => {
    setActiveTools(tools);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function orderRowCells(o) {
    const cellsArray = [];
    cellsArray.push(
      <Cell
        type="checkbox"
        name={`${o.order_id}_cb`}
        id={`${o.order_id}_cb`}
        key={`${o.order_id}_cb`}
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
      <SearchBar placeholder="Kod lub nazwa towaru..." />
      <div className="rows-container">
        {ordersAvailable ? ordersRows(orders) : "Wczytuję zamowienia"}
      </div>
    </>
  );
}

// endPointUrl = `order-products?filters={"order_id":"${d.list[0].order_id}"}`;
//         url = `${apiUrl}${endPointUrl}`;
//         fetch(url)
//           .then((res) => {
//             return res.json();
//           })
//           .then((d) => {
//             setOrderProducts(d.list);
//           })
