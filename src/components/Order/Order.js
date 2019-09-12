import React from "react";
import { OrderStyled, OrderItemStyled } from "./OrderStyled";

const order = ({ salad, bacon, cheese, meat, price }) => {
  return (
    <OrderStyled>
      <p>
        Ingredients:
        <OrderItemStyled>Salad ({salad})</OrderItemStyled>
        <OrderItemStyled>Bacon({bacon})</OrderItemStyled>
        <OrderItemStyled>Cheese({cheese})</OrderItemStyled>
        <OrderItemStyled>Meat({meat})</OrderItemStyled>
      </p>
      <p>
        Price: <strong>{price}$</strong>
      </p>
    </OrderStyled>
  );
};

export default order;
