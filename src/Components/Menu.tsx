import { Avatar, Button, Text } from "@orbit-ui/react-components";
import { Hamburger, Help, Logo, Notification, Settings } from "./assets";
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <nav className="menu bb b--cloud-100 pr8 pl8 pb5 pt5 flex items-center justify-between">
            <Link to="/">
                <div className="flex items-center">
                    <Logo className="w8 h8 mr7" />
                </div>
            </Link>
            <div className="items-center hidden lg:flex">
                <Text>30 days left in trial</Text>
                <Button className="mh5" shape="rounded" variant="secondary">Book a demo</Button>
                <Button className="mr7" shape="rounded">Ready to buy</Button>
                <Notification className="mr3" />
                <Link to="/settings"><Settings className="mr3" /></Link>
                <Help className="mr3" />
                <Avatar name="Mars Volta" />
            </div>
            <Hamburger className="w6 h6 lg:hidden" />
        </nav>
    );
}
