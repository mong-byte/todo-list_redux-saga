import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreater } from "src/store/reducer/actionCreater";
import { CREATE_PLACE_HOLDER } from "src/utils/constants";
import styled from "styled-components";

interface TodoInputPropsTypes {
  inputOpen: boolean;
}

const TodoInput: React.FC<TodoInputPropsTypes> = ({ inputOpen }) => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useDispatch();
  const { createTodo } = actionCreater;

  const chageTodoText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    }: { target: { value: string } } = event;
    setInputText(value);
  };

  const submitTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(createTodo(inputText));
    setInputText("");
  };

  return (
    <TodoInputContainer inputOpen={inputOpen}>
      <TodoForm onSubmit={submitTodo}>
        <InputTodo
          required
          type="text"
          value={inputText}
          onChange={chageTodoText}
          placeholder={CREATE_PLACE_HOLDER}
        />
        <InputButton>Add</InputButton>
      </TodoForm>
    </TodoInputContainer>
  );
};

export default TodoInput;

const TodoInputContainer = styled.div<TodoInputPropsTypes>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
  border-radius: 20px;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.inputOpen ? "flex" : "none")};
  }
`;

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InputTodo = styled.input`
  all: unset;
  flex: 9;
  padding: 15px 0;
  margin: 10px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 21px;
  border-bottom: 3px solid white;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    transition: border-color 0.5s ease-in-out;
  }

  &::placeholder {
    text-align: center;
  }
`;

const InputButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  cursor: pointer;
`;
