import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import styled from "styled-components";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const InputTodoWrapperStyled = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 5px 0 5px 0;
`;

export interface ITodos {
  id: number;
  todo: string;
  completed: boolean;
  date: string;
}

interface IInputTodo {
  dateInput: (Todos: ITodos) => void;
  selectDate: string;
}
let newId: number = 0;
const TodoInput: React.FC<IInputTodo> = ({
  dateInput,
  selectDate,
}): JSX.Element => {
  const Todos = {
    id: 0,
    todo: "",
    completed: true,
    date: "",
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
      Todos.date = selectDate;
      dateInput(Todos);

      setNewTodo("");
    } else {
      alert("Введите данные в форму");
    }
  };

  return (
    <InputTodoWrapperStyled>
      <Box
        sx={{
          width: "80%",
          maxWidth: "100%",
          marginRight: "15px",
        }}
      >
        <TextField
          sx={{
            marginRight: "15px",
          }}
          type="text"
          value={newTodo}
          onChange={dateInputHandler}
          fullWidth
          label="I will do it"
          id="fullWidth"
        />
      </Box>
      <ButtonWrapper userActions={addNewTodoHandler}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Add new item
          </Button>
        </Stack>
      </ButtonWrapper>
    </InputTodoWrapperStyled>
  );
};

export default TodoInput;
