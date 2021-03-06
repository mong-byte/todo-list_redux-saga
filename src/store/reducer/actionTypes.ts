import { DataTypes } from "src/utils/types";
import { MsgType, ResultType } from "src/store/reducer/types";

interface ActionTypes {
  LOAD_TODO: "LOADTODO";
  CREATE_TODO: "CREATETODO";
  MODIFY_TODO: "MODIFYTODO";
  DELETE_TODO: "DELETETODO";
  CHECK_TODO: "CHECKTODO";
}

interface ActionTypes_SUCCESS {
  LOAD_TODO_SUCCESS: "LOADTODO_SUCCESS";
  CREATE_TODO_SUCCESS: "CREATETODO_SUCCESS";
  MODIFY_TODO_SUCCESS: "MODIFYTODO_SUCCESS";
  DELETE_TODO_SUCCESS: "DELETETODO_SUCCESS";
  CHECK_TODO_SUCCESS: "CHECKTODO_SUCCESS";
}

interface ActionTypes_FAIL {
  LOAD_TODO_FAIL: "LOADTODO_FAIL";
  CREATE_TODO_FAIL: "CREATETODO_FAIL";
  MODIFY_TODO_FAIL: "MODIFYTODO_FAIL";
  DELETE_TODO_FAIL: "DELETETODO_FAIL";
  CHECK_TODO_FAIL: "CHECKTODO_FAIL";
}

export const ACTION_TYPES: ActionTypes = {
  LOAD_TODO: "LOADTODO",
  CREATE_TODO: "CREATETODO",
  MODIFY_TODO: "MODIFYTODO",
  DELETE_TODO: "DELETETODO",
  CHECK_TODO: "CHECKTODO",
} as const;

export const ACTION_TYPES_SUCCESS: ActionTypes_SUCCESS = {
  LOAD_TODO_SUCCESS: "LOADTODO_SUCCESS",
  CREATE_TODO_SUCCESS: "CREATETODO_SUCCESS",
  MODIFY_TODO_SUCCESS: "MODIFYTODO_SUCCESS",
  DELETE_TODO_SUCCESS: "DELETETODO_SUCCESS",
  CHECK_TODO_SUCCESS: "CHECKTODO_SUCCESS",
} as const;

export const ACTION_TYPES_FAIL: ActionTypes_FAIL = {
  LOAD_TODO_FAIL: "LOADTODO_FAIL",
  CREATE_TODO_FAIL: "CREATETODO_FAIL",
  MODIFY_TODO_FAIL: "MODIFYTODO_FAIL",
  DELETE_TODO_FAIL: "DELETETODO_FAIL",
  CHECK_TODO_FAIL: "CHECKTODO_FAIL",
} as const;

export type Action =
  | { type: typeof ACTION_TYPES.LOAD_TODO }
  | { type: typeof ACTION_TYPES.CREATE_TODO }
  | { type: typeof ACTION_TYPES.MODIFY_TODO; id: string; content: string }
  | { type: typeof ACTION_TYPES.CHECK_TODO }
  | { type: typeof ACTION_TYPES.DELETE_TODO }
  | { type: typeof ACTION_TYPES_SUCCESS.LOAD_TODO_SUCCESS; payload: DataTypes }
  | {
      type: typeof ACTION_TYPES_SUCCESS.CREATE_TODO_SUCCESS;
      payload: MsgType;
      content: string;
    }
  | {
      type: typeof ACTION_TYPES_SUCCESS.MODIFY_TODO_SUCCESS;
      payload: ResultType;
      id: string;
    }
  | {
      type: typeof ACTION_TYPES_SUCCESS.CHECK_TODO_SUCCESS;
      payload: MsgType;
      id: string;
    }
  | {
      type: typeof ACTION_TYPES_SUCCESS.DELETE_TODO_SUCCESS;
      payload: MsgType;
      id: string;
    }
  | { type: typeof ACTION_TYPES_FAIL.LOAD_TODO_FAIL }
  | { type: typeof ACTION_TYPES_FAIL.CREATE_TODO_FAIL }
  | { type: typeof ACTION_TYPES_FAIL.MODIFY_TODO_FAIL }
  | { type: typeof ACTION_TYPES_FAIL.CHECK_TODO_FAIL }
  | { type: typeof ACTION_TYPES_FAIL.DELETE_TODO_FAIL };
