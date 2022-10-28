import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";

const InputTodoWrapperStyled = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 5px 0 5px 0;
  & input {
    width: 45%;
    border: 1px solid blue;
    border-radius: 5px;
    box-shadow: 3px 3px 1px 1px rgba(0, 0, 255, 0.2);
  }
`;

export interface ITodos {
  id: number;
  todo: string;
  completed: boolean;
}

interface IInputTodo {
  dateInput: (Todos: ITodos) => void;
}
let newId: number = 0;
const TodoInput: React.FC<IInputTodo> = ({ dateInput }): JSX.Element => {
  const Todos = {
    id: 0,
    todo: "",
    completed: true,
  };

  const [newTodo, setNewTodo] = useState<string>("");

  const dateInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const addNewTodoHandler = () => {
    newId = newId + 1;
    if (newTodo) {
      Todos.id = newId;
      Todos.todo = newTodo;

      dateInput(Todos);

      setNewTodo("");
    } else {
      alert("Введите данные в форму");
    }
  };

  return (
    <InputTodoWrapperStyled>
      <input type="text" value={newTodo} onChange={dateInputHandler} />
      <Button backgroundColor="#33ff00" userActions={addNewTodoHandler}>
        Add new item
      </Button>
    </InputTodoWrapperStyled>
  );
};

export default TodoInput;
