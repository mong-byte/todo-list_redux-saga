import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CancelIcon from "src/assets/CancelIcon";
import { Trash } from "src/assets/DeleteIcon";
import EditIcon from "src/assets/EditIcon";
import { FilledStar } from "src/assets/Stars";

import { actionCreater } from "src/store/reducer/actionCreater";
import { DataListType } from "src/utils/types";
import styled from "styled-components";
import EditTodo from "./EditTodo";

interface TodoItemProps {
  todo: DataListType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { checkTodo, deleteTodo } = actionCreater;
  const dispatch = useDispatch();

  // Todo Delete를 위한 Dispatch를 보내는 함수
  const deleteTodoClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(deleteTodo(todo.id));
  };

  // Todo Check의 상태를 바꾸기 위한 Dispatch를 보내는 함수
  const checkTodoClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(checkTodo(todo.isCheck, todo.id));
  };

  // Edit을 위한 input 상태로 전환하기 위한 함수
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <TodoItemContainer>
      <TodoItemContent>
        <TodoCheckBox onClick={checkTodoClick} isChecked={todo.isCheck}>
          <FilledStar />
        </TodoCheckBox>
        {!editMode ? (
          <TodoTextBox>
            <TodoText>{todo.content}</TodoText>
          </TodoTextBox>
        ) : (
          <EditTodo toggleEditMode={toggleEditMode} todo={todo} />
        )}
      </TodoItemContent>
      <TodoButtonBox onClick={toggleEditMode}>
        {editMode ? <CancelIcon /> : <EditIcon />}
      </TodoButtonBox>
      <TodoButtonBox onClick={deleteTodoClick}>
        <Trash />
      </TodoButtonBox>
    </TodoItemContainer>
  );
};

export default TodoItem;

interface CheckBoxPropsTypes {
  isChecked: boolean;
}

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
  padding: 20px 10px;
  border-radius: 20px;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.3);
`;

const TodoItemContent = styled.div`
  flex: 9.5;
  display: flex;
  align-items: center;
`;

const TodoCheckBox = styled.button<CheckBoxPropsTypes>`
  all: unset;
  margin-left: 10px;
  cursor: pointer;

  svg {
    fill: ${(props) => (props.isChecked ? "yello" : "black")};
  }
`;

const TodoTextBox = styled.div`
  width: 100%;
`;

const TodoText = styled.span`
  margin: 0px 0px 0px 15px;
  font-size: 25px;
`;

const TodoButtonBox = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.5;
  cursor: pointer;
`;
