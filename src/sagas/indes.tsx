import { all, call } from "redux-saga/effects";
import sagas from "./sagas";

// 여러개의 saga를 작동시킴
export default function* rootSaga() {
  yield all([call(sagas)]);
}
