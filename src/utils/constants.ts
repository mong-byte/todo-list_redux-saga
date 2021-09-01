import { InitialTypes, MethodType } from "./types";

export const BASE_URL: string = "http://dummy-server.io";
export const URL_TODO: string = "/todo";

export const MOCK_URL: string = "/data/mockList.json";

export const INITIAL_TODO: InitialTypes = {
  msg: "",
  todoData: {
    count: 0,
    todoList: [],
  },
};

export const API_METHOD: MethodType = {
  POST: "POST",
};

export const CREATE_PLACE_HOLDER = "할 일을 입력 해 주세요";

export const EDIT_PLACE_HOLDER =
  "할 일을 입력후 Enter를, 취소하시려면 ESC를 눌러주세요";
