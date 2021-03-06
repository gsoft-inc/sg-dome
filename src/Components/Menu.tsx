import { Avatar, Button, Div, Flex, Icon, Text, as } from "@sharegate/orbit-ui";
import { Hamburger, Help, Logo, Notification, Settings } from "./assets";
import { Link } from "react-router-dom";

const Nav = as(Flex, "nav");

export function Menu() {
    return (
        <Nav alignItems="center" justifyContent="space-between" borderBottom="cloud-2" paddingX={8} paddingY={5}>
            <Link to="/">
                <Flex alignItems="center" marginRight={7}>
                    <Icon src={Logo} width={5} height={5} />
                </Flex>
            </Link>
            <Div display={{ base: "none", md: "flex" }} alignItems="center">
                <Text>30 days left in trial</Text>
                <Button marginX={5} shape="rounded" variant="secondary">Book a demo</Button>
                <Button marginRight={7} shape="rounded">Ready to buy</Button>
                <Div marginRight={3}><Icon src={Notification} size="xl" /></Div>
                <Div marginRight={3} ><Link to="/settings"><Icon src={Settings} size="xl" /></Link></Div>
                <Div marginRight={3}><Icon src={Help} size="xl" /></Div>
                <Avatar name="Mars Volta" />
            </Div>
            <Div visibility={{ base: "visible", md: "hidden" }}><Icon src={Hamburger} width={4} height={4} /></Div>
        </Nav>
    );
}
