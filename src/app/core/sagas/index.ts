import { fork } from "redux-saga/effects";
import { watchGoogleBookRetrieveSaga } from "./book";
import {
  watchGoogleBooksByQuerySaga,
  watchGoogleBooksByQuerySagaInput
} from "./books";

export default function* rootSaga() {
  yield [
    fork(watchGoogleBookRetrieveSaga),
    fork(watchGoogleBooksByQuerySagaInput),
    fork(watchGoogleBooksByQuerySaga)
  ];
}
