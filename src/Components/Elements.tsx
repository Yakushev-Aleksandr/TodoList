import React, { useState } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import CreatePortal from "./CreatePortal";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectItem } from "../Features/textItem/item-slice";
import { IItem } from "../Features/textItem/item-slice";
import {
  addItem,
  deleteItem,
  editItem,
  completeItem,
} from "../Features/textItem/item-slice";
import { useParams } from "react-router-dom";

/* interface ITest {
  showDate: (selectDate: string | undefined) => void;
} */

const Elements: React.FC /* <ITest> */ = () => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>("");
  const [editId, setEditId] = useState<number>();
  const [saveEdit, setSaveEdit] = useState<string>("");

  let { selectDate } = useParams();
  const dispatch = useAppDispatch();

  const addTodosHandler = (todoItem: IItem) => {
    setEditId(todoItem.id);
    dispatch(addItem(todoItem));
  };

  const todo = useAppSelector(selectItem);

  const editElementHandler = (todoItem: IItem) => {
    setShowEdit((previousState: boolean) => !previousState);
    setEditId(todoItem.id);

    setEdit(todoItem.todo);
    setSaveEdit(todoItem.todo);
  };

  const deleteElementHandler = (todoItem: IItem) => {
    dispatch(deleteItem(todoItem));
  };

  // МОДАЛЬНОЕ ОКНО
  //__________________________________________________________
  const editValueHandler = (textInput: string) => {
    setEdit(textInput);
  };

  const cancelShowHandler = () => {
    setShowEdit(() => false);
  };

  const saveShowHandler = () => {
    if (editId) {
      let id = editId;
      let todo = edit;
      dispatch(editItem({ id, todo }));
    }

    setShowEdit((previousState: boolean) => !previousState);
  };

  //_________________________________________________________

  const completedElementHandler = (id: number, checked: boolean) => {
    let completed = checked;
    dispatch(completeItem({ id, completed }));
  };

  const elements = todo.map((element) => (
    <TodoItem
      editElement={editElementHandler}
      deleteElement={deleteElementHandler}
      completedElement={completedElementHandler}
      key={element.id}
      element={element}
      selectDate={typeof selectDate === "string" ? selectDate : ""}
    />
  ));

  return (
    <>
      <div>
        <TodoInput
          dateInput={addTodosHandler}
          selectDate={typeof selectDate === "string" ? selectDate : ""}
        />
        {selectDate}
        <hr></hr>
        {showEdit && (
          <CreatePortal
            editValue={editValueHandler}
            cancelShow={cancelShowHandler}
            saveShow={saveShowHandler}
            saveEdit={saveEdit}
            edit={edit}
          />
        )}
        <hr></hr>
        {elements}
      </div>
    </>
  );
};

export default Elements;
