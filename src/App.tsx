import { useState, useEffect } from "react";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import CreatePortal from "./Components/CreatePortal";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectItem } from "./Features/textItem/item-slice";
import { IItem } from "./Features/textItem/item-slice";
/* import { textItemTEST } from "./Features/Item/textItem-slice"; */

import {
  addItem,
  /*  editItem, */
  deleteItem,
  completedItem,
} from "./Features/textItem/item-slice";

/* interface ITodos {
  id: number;
  todo: string;
  completed: boolean;
} */

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>("");

  const [editId, setEditId] = useState<number>();
  const [saveEdit, setSaveEdit] = useState<string>("");
  /*   const [decorationText, setDecorationText] = useState<boolean>(false); */
  const [todosEdit, setTodosEdit] = useState<string>("");
  /*   const [textItem, setTextItem] = useState<string>(""); */
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectItem);
  /*  console.log(todo); */

  useEffect(() => {
    setTodos(todo);
  }, [todo]);

  const addTodosHandler = (initialState: IItem) => {
    console.log(initialState);
    /*  setTextItem(initialState.todo); */
    dispatch(addItem(initialState));
  };

  const editElementHandler = (initialState: IItem) => {
    console.log("APP-edit");
    console.log(initialState);
    setShowEdit((previousState: boolean) => true);
    setEditId(initialState.id);
    setTodosEdit(initialState.todo);
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
    console.log("saveShowHandler");
    console.log(editId);
    console.log(todosEdit);
    console.log(todos);
    console.log(edit);

    /*  dispatch(editItem(edit)); */

    setShowEdit((previousState: boolean) => false);
  };

  //_________________________________________________________

  const completedElementHandler = (
    name: string,
    id: number,
    checked: boolean
  ) => {
    /*  setDecorationText((previousState) => !previousState); */
    /* console.log(decorationText); */

    let result = todos.find((item) => Number(name) === item.id);
    if (result) {
      console.log(result.completed);
      result.completed = !result.completed;
      console.log(result.completed);
    }
  };

  const elements = todos.map((element) => (
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
