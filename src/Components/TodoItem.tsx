import React from "react";
import Button from "./Button";
import styled from "styled-components";

import { ITodos } from "./TodoInput";

export interface ITodoItem {
  element: ITodos;

  editElement: (element: ITodos) => void;
  deleteElement: (element: ITodos) => void;
  completedElement: (id: number, checked: boolean) => void;
}

const TodoItemWrapperStyled = styled.div<ITodoItem>`
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  background-color: #00ff62;
  font-size: 20px;
  text-decoration: ${(props) =>
    props.element.completed ? "" : "line-through"};
`;

const TodoItem: React.FC<ITodoItem> = ({
  element,
  editElement,
  deleteElement,
  completedElement,
}) => {
  const editHandler = () => {
    editElement(element);
  };

  const deleteHandler = () => {
    deleteElement(element);
  };

  const completedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;

    let newId = Number(id);
    completedElement(newId, checked);
  };

  return (
    <>
      <TodoItemWrapperStyled
        element={element}
        editElement={editElement}
        deleteElement={deleteElement}
        completedElement={completedElement}
      >
        <div>
          <input
            id={String(element.id)}
            type="checkbox"
            checked={!element.completed}
            onChange={completedHandler}
          />
          <div>{element.id}</div>
          <div>
            element: {element.todo}
            <hr />
          </div>
        </div>

        <div>
          <Button backgroundColor="blue" userActions={editHandler}>
            Edit
          </Button>
          <Button backgroundColor="tomato" userActions={deleteHandler}>
            Delete
          </Button>
        </div>
      </TodoItemWrapperStyled>
    </>
  );
};

export default TodoItem;
