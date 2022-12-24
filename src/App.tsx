import { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { ITodo } from "./interface/ITodo";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const updateTodoCompletion = (todoId: string, isComplete: boolean) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === todoId) return { ...todo, isComplete };
        return todo;
      })
    );
  };

  const todoApi = { todos, setTodos, updateTodoCompletion };

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
