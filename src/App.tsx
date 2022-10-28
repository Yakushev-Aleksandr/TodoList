import { useState } from "react";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import CreatePortal from "./Components/CreatePortal";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectItem } from "./Features/textItem/item-slice";
import { IItem } from "./Features/textItem/item-slice";

import {
  addItem,
  deleteItem,
  editItem,
  completedItem,
} from "./Features/textItem/item-slice";

const App: React.FC = () => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>("");
  const [editId, setEditId] = useState<number>();
  const [saveEdit, setSaveEdit] = useState<string>("");

  const dispatch = useAppDispatch();

  const addTodosHandler = (initialState: IItem) => {
    setEditId(initialState.id);
    dispatch(addItem(initialState));
  };

  const todo = useAppSelector(selectItem);

  const editElementHandler = (initialState: IItem) => {
    setShowEdit((previousState: boolean) => !previousState);
    setEditId(initialState.id);

    setEdit(initialState.todo);
    setSaveEdit(initialState.todo);
  };

  const deleteElementHandler = (initialState: IItem) => {
    dispatch(deleteItem(initialState));
  };

  // МОДАЛЬНОЕ ОКНО
  //__________________________________________________________
  const editValueHandler = (textInput: string) => {
    setEdit(textInput);
  };

  const cancelShowHandler = () => {
    setShowEdit((previousState: boolean) => false);
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
    dispatch(completedItem({ id, completed }));
  };

  const elements = todo.map((element) => (
    <TodoItem
      editElement={editElementHandler}
      deleteElement={deleteElementHandler}
      completedElement={completedElementHandler}
      key={element.id}
      element={element}
    />
  ));

  return (
    <div>
      <Header backgroundColor="red" />.
      <TodoInput dateInput={addTodosHandler} />
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
  );
};

export default App;
