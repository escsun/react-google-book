import {
  call,
  put,
  take
} from "redux-saga/effects";
import {
  BookAction,
  googleBookRetrieveError,
  googleBookRetrieveSuccess
} from "../actions";
import { fetchGoogleBookRetrieve } from "../api";
import { BookConstants} from "../constants";

export function* googleBookRetrieveSaga(action: BookAction) {
  try {
    const book = yield call(fetchGoogleBookRetrieve, action.payload);
    yield put(googleBookRetrieveSuccess(book));
  } catch (error) {
    yield put(googleBookRetrieveError(error));
  }
}

export function* watchGoogleBookRetrieveSaga() {
  while (true) {
    const book = yield take(BookConstants.GOOGLE_BOOK_RETRIEVE);
    yield call(googleBookRetrieveSaga, book);
  }
}
