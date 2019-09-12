import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

class Checkout extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };

  componentDidMount() {}

  checkoutCancelled = () => {
    this.props.history.goBack();
  };

  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-infor");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.burger.ingredients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
        />
        <Route
          path={`${this.props.match.path}/contact-infor`}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  null
)(Checkout);
