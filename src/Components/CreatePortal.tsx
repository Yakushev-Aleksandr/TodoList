import React from "react";
import ReactDOM from "react-dom";
import ModalWindow from "./ModalWindow";
import { IModalWindow } from "./ModalWindow";

const modalWindow = document.getElementById("modal-window") as HTMLElement;

const CreatePortal: React.FC<IModalWindow> = (props) => {
  return ReactDOM.createPortal(<ModalWindow {...props} />, modalWindow);
};

export default CreatePortal;
