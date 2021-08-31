import { INITIAL_TODO } from "src/utils/constants";
import { InitialTypes } from "src/utils/types";
import {
  ACTION_TYPES,
  ACTION_TYPES_SUCCESS,
  ACTION_TYPES_FAIL,
  Action,
} from "./actionTypes";

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
      return { ...state };
    case CREATE_TODO:
      return { ...state };
    case MODIFY_TODO:
      return { ...state };
    case DELETE_TODO:
      return { ...state };
    case CHECK_TODO:
      return { ...state };
    case LOAD_TODO_SUCCESS:
      return {
        ...state,
        todoData: action.payload,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        msg: action.payload,
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
      return { ...state };
    case CREATE_TODO_FAIL:
      return { ...state };
    case MODIFY_TODO_FAIL:
      return { ...state };
    case DELETE_TODO_FAIL:
      return { ...state };
    case CHECK_TODO_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
