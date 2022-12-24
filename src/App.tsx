import { shuffle } from "lodash";
import { nanoid } from "nanoid";
import { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { ITodo } from "./interface/ITodo";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [focusedTodoId, setFocusedTodoId] = useState<string | undefined>(
    undefined
  );

  const addTodo = (todo: Pick<ITodo, "label">) => {
    setTodos((todos) => [
      ...todos,
      { id: nanoid(), label: todo.label, isComplete: false },
    ]);
  };

  const updateTodoCompletion = (todoId: string, isComplete: boolean) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === todoId) return { ...todo, isComplete };
        return todo;
      })
    );
  };

  const focusedTodo = todos.find((todo) => todo.id === focusedTodoId);

  const randomFocusedTask = () => {
    setFocusedTodoId(
      shuffle(todos.filter((todo) => !todo.isComplete))[0]?.id ?? null
    );
  };

  const todoApi = {
    addTodo,
    focusedTodo,
    todos,
    setTodos,
    randomFocusedTask,
    updateTodoCompletion,
  };

  return (
    <BrowserRouter>
      <nav>
        <NavLink exact to={"/"} activeStyle={{ fontWeight: "bold" }}>
          List
        </NavLink>{" "}
        -{" "}
        <NavLink to={"/focus"} activeStyle={{ fontWeight: "bold" }}>
          Focus
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <ListScreen {...todoApi} />
        </Route>
        <Route path="/focus">
          <FocusScreen {...todoApi} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
