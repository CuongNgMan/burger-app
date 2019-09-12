import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  LOAD_INGREDIENTS,
  INGREDIENT,
  SUCCESS
} from "../actions/actions";
import update from "immutability-helper";

const initState = {
  ingredients: {
    cheese: 0,
    meat: 0,
    salad: 0,
    bacon: 0
  },
  totalPrice: 3.5,
  isBurgerPurchaseable: false,
  isPurchasing: false,
  loading: false,
  error: false,
  test: true
};

const burgerBuilderReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return update(state, {
        ingredients: {
          [action.ingredientType]: { $apply: x => x + 1 }
        },
        totalPrice: {
          $apply: x => x + action.price
        }
      });
    case REMOVE_INGREDIENT:
      return update(state, {
        ingredients: {
          [action.ingredientType]: { $apply: x => x - 1 }
        },
        totalPrice: { $apply: x => x - action.price }
      });
    case INGREDIENT[SUCCESS]:
      return update(state, { ingredients: { $set: action.ingredients } });
    default:
      return state;
  }
};

export default burgerBuilderReducer;
