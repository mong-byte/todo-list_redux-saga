import { InitialTypes } from "./types";

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
