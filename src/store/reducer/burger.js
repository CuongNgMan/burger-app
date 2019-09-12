import * as actionTypes from "../actions/actionTypes";
import update from "immutability-helper";

const initState = {
  ingredients: null,
  totalPrice: 0.0,
  isBurgerPurchaseable: false,
  isPurchasing: false,
  isFetching: false,
  isFetchingFailure: false
};

const INGREDIENT_PRICES = {
  salad: 0.3,
  meat: 1.3,
  cheese: 0.9,
  bacon: 1
};

const calculatePrice = ingredients => {
  const totalPrice = Object.keys(ingredients).reduce((price, currentValue) => {
    return price + INGREDIENT_PRICES[currentValue] * ingredients[currentValue];
  }, 0);
  return totalPrice;
};

const ingredients = (state, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_INGREDIENTS:
      return update(state, { isFetching: { $set: true } });
    case actionTypes.RECEIVED_INGREDIENTS:
      const totalPrice = calculatePrice(action.ingredients);
      console.log(totalPrice);
      return update(state, {
        isFetching: { $set: false },
        isFetchingFailure: { $set: false },
        ingredients: { $set: action.ingredients },
        totalPrice: { $set: totalPrice }
      });
    case actionTypes.REQUEST_INGREDIENTS_FAILURE:
      return update(state, {
        isFetchingFailure: { $set: true },
        isFetching: { $set: false }
      });

    default:
      return state;
  }
};

export const burger = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return update(state, {
        ingredients: {
          [action.ingredientType]: { $apply: x => x + 1 }
        },
        totalPrice: {
          $apply: x => x + action.price
        }
      });
    case actionTypes.REMOVE_INGREDIENT:
      return update(state, {
        ingredients: {
          [action.ingredientType]: { $apply: x => x - 1 }
        },
        totalPrice: { $apply: x => x - action.price }
      });
    case actionTypes.REQUEST_INGREDIENTS:
    case actionTypes.RECEIVED_INGREDIENTS:
    case actionTypes.REQUEST_INGREDIENTS_FAILURE:
      return ingredients(state, action);
    default:
      return state;
  }
};
