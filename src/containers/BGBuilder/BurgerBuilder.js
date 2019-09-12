import React, { Component } from "react";
import axios from "../../axios-order";

import Burger from "../../components/Burger/Burger";
import BuilderControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSumary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import errorHandlerHOC from "../../hoc/errorHandlerHOC";
import Aux from "../../hoc/Aulixilary";

import { addIngredient, removeIngredient, fetchIngredients } from "../../store/actions/actions";
import { connect } from "react-redux";

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 2.0,
    isBurgerPurchaseable: false,
    isPurchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    this.props.fetchIngredients();
  }

  isBurgerPurchasable(ingredients) {
    const totalIngredients = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((acc, currVal) => {
        return acc + currVal;
      }, 0);
    return totalIngredients > 0;
  }

  purchasingHandler = () => {
    this.setState(prevState => {
      return {
        isPurchasing: true
      };
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      isPurchasing: false
    });
  };

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let ing in this.props.ingredients) {
      queryParams.push(
        `${encodeURIComponent(ing)}=${encodeURIComponent(this.props.ingredients[ing])}`
      );
    }
    // queryParams.push(`price=${this.props.totalPrice}`);

    this.props.history.push({
      pathname: "/checkout"
      // search: `?${queryString}`
    });
  };

  render() {
    const disabled = {
      ...this.props.ingredients
    };
    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.isFetchingFailure ? (
      <p style={{ margin: "100px" }}>Burger cannot be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.isFetching) {
      orderSummary = <Spinner />;
    }

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuilderControls
            added={this.props.addIngredient}
            removed={this.props.removeIngredient}
            disabled={disabled}
            price={this.props.totalPrice}
            purchaseable={this.isBurgerPurchasable(this.props.ingredients)}
            purchasing={this.purchasingHandler}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          totalPrice={this.props.totalPrice}
        />
      );
    }

    return (
      <React.Fragment>
        <Modal show={this.state.isPurchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

const mapState = state => {
  console.log("map state");
  const { ingredients, totalPrice } = state.burger;
  console.log(ingredients);
  console.log(totalPrice);
  return {
    ...state.burger
  };
};

export default connect(
  mapState,
  {
    addIngredient,
    removeIngredient,
    fetchIngredients
  }
)(errorHandlerHOC(BurgerBuilder, axios));
