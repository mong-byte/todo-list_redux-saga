import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import styled from "styled-components";

const TodoList: React.FC = () => {
  const { todoData } = useSelector((state: RootState) => state.reducer);

  return <TodoListContainer></TodoListContainer>;
};

export default TodoList;

const TodoListContainer = styled.div``;
