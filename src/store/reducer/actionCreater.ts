import { DataTypes } from "src/utils/types";
import {
  ACTION_TYPES,
  ACTION_TYPES_SUCCESS,
  ACTION_TYPES_FAIL,
} from "./actionTypes";
import {
  CreaterFailType,
  CreaterSuccessType,
  CreaterTypes,
  MsgType,
  ResultType,
} from "./types";

// Dispatch를 하기 위한 요청 Action 생성함수 집합
export const actionCreater: CreaterTypes = {
  loadTodo: () => ({ type: ACTION_TYPES.LOAD_TODO }),
  createTodo: (content) => ({ type: ACTION_TYPES.CREATE_TODO, content }),
  modifyTodo: (content, id) => ({
    type: ACTION_TYPES.MODIFY_TODO,
    content,
    id,
  }),
  checkTodo: (isCheck, id) => ({ type: ACTION_TYPES.CHECK_TODO, isCheck, id }),
  deleteTodo: (id) => ({ type: ACTION_TYPES.DELETE_TODO, id }),
};

// 비동기 요청이 성공했을때 사용되는 Action 생성함수의 집합
export const actionCreaterSuccess: CreaterSuccessType = {
  loadTodoSuccess: (result: DataTypes) => ({
    type: ACTION_TYPES_SUCCESS.LOAD_TODO_SUCCESS,
    payload: result,
  }),
  createTodoSuccess: (result: MsgType, content: string) => ({
    type: ACTION_TYPES_SUCCESS.CREATE_TODO_SUCCESS,
    payload: result,
    content,
  }),
  modifyTodoSuccess: (result: ResultType, id: string) => ({
    type: ACTION_TYPES_SUCCESS.MODIFY_TODO_SUCCESS,
    payload: result,
    id,
  }),
  checkTodoSuccess: (result: MsgType, id: string) => ({
    type: ACTION_TYPES_SUCCESS.CHECK_TODO_SUCCESS,
    payload: result,
    id,
  }),
  deleteTodoSuccess: (result: MsgType, id: string) => ({
    type: ACTION_TYPES_SUCCESS.DELETE_TODO_SUCCESS,
    payload: result,
    id,
  }),
};

// 비동기 요청이 실패했을때 사용되는 Action 생성함수의 집합
export const actionCreaterFail: CreaterFailType = {
  loadTodoFail: (error: unknown) => ({
    type: ACTION_TYPES_FAIL.LOAD_TODO_FAIL,
    error,
  }),
  createTodoFail: (error: unknown) => ({
    type: ACTION_TYPES_FAIL.CREATE_TODO_FAIL,
    error,
  }),
  modifyTodoFail: (error: unknown) => ({
    type: ACTION_TYPES_FAIL.MODIFY_TODO_FAIL,
    error,
  }),
  checkTodoFail: (error: unknown) => ({
    type: ACTION_TYPES_FAIL.CHECK_TODO_FAIL,
    error,
  }),
  deleteTodoFail: (error: unknown) => ({
    type: ACTION_TYPES_FAIL.DELETE_TODO_FAIL,
    error,
  }),
};
