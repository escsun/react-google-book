import {
  call,
  put,
  take
} from "redux-saga/effects";
import {
  BooksAction,
  googleBooksQueryComplete,
  googleBooksQueryError,
  googleBooksRetrieveError,
  googleBooksRetrieveSuccess
} from "../actions";
import {
  fetchGoogleBooksByQuery,
  retrieveGoogleBook
} from "../api/books";
import { BooksConstants } from "../constants";

export function* fetchGoogleBooksByQuerySaga(action: BooksAction) {
  try {
    const search = yield call(fetchGoogleBooksByQuery, action.payload);
    yield put(googleBooksQueryComplete(search));
  } catch (error) {
    yield put(googleBooksQueryError(error));
  }
}

export function* retrieveGoogleBookSaga(action: BooksAction) {
  try {
    const book = yield call(retrieveGoogleBook, action.payload);
    yield put(googleBooksRetrieveSuccess(book));
  } catch (error) {
    yield put(googleBooksRetrieveError(error));
  }
}

export function* watchGoogleBooksByQuery() {
  while (true) {
    const search = yield take(BooksConstants.GOOGLE_BOOKS_QUERY);
    yield call(fetchGoogleBooksByQuerySaga, search);
  }
}

export function* watchRetrieveGoogleBook() {
  while (true) {
    const book = yield take(BooksConstants.GOOGLE_BOOKS_RETRIEVE);
    yield call(retrieveGoogleBookSaga, book);
  }
}
