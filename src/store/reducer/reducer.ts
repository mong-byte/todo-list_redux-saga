import { INITIAL_TODO } from "src/utils/constants";
import { InitialTypes } from "src/utils/types";
import {
  ACTION_TYPES,
  ACTION_TYPES_SUCCESS,
  ACTION_TYPES_FAIL,
  Action,
} from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

// 각각 Action에 맞는 작동을 제어하기 위한 Reducer
// 미들웨어를 통과후 성공/실패등의 액션에 따른 처리로직 집합
const reducer = (state: InitialTypes = INITIAL_TODO, action: Action) => {
  const { LOAD_TODO, CREATE_TODO, MODIFY_TODO, DELETE_TODO, CHECK_TODO } =
    ACTION_TYPES;

  const {
    LOAD_TODO_SUCCESS,
    CREATE_TODO_SUCCESS,
    MODIFY_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    CHECK_TODO_SUCCESS,
  } = ACTION_TYPES_SUCCESS;

  const {
    LOAD_TODO_FAIL,
    CREATE_TODO_FAIL,
    MODIFY_TODO_FAIL,
    DELETE_TODO_FAIL,
    CHECK_TODO_FAIL,
  } = ACTION_TYPES_FAIL;

  switch (action.type) {
    case LOAD_TODO:
    case CREATE_TODO:
    case MODIFY_TODO:
    case DELETE_TODO:
    case CHECK_TODO:
      return { ...state };
    case LOAD_TODO_SUCCESS:
      return {
        ...state,
        todoData: action.payload,
      };
    case CREATE_TODO_SUCCESS:
      const newTodo = {
        id: uuidv4(),
        content: action.content,
        isCheck: false,
        createdAt: new Date().toISOString(),
      };
      return {
        msg: action.payload,
        todoList: state.todoData.todoList.concat(newTodo),
      };
    case MODIFY_TODO_SUCCESS:
      return {
        msg: action.payload,
        todoData: {
          ...state.todoData,
          todoList: state.todoData.todoList.map((todo) => {
            return todo.id !== action.id
              ? todo
              : {
                  ...todo,
                  content: action.payload.content,
                };
          }),
        },
      };
    case DELETE_TODO_SUCCESS:
      return {
        msg: action.payload.msg,
        todoData: {
          ...state.todoData,
          todoList: state.todoData.todoList.filter((todo) => {
            return todo.id !== action.id;
          }),
        },
      };
    case CHECK_TODO_SUCCESS:
      return {
        msg: action.payload,
        todoData: {
          ...state.todoData,
          todoList: state.todoData.todoList.map((todo) => {
            return todo.id !== action.id
              ? todo
              : {
                  ...todo,
                  isCheck: !todo.isCheck,
                };
          }),
        },
      };
    case LOAD_TODO_FAIL:
    case CREATE_TODO_FAIL:
    case MODIFY_TODO_FAIL:
    case DELETE_TODO_FAIL:
    case CHECK_TODO_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
