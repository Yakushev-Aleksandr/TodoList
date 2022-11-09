import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Typography from "@mui/material/Typography";

const ModalWindowStyled = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  margin: 10px auto;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export interface IModalWindow {
  saveEdit: string;
  edit: string;
  editValue: (textInput: string) => void;
  cancelShow: () => void;
  saveShow: () => void;
}

const ModalWindow: React.FC<IModalWindow> = ({
  saveEdit,
  edit,
  editValue,
  cancelShow,
  saveShow,
}) => {
  const editValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    editValue(event.target.value);
  };

  const cancelShowHandler = () => {
    cancelShow();
  };

  const saveShowHandler = () => {
    saveShow();
  };

  return (
    <>
      <>
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Мы редактируем этот тест:
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            "{saveEdit}"
          </Typography>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Скоректируйте свои дела"
              variant="standard"
              color="warning"
              focused
              value={edit}
              onChange={editValueHandler}
            />
          </Box>
          <ModalWindowStyled>
            <Stack direction="row" spacing={2}>
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={saveShowHandler}
              >
                SAVE
              </Button>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={cancelShowHandler}
              >
                CANCEL
              </Button>
            </Stack>
          </ModalWindowStyled>
        </Box>
      </>
    </>
  );
};

export default ModalWindow;
