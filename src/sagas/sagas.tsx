import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { API_METHOD, BASE_URL, URL_TODO } from "src/utils/constants";
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

// watch에서 액션이 감지 되었을때 실행 되는 비동기함수
// 이후 액션에 따라 Reducer로 넘어감
function* loadTodo() {
  try {
    const result: DataTypes = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}`).then((response) => response.json())
    );
    yield put(loadTodoSuccess(result));
  } catch (error: unknown) {
    yield put(loadTodoFail(error));
    console.log(error);
  }
}

// Dispatch로 인해 요청이 들어오게 되면, 함수를 실행
function* watchLoadTodo() {
  yield takeLatest(ACTION_TYPES.LOAD_TODO, loadTodo);
}

// watch에서 액션이 감지 되었을때 실행 되는 비동기함수
// 이후 액션에 따라 Reducer로 넘어감
function* createTodo(action: CreateType) {
  try {
    const result: MsgType = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}`, {
        method: API_METHOD.POST,
        body: JSON.stringify(action.content),
      }).then((response) => response.json())
    );
    yield put(createTodoSuccess(result, action.content));
  } catch (error: unknown) {
    yield put(createTodoFail(error));
    console.log(error);
  }
}

// Dispatch로 인해 요청이 들어오게 되면, 함수를 실행
function* watchAddTodo() {
  yield takeLatest(ACTION_TYPES.CREATE_TODO, createTodo);
}

// watch에서 액션이 감지 되었을때 실행 되는 비동기함수
// 이후 액션에 따라 Reducer로 넘어감
function* modifyTodo(action: ModifyTypes) {
  try {
    const result: ResultType = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}/${action.id}`, {
        method: API_METHOD.POST,
        body: JSON.stringify({ content: action.content }),
      }).then((response) => response.json())
    );
    yield put(modifyTodoSuccess(result, action.id));
  } catch (error: unknown) {
    yield put(modifyTodoFail(error));
    console.log(error);
  }
}

// Dispatch로 인해 요청이 들어오게 되면, 함수를 실행
function* watchModifyTodo() {
  yield takeLatest(ACTION_TYPES.MODIFY_TODO, modifyTodo);
}

// watch에서 액션이 감지 되었을때 실행 되는 비동기함수
// 이후 액션에 따라 Reducer로 넘어감
function* checkTodo(action: CheckTypes) {
  try {
    const result: MsgType = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}/${action.id}`, {
        method: API_METHOD.POST,
        body: JSON.stringify({ isCheck: action.isCheck }),
      }).then((response) => response.json())
    );
    yield put(checkTodoSuccess(result, action.id));
  } catch (error: unknown) {
    yield put(checkTodoFail(error));
    console.log(error);
  }
}

// Dispatch로 인해 요청이 들어오게 되면, 함수를 실행
function* watchCheckTodo() {
  yield takeLatest(ACTION_TYPES.CHECK_TODO, checkTodo);
}

// watch에서 액션이 감지 되었을때 실행 되는 비동기함수
// 이후 액션에 따라 Reducer로 넘어감
function* deleteTodo(action: DeleteTypes) {
  try {
    const result: MsgType = yield call(() =>
      fetch(`${BASE_URL}${URL_TODO}/${action.id}`, {
        method: API_METHOD.POST,
      }).then((response) => response.json())
    );
    yield put(deleteTodoSuccess(result, action.id));
  } catch (error: unknown) {
    yield put(deleteTodoFail(error));
    console.log(error);
  }
}

// Dispatch로 인해 요청이 들어오게 되면, 함수를 실행
function* watchDeleteTodo() {
  yield takeLatest(ACTION_TYPES.DELETE_TODO, deleteTodo);
}

// saga에 각 액션을 등록
export default function* todoSaga() {
  yield all([
    fork(watchLoadTodo),
    fork(watchAddTodo),
    fork(watchModifyTodo),
    fork(watchCheckTodo),
    fork(watchDeleteTodo),
  ]);
}
