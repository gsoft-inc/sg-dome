import { Home, Settings, Third } from "./Pages";
import { Menu } from "./Components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

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
