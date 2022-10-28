import React from "react";
import styled from "styled-components";

const ModalWindowStyled = styled.div`
  background-color: white;
  height: 35vh;
  width: 65%;
  padding-top: 50px;
  color: #fd198b;
  border: 2px solid blue;
  top: 50%;
  left: 47%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
`;

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
    console.log("Button-Save");

    saveShow();
  };

  return (
    <ModalWindowStyled>
      <div>Мы редактируем этот тест:{saveEdit}</div>
      <input value={edit} onChange={editValueHandler} />
      <button onClick={saveShowHandler}> SAVE </button>
      <button onClick={cancelShowHandler}> CANCEL </button>
    </ModalWindowStyled>
  );
};

export default ModalWindow;
