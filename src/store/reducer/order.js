import * as actionTypes from "../actions/actionTypes";
import update from "immutability-helper";

const initOrderState = {
  orders: [],
  isFetchingOrders: false
};

export const orders = (state = initOrderState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_ORDERS:
      break;
    case actionTypes.RECEIVED_ORDERS:
      break;
    case actionTypes.REQUEST_ORDERS_FAILURE:
      break;
    default:
      return state;
  }
};
