import { Div, Flex } from "@orbit-ui/react-components";
import { Link } from "react-router-dom";

export function SubMenu() {
    return (
        <Flex as="nav" borderBottom="1px (--o-ui-cloud-3) solid" paddingX={8} paddingY={5}>
            <Div marginRight={7}>
                <Link to="/">&lt; Back</Link>
            </Div>
            <Div marginRight={7}>
                <Link to="/settings">Sensitivity</Link>
            </Div>
            <Div>
                <Link to="/settings">Inactivity</Link>
            </Div>
        </Flex>
    );
}
