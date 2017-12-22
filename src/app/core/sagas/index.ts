import { fork } from "redux-saga/effects";
import {
  watchGoogleBooksByQuery,
  watchRetrieveGoogleBook
} from "./books";

export default function* rootSaga() {
  yield [
    fork(watchRetrieveGoogleBook),
    fork(watchGoogleBooksByQuery)
  ];
}
