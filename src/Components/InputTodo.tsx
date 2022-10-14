import React from "react";
import Button from "./Button";
import styled from "styled-components";

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

const InputTodo: React.FC = () => {
  const Add = () => {
    console.log("Add new TodoList");
  };
  return (
    <InputTodoWrapperStyled>
      <input />
      <Button
        backgroundColor="#33ff00"
        Test={Add}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        Add new TodoList
      </Button>
    </InputTodoWrapperStyled>
  );
};

export default InputTodo;
