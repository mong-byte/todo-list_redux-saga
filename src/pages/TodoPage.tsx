import React, { useEffect } from "react";
import styled from "styled-components";
import { TodoInput, TodoList } from "src/components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreater } from "src/store/reducer/actionCreater";
import { RootState } from "src/store";

const TodoPage: React.FC = () => {
  const { loadTodo } = actionCreater;
  const dispatch = useDispatch();
  const { msg } = useSelector((state: RootState) => state.reducer);

  useEffect(() => {
    dispatch(loadTodo());
  }, [dispatch, loadTodo]);

  return (
    <TodoContainer>
      <TodoInput />
      <TodoList />
    </TodoContainer>
  );
};

export default TodoPage;

const TodoContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 20px;
`;
