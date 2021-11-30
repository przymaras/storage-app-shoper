import Row from "./Row";
import Cell from "./RowCell";
import { useState, useEffect } from "react";

export default function OrdersSales(props) {
  const [ordersAvailable, setOrdersAvailable] = useState(false);
  const [orders, setOrders] = useState({});

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

  return <>{ordersAvailable ? ordersRows(orders) : "Wczytuję zamowienia"}</>;
}
