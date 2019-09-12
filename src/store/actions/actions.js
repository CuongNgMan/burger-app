import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

const INGREDIENT_PRICES = {
  salad: 0.3,
  meat: 1.3,
  cheese: 0.9,
  bacon: 1
};

function action(type, payload = {}) {
  return { type, ...payload };
}

export const fetchIngredients = () => {
  return dispatch => {
    dispatch(action(actionTypes.REQUEST_INGREDIENTS));
    axios
      .get("ingredients.json")
      .then(
        resp => {
          if (resp.status === 200 && resp.data) {
            return resp.data;
            // dispatch(action(actionTypes.RECEIVED_INGREDIENTS, resp.data));
          }
        },
        error => {
          return { errorMessage: error };
        }
      )
      .then(data => {
        if (!data.errorMessage) {
          dispatch(
            action(actionTypes.RECEIVED_INGREDIENTS, { ingredients: data })
          );
        } else {
          dispatch(
            action(actionTypes.REQUEST_INGREDIENTS_FAILURE, {
              error: data.errorMessage.message
            })
          );
        }
      });
  };
};

export const addIngredient = ingredientType =>
  action(actionTypes.ADD_INGREDIENT, {
    ingredientType: ingredientType,
    price: INGREDIENT_PRICES[ingredientType]
  });

export const removeIngredient = ingredientType =>
  action(actionTypes.REMOVE_INGREDIENT, {
    ingredientType: ingredientType,
    price: INGREDIENT_PRICES[ingredientType]
  });

export const fetchOrders = () => {
  return dispatch => {
    dispatch(action(actionTypes.REQUEST_ORDERS, { isFetchingOrders: true }));
    axios
      .get("orders.json")
      .then(
        resp => {
          if (resp.status === 200 && resp.data) {
            return resp.data;
          }
        },
        error => {
          return { errorMessage: error.message };
        }
      )
      .then(data => {
        if (!data.errorMessage) {
          dispatch(action(actionTypes.RECEIVED_ORDERS, { orders: data }));
        } else {
          dispatch(
            action(actionTypes.REQUEST_ORDERS_FAILURE, { errorMessage: data })
          );
        }
      });
  };
};
