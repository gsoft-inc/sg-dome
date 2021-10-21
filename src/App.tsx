import { Home, Settings, Third } from "./Pages";
import { Menu } from "./Components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Flex } from "@sharegate/orbit-ui";

function App() {
    return (
        <Flex direction="column" minHeight="100vh">
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
        </Flex>
    );
}

export default App;
