import { Div, Flex, as } from "@orbit-ui/react-components";
import { Link } from "react-router-dom";

export function SubMenu() {
    const Nav = as(Flex, "nav");

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
