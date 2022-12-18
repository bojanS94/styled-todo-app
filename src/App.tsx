import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListScreen from "./screens/ListScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ListScreen />
        </Route>
        <Route path="/focus">
          <div>Focus view</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
