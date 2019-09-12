function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const UPDATE_PRICE = "UPDATE_PRICE";

export const INGREDIENT = createRequestTypes("INGREDIENT");

export const LOAD_INGREDIENTS = "LOAD_INGREDIENTS";
