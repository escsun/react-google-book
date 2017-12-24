import { push } from "react-router-redux";
import { delay } from "redux-saga";
import {
  call,
  put,
  take,
  takeLatest
} from "redux-saga/effects";
import {
  BooksAction,
  googleBooksByQueryComplete,
  googleBooksByQueryError
} from "../actions";
import { fetchGoogleBooksByQuery } from "../api";

import { BooksConstants } from "../constants";

export function* fetchGoogleBooksByQuerySaga(action: BooksAction) {
  try {
    yield call(delay, 500);
    yield put(push("/"));
    const search = yield call(fetchGoogleBooksByQuery, action.payload);
    yield put(googleBooksByQueryComplete(search));
  } catch (error) {
    yield put(googleBooksByQueryError(error));
  }
}

export function* watchLatestGoogleBooksByQuerySaga() {
  yield takeLatest(BooksConstants.GOOGLE_BOOKS_QUERY, fetchGoogleBooksByQuerySaga);
}

export function* watchGoogleBooksByQuerySaga() {
  while (true) {
    const search = yield take(BooksConstants.GOOGLE_BOOKS_QUERY);
    yield call(watchLatestGoogleBooksByQuerySaga, search);
  }
}
