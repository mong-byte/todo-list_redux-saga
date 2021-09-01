import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreater } from "src/store/reducer/actionCreater";
import { EDIT_PLACE_HOLDER } from "src/utils/constants";
import { DataListType } from "src/utils/types";
import styled from "styled-components";

interface EditTodoPropsTypes {
  toggleEditMode: () => void;
  todo: DataListType;
}

const EditTodo: React.FC<EditTodoPropsTypes> = ({ toggleEditMode, todo }) => {
  const [editedText, setEditedText] = useState<string>("");
  const dispatch = useDispatch();
  const { modifyTodo } = actionCreater;

  const closeEditMode = (event: React.KeyboardEvent): void => {
    if (event.key !== "Escape") return;
    return toggleEditMode();
  };

  const editTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    }: { target: { value: string } } = event;
    setEditedText(value);
  };

  const editSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(modifyTodo(editedText, todo.id));
    setEditedText("");
    toggleEditMode();
  };

  return (
    <EidtTodoContainer>
      <EditTodoForm onSubmit={editSubmit}>
        <EditTodoInput
          required
          type="text"
          placeholder={EDIT_PLACE_HOLDER}
          value={editedText}
          onChange={editTextChange}
          onKeyDown={closeEditMode}
        />
      </EditTodoForm>
    </EidtTodoContainer>
  );
};

export default EditTodo;

const EidtTodoContainer = styled.div`
  width: 100%;
`;

const EditTodoForm = styled.form`
  width: inherit;
  margin-left: 10px;
`;

const EditTodoInput = styled.input`
  all: unset;
  width: inherit;
  font-size: 21px;

  &::placeholder {
    text-align: center;
  }
`;
