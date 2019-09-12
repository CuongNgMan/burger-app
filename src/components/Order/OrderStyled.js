import styled from "styled-components";

const OrderStyled = styled.div`
  width: 80%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;

const OrderItemStyled = styled.span`
  textDecoration: capitalize;
  border: 1px solid #ccc;
  margin: 0 10px;
  padding: 0 10px;
`;

export { OrderItemStyled, OrderStyled };
