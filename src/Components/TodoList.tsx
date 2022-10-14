import React from "react";
import Button from "./Button";
import styled from "styled-components";

const TodoListWrapperStyled = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  background-color: #00ff62;
`;

const TodoList: React.FC = () => {
  const Edit = () => {
    console.log("edit");
  };

  const Delete = () => {
    console.log("Delete");
  };
  return (
    <TodoListWrapperStyled>
      <div>
        <input type="checkbox" />
        <div>TodoList</div>
      </div>
      <div>
        <Button
          backgroundColor="blue"
          Test={Edit}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          Edit
        </Button>
        <Button
          backgroundColor="tomato"
          Test={Delete}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          Delete
        </Button>
      </div>
    </TodoListWrapperStyled>
  );
};

export default TodoList;
