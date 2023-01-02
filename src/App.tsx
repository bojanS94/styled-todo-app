import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import TodoContext from "./contexts/todo-store";
import useLocalStorage from "./hooks/use-local-storage";
import { ITodo } from "./interface/ITodo";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";
import { colors } from "./styles";

const NavStyle = styled.nav`
  display: flex;
  max-width: 600px;
  width: 100%;
`;

const TabButton = styled(NavLink)`
  max-width: 300px;
  width: 100%;
  background: red;
  color: black;

  &:active {
    background-color: ${colors.primary};
    color: white;
  }
`;

function App() {
  const [todos, setTodos] = useLocalStorage<ITodo[]>("todos", []);

  return (
    <BrowserRouter>
      <TodoContext.Provider value={[todos, setTodos]}>
        <NavStyle>
          <TabButton exact to={"/"} activeStyle={{ fontWeight: "bold" }}>
            List
          </TabButton>{" "}
          -{" "}
          <NavLink to={"/focus"} activeStyle={{ fontWeight: "bold" }}>
            Focus
          </NavLink>
        </NavStyle>
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
