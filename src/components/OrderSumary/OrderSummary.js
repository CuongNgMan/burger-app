import React from "react";
import { OrderSummaryHeader, OrderSummaryList } from "./OrderSummaryStyled";
import Button from "../UI/Button/Button";

class OrderSummary extends React.Component {
  componentDidUpdate() {}

  render() {
    const ingredientsSumary = Object.keys(this.props.ingredients).map(
      ingKey => {
        return (
          <li key={ingKey}>
            <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:{" "}
            {this.props.ingredients[ingKey]}
          </li>
        );
      }
    );

    const style = {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "1.17em",
      margin: "10px 0px 5px 0px"
    };

    return (
      <React.Fragment>
        <OrderSummaryHeader style={{ margin: "0px", textAlign: "left" }}>
          Your order:
        </OrderSummaryHeader>
        <OrderSummaryList
          style={{ display: "inline-block", margin: "0px", textAlign: "left" }}
        >
          {ingredientsSumary}
        </OrderSummaryList>
        <p style={style}>
          Your burger cost:{" "}
          <span style={{ color: "red" }}>
            {this.props.totalPrice.toFixed(2)}$
          </span>
        </p>
        <p style={style}>Do you want to check out?</p>
        <Button btnColor="CONTINUE" clicked={this.props.purchaseContinue}>
          Continue
        </Button>
        <Button btnColor="CANCEL" clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
