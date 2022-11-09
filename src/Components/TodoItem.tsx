/* import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { ITodos } from "./TodoInput";

export interface ITodoItem {
  element: ITodos;
  selectDate: string;
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

const ButtonStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoItem: React.FC<ITodoItem> = ({
  element,
  editElement,
  deleteElement,
  completedElement,
  selectDate,
}) => {
  console.log("TodoItem");
  console.log(element);
  console.log("TodoItem");
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
        selectDate={selectDate}
      >
        <div>
          <input
            id={String(element.id)}
            type="checkbox"
            checked={!element.completed}
            onChange={completedHandler}
          />
          <div>{element.id}</div>

          <div>{selectDate}</div>

          <div>
            element: {element.todo}
            <hr />
          </div>
        </div>

        <ButtonStyled>
          <ButtonWrapper userActions={editHandler}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  marginRight: "15px",
                }}
              >
                Edit
              </Button>
            </Stack>
          </ButtonWrapper>

          <ButtonWrapper userActions={deleteHandler}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Stack>
          </ButtonWrapper>
        </ButtonStyled>
      </TodoItemWrapperStyled>
    </>
  );
};

export default TodoItem; */

import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { ITodos } from "./TodoInput";

export interface ITodoItem {
  element: ITodos;
  selectDate: string;
  editElement: (element: ITodos) => void;
  deleteElement: (element: ITodos) => void;
  completedElement: (id: number, checked: boolean) => void;
}

const TodoItemWrapperStyled = styled.div<ITodoItem>`
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px 5px 10px;
  font-size: 20px;
  text-decoration: ${(props) =>
    props.element.completed ? "" : "line-through"};
`;

const ButtonStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TodoItem: React.FC<ITodoItem> = ({
  element,
  editElement,
  deleteElement,
  completedElement,
  selectDate,
}) => {
  console.log("TodoItem");
  console.log(element);
  console.log("TodoItem");
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
      <>
        <Container maxWidth="xl">
          <Card
            sx={{
              minWidth: 275,
              border: "1px solid",
              borderRadius: 2,
              boxShadow: "6px 6px 1px 1px rgba(0, 0, 255, .1)",
              mt: "5px",
            }}
          >
            <CardContent>
              <TodoItemWrapperStyled
                element={element}
                editElement={editElement}
                deleteElement={deleteElement}
                completedElement={completedElement}
                selectDate={selectDate}
              >
                <Checkbox
                  {...label}
                  id={String(element.id)}
                  checked={!element.completed}
                  onChange={completedHandler}
                />

                <Typography variant="h5" component="div">
                  Element: {element.todo}
                </Typography>
              </TodoItemWrapperStyled>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                ID: {element.id}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date: {selectDate}
              </Typography>
            </CardContent>

            <CardActions>
              <ButtonStyled>
                <ButtonWrapper userActions={editHandler}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      sx={{
                        marginRight: "15px",
                      }}
                    >
                      Edit
                    </Button>
                  </Stack>
                </ButtonWrapper>

                <ButtonWrapper userActions={deleteHandler}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Stack>
                </ButtonWrapper>
              </ButtonStyled>
            </CardActions>
          </Card>
        </Container>
      </>
    </>
  );
};

export default TodoItem;
