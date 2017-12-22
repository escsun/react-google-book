import {
  call,
  put,
  take
} from "redux-saga/effects";
import {
  BooksAction,
  googleBooksRetrieveError,
  googleBooksRetrieveSuccess
} from "../actions";
import { retrieveGoogleBook } from "../api/books";
import { BooksConstants } from "../constants";

export function* fetchGoogleBooksByQuerySaga() {
  return null;
}

export function* retrieveGoogleBookSaga(action: BooksAction) {
  try {
    const book = yield call(retrieveGoogleBook, action.payload);
    yield put(googleBooksRetrieveSuccess(book));
  } catch (error) {
    yield put(googleBooksRetrieveError(error));
  }
}

export function* watchRetrieveGoogleBook() {
  while (true) {
    const book = yield take(BooksConstants.GOOGLE_BOOKS_RETRIEVE);
    yield call(retrieveGoogleBookSaga, book);
  }
}
