import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SUCCESS,
  FAILURE,
  REQUEST,
  INGREDIENT,
  LOAD_INGREDIENTS
} from "./actions.saga";

const INGREDIENT_PRICES = {
  salad: 0.3,
  meat: 1.3,
  cheese: 0.9,
  bacon: 1
};

function action(type, payload = {}) {
  return { type, ...payload };
}

export const addIngredient = ingredientType =>
  action(ADD_INGREDIENT, {
    ingredientType: ingredientType,
    price: INGREDIENT_PRICES[ingredientType]
  });

export const removeIngredient = ingredientType =>
  action(REMOVE_INGREDIENT, {
    ingredientType: ingredientType,
    price: INGREDIENT_PRICES[ingredientType]
  });

export const ingredient = {
  request: () => action(INGREDIENT[REQUEST], {}),
  success: ingredients => action(INGREDIENT[SUCCESS], { ingredients: ingredients }),
  failure: error => action(INGREDIENT[FAILURE], { error: error })
};

export const loadIngredients = () => action(LOAD_INGREDIENTS);
