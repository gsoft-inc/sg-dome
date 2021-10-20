import { Avatar, Button, Div, Flex, Text } from "@orbit-ui/react-components";
import { Hamburger, Help, Logo, Notification, Settings } from "./assets";
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <Flex alignItems="center" justifyContent="space-between" as="nav" borderBottom="cloud-2" paddingX={8} paddingY={5}>
            <Link to="/">
                <Flex alignItems="center" marginRight={7}>
                    <Logo width="2rem" height="2rem" />
                </Flex>
            </Link>
            <Div display={{ base: "none", md: "flex", lg: "flex", xl: "flex" }} alignItems="center">
                <Text>30 days left in trial</Text>
                <Button marginX={5} shape="rounded" variant="secondary">Book a demo</Button>
                <Button marginRight={7} shape="rounded">Ready to buy</Button>
                <Div marginRight={3}><Notification /></Div>
                <Div marginRight={3} ><Link to="/settings"><Settings /></Link></Div>
                <Div marginRight={3}><Help /></Div>
                <Avatar name="Mars Volta" />
            </Div>
            <Div display={{ base: "block", md: "none", lg: "none", xl: "none" }}><Hamburger width="1.5rem" height="1.5rem" /></Div>
        </Flex>
    );
}
