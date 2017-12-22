import { fork } from "redux-saga/effects";
import { watchRetrieveGoogleBook } from "./books";

export default function* rootSaga() {
  yield [
    fork(watchRetrieveGoogleBook)
  ];
}
