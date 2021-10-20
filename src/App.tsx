import { Home, Settings, Third } from "./Pages";
import { Menu } from "./Components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Div } from "@orbit-ui/react-components";

function App() {
    return (
        <Div display="flex" flexDirection="column" minHeight="100vh">
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
        </Div>
    );
}

export default App;
