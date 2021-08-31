import { call, put, takeLatest, delay, all, fork } from "redux-saga/effects";
import { BASE_URL, MOCK_URL, URL_TODO } from "src/utils/constants";
import { DataTypes } from "src/utils/types";
import { ACTION_TYPES } from "../store/reducer/actionTypes";
import {
  actionCreaterFail,
  actionCreaterSuccess,
} from "../store/reducer/actionCreater";
import {
  ModifyTypes,
  MsgType,
  ResultType,
  CreateType,
  CheckTypes,
  DeleteTypes,
} from "../store/reducer/types";

const {
  loadTodoSuccess,
  createTodoSuccess,
  modifyTodoSuccess,
  checkTodoSuccess,
  deleteTodoSuccess,
} = actionCreaterSuccess;
const {
  loadTodoFail,
  createTodoFail,
  modifyTodoFail,
  checkTodoFail,
  deleteTodoFail,
} = actionCreaterFail;

function* loadTodo() {
  try {
    const result: DataTypes = yield call(() =>
      fetch(`${MOCK_URL}`).then((response) => response.json())
    );
    yield delay(1000);
    yield put(loadTodoSuccess(result));
  } catch (error: unknown) {
    yield put(loadTodoFail(error));
    console.log(error);
  }
}

function* watchLoadTodo() {
  yield takeLatest(ACTION_TYPES.LOAD_TODO, loadTodo);
}

function* createTodo(action: CreateType) {
  try {
    const result: MsgType = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}`, {
        method: "POST",
        body: JSON.stringify(action.content),
      }).then((response) => response.json())
    );
    yield delay(1000);
    yield put(createTodoSuccess(result));
  } catch (error: unknown) {
    yield put(createTodoFail(error));
    console.log(error);
  }
}

function* watchAddTodo() {
  yield takeLatest(ACTION_TYPES.CREATE_TODO, createTodo);
}

function* modifyTodo(action: ModifyTypes) {
  try {
    const result: ResultType = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}/${action.id}`, {
        method: "POST",
        body: JSON.stringify({ content: action.content }),
      }).then((response) => response.json())
    );
    yield delay(1000);
    yield put(modifyTodoSuccess(result, action.id));
  } catch (error: unknown) {
    yield put(modifyTodoFail(error));
    console.log(error);
  }
}

function* watchModifyTodo() {
  yield takeLatest(ACTION_TYPES.MODIFY_TODO, modifyTodo);
}

function* checkTodo(action: CheckTypes) {
  try {
    const result: MsgType = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}/${action.id}`, {
        method: "POST",
        body: JSON.stringify({ isCheck: action.isCheck }),
      }).then((response) => response.json())
    );
    yield delay(1000);
    yield put(checkTodoSuccess(result, action.id));
  } catch (error: unknown) {
    yield put(checkTodoFail(error));
    console.log(error);
  }
}

function* watchCheckTodo() {
  yield takeLatest(ACTION_TYPES.CHECK_TODO, checkTodo);
}

function* deleteTodo(action: DeleteTypes) {
  try {
    const result: MsgType = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}/${action.id}`, {
        method: "POST",
      }).then((response) => response.json())
    );
    yield delay(1000);
    yield put(deleteTodoSuccess(result, action.id));
  } catch (error: unknown) {
    yield put(deleteTodoFail(error));
    console.log(error);
  }
}

function* watchDeleteTodo() {
  yield takeLatest(ACTION_TYPES.DELETE_TODO, deleteTodo);
}

export default function* todoSaga() {
  yield all([
    fork(watchLoadTodo),
    fork(watchAddTodo),
    fork(watchModifyTodo),
    fork(watchCheckTodo),
    fork(watchDeleteTodo),
  ]);
}
