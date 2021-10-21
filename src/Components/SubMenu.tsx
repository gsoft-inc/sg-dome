import { Div, Nav } from "@sharegate/orbit-ui";
import { Link } from "react-router-dom";

export function SubMenu() {
    return (
        <Nav borderBottom="cloud-3" paddingX={8} paddingY={5}>
            <Div marginRight={7}>
                <Link to="/">&lt; Back</Link>
            </Div>
            <Div marginRight={7}>
                <Link to="/settings">Sensitivity</Link>
            </Div>
            <Div>
                <Link to="/settings">Inactivity</Link>
            </Div>
        </Nav>
    );
}
