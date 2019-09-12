import {
  put,
  takeEvery,
  all,
  call,
  fork,
  take,
  takeLatest
} from "redux-saga/effects";
import * as actions from "../store/actions/actions.saga";

import { ingredient } from "../store/actions/actionTypes.saga";

import axios from "../axios-order";

function callAPI(endpoint) {
  const URL = endpoint ? endpoint : "ingredients.json";

  return axios
    .get(URL)
    .then(resp => {
      if (resp.status === 200 && resp.data) {
        return resp.data;
      }
    })
    .catch(error => {
      return { error: error };
    });
}

function* fetchIngredients() {
  yield put(ingredient.request());
  const ingredients = yield call(callAPI);
  yield put(ingredient.success(ingredients));
}

function* watchFetchIngredient() {
  yield takeEvery(actions.LOAD_INGREDIENTS, fetchIngredients);
}

export default function* rootSaga() {
  yield all([fork(watchFetchIngredient)]);
}
