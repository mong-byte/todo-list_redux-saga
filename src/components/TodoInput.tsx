import React, { useState } from "react";
import styled from "styled-components";

const TodoInput: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const chageTodoText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const todoText: string = event.target.value;
    setInputText(todoText);
  };

  const submitTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <TodoInputContainer>
      <TodoForm onSubmit={submitTodo}>
        <InputTodo type="text" value={inputText} onChange={chageTodoText} />
        <InputButton>Add Todo</InputButton>
      </TodoForm>
    </TodoInputContainer>
  );
};

export default TodoInput;

const TodoInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
  border-radius: 20px;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.3);
`;

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InputTodo = styled.input`
  all: unset;
  flex: 9;
  padding-bottom: 15px;
  margin: 10px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 21px;
  border-bottom: 3px solid white;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    transition: border-color 0.5s ease-in-out;
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
