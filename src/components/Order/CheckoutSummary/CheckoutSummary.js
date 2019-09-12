import React from "react";
import CheckoutSummaryStyled from "./CheckoutSummaryStyled";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = props => {
  return (
    <CheckoutSummaryStyled>
      <h1 style={{ margin: "20% 0 0 0" }}>Enjoy your meal!</h1>
      <div style={{ width: "100%", height: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <div>
        <Button btnColor="CONTINUE" clicked={props.checkoutContinued}>
          CONTINUE
        </Button>
        <Button btnColor="CANCEL" clicked={props.checkoutCancelled}>
          CANCEL
        </Button>
      </div>
    </CheckoutSummaryStyled>
  );
};

export default checkoutSummary;
