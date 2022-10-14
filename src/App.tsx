import Header from "./Components/Header";
import InputTodo from "./Components/InputTodo";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <Header backgroundColor="red" />
      <InputTodo />
      <hr></hr>
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
};

export default App;
