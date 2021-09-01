export interface DataListType {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

export interface DataTypes {
  count: number;
  todoList: DataListType[];
}

export interface InitialTypes {
  msg: string;
  todoData: DataTypes;
}
