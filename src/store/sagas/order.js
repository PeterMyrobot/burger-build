import { put } from "redux-saga/effects";

import axios from "../../axios-order";
import * as actions from "../actions/index";

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post(
      "/orders.json?auth=" + action.token,
      action.orderData
    );

    yield put(
      actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    );
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart());
  const queryParams =
    "?auth=" +
    action.token +
    '&orderBy="userId"&equalTo="' +
    action.userId +
    '"';
  try {
    const response = yield axios.get("/orders.json" + queryParams);
    const fetchedOrder = [];
    for (let key in response.data) {
      fetchedOrder.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrder));
  } catch (error) {
    console.log(error);
    yield put(actions.fetchOrdersFail(error));
  }
}
