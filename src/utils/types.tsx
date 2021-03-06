export interface DataListType {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
}

export interface DataTypes {
  count: number;
  todoList: DataListType[];
}

export interface InitialTypes {
  msg: string;
  todoData: DataTypes;
}

export interface MethodType {
  POST: string;
}
