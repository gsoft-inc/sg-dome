import './style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ThemeProvider } from "@orbit-ui/react-components";
import { Menu, SubMenu, Main, Settings } from "./Components";

function App() {
  return (
    <Router>
      <ThemeProvider colorScheme="light" defaultColorScheme="light">
      <Menu />
      <SubMenu />
      <div className="App pl8 pr8">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/settings">
            <Settings/>
          </Route>
        </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
