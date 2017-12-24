import { fork } from "redux-saga/effects";
import { watchGoogleBookRetrieveSaga } from "./book";
import { watchGoogleBooksByQuerySaga } from "./books";

export default function* rootSaga() {
  yield [
    fork(watchGoogleBookRetrieveSaga),
    fork(watchGoogleBooksByQuerySaga)
  ];
}
