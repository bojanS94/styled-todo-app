import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import TodoContext from "./contexts/todo-store";
import useLocalStorage from "./hooks/use-local-storage";
import { ITodo } from "./interface/ITodo";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";

function App() {
  const [todos, setTodos] = useLocalStorage<ITodo[]>("todos", []);

  return (
    <BrowserRouter>
      <TodoContext.Provider value={[todos, setTodos]}>
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
            <ListScreen />
          </Route>
          <Route path="/focus">
            <FocusScreen />
          </Route>
        </Switch>
      </TodoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
