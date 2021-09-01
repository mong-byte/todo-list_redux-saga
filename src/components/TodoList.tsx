import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { InitialTypes } from "src/utils/types";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  // 전역Store에서 데이터를 받아옴
  const { todoData }: InitialTypes = useSelector(
    (state: RootState) => state.reducer
  );

  return (
    todoData && (
      <TodoListContainer>
        <TodoLeft>{todoData.count && `남은 할 일 ${todoData.count}`}</TodoLeft>
        {todoData.todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodoListContainer>
    )
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  margin: 50px 0px;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const TodoLeft = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
`;
