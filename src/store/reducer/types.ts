import { DataTypes } from "src/utils/types";
import {
  ACTION_TYPES,
  ACTION_TYPES_FAIL,
  ACTION_TYPES_SUCCESS,
} from "./actionTypes";

export interface paramsTypes {
  id: string;
}

export interface ContentType extends paramsTypes {
  content: string;
}

export interface IsCheckType extends paramsTypes {
  isCheck: boolean;
}

export interface CreateType {
  content: string;
  type: typeof ACTION_TYPES.CREATE_TODO;
}

export interface ModifyTypes extends ContentType, paramsTypes {
  type: typeof ACTION_TYPES.LOAD_TODO;
}

export interface CheckTypes extends IsCheckType {
  type: typeof ACTION_TYPES.CHECK_TODO;
}

export interface DeleteTypes extends paramsTypes {
  type: typeof ACTION_TYPES.DELETE_TODO;
}

export interface MsgType {
  msg: string;
}

export interface ResultType extends MsgType {
  content: string;
}

export interface CreaterTypes {
  loadTodo: () => { type: typeof ACTION_TYPES.LOAD_TODO };
  createTodo: (content: string) => {
    type: typeof ACTION_TYPES.CREATE_TODO;
    content: string;
  };
  modifyTodo: (
    content: string,
    id: string
  ) => {
    type: typeof ACTION_TYPES.MODIFY_TODO;
    content: string;
    id: string;
  };
  checkTodo: (
    isCheck: boolean,
    id: string
  ) => {
    type: typeof ACTION_TYPES.CHECK_TODO;
    isCheck: boolean;
    id: string;
  };
  deleteTodo: (id: string) => {
    type: typeof ACTION_TYPES.DELETE_TODO;
    id: string;
  };
}

export interface CreaterSuccessType {
  loadTodoSuccess: (result: DataTypes) => {
    type: typeof ACTION_TYPES_SUCCESS.LOAD_TODO_SUCCESS;
    payload: DataTypes;
  };
  createTodoSuccess: (result: MsgType) => {
    type: typeof ACTION_TYPES_SUCCESS.CREATE_TODO_SUCCESS;
    payload: MsgType;
  };
  modifyTodoSuccess: (
    result: ResultType,
    id: string
  ) => {
    type: typeof ACTION_TYPES_SUCCESS.MODIFY_TODO_SUCCESS;
    payload: ResultType;
    id: string;
  };
  checkTodoSuccess: (
    result: MsgType,
    id: string
  ) => {
    type: typeof ACTION_TYPES_SUCCESS.CHECK_TODO_SUCCESS;
    payload: MsgType;
    id: string;
  };
  deleteTodoSuccess: (
    result: MsgType,
    id: string
  ) => {
    type: typeof ACTION_TYPES_SUCCESS.DELETE_TODO_SUCCESS;
    payload: MsgType;
    id: string;
  };
}

export interface CreaterFailType {
  loadTodoFail: (error: unknown) => {
    type: typeof ACTION_TYPES_FAIL.LOAD_TODO_FAIL;
    error: unknown;
  };
  createTodoFail: (error: unknown) => {
    type: typeof ACTION_TYPES_FAIL.CREATE_TODO_FAIL;
    error: unknown;
  };
  modifyTodoFail: (error: unknown) => {
    type: typeof ACTION_TYPES_FAIL.MODIFY_TODO_FAIL;
    error: unknown;
  };
  checkTodoFail: (error: unknown) => {
    type: typeof ACTION_TYPES_FAIL.CHECK_TODO_FAIL;
    error: unknown;
  };
  deleteTodoFail: (error: unknown) => {
    type: typeof ACTION_TYPES_FAIL.DELETE_TODO_FAIL;
    error: unknown;
  };
}
