import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import TodoContext from "./contexts/todo-store";
import useLocalStorage from "./hooks/use-local-storage";
import { ITodo } from "./interface/ITodo";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";
import { colors, GlobalStyle } from "./styles";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const NavStyle = styled.nav`
  display: flex;
  max-width: 600px;
  width: 100%;
`;

const TabButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 80px;
  max-width: 300px;
  width: 100%;
  background: ${colors.darkColorOne};
  color: #fff;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &.active {
    background-color: ${colors.primary};
    color: white;
  }
`;

function App() {
  const [todos, setTodos] = useLocalStorage<ITodo[]>("todos", []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TodoContext.Provider value={[todos, setTodos]}>
          <LayoutWrapper>
            <NavStyle>
              <TabButton exact to={"/"} activeClassName="active">
                List
              </TabButton>
              <TabButton to={"/focus"} activeClassName="active">
                Focus
              </TabButton>
            </NavStyle>

            <Switch>
              <Route exact path="/">
                <ListScreen />
              </Route>
              <Route path="/focus">
                <FocusScreen />
              </Route>
            </Switch>
          </LayoutWrapper>
        </TodoContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
