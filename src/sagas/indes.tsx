import { all, call } from "redux-saga/effects";
import sagas from "./sagas";

export default function* rootSaga() {
  yield all([call(sagas)]);
}
