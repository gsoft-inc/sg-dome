import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu } from "./components";
import { Home, Settings, Third } from "./pages";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/layouts">
          <Third />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
