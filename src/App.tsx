import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ThemeProvider } from "@orbit-ui/react-components";
import { Menu, Main, Settings, Third } from "./Components";

function App() {
  return (
    <Router>
      <ThemeProvider colorScheme="light" defaultColorScheme="light">
      <Menu />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/settings">
            <Settings/>
          </Route>
          <Route path="/layouts">
            <Third />
          </Route>
        </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
