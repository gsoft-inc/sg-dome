import {ReactComponent as Logo} from "./assets/logo.svg";
import {ReactComponent as Settings} from "./assets/settings.svg";
import {ReactComponent as Help} from "./assets/help.svg";
import {ReactComponent as Notification} from "./assets/notification.svg";
import {ReactComponent as Hamburger} from "./assets/hamburger.svg";
import {
  Link
} from "react-router-dom";


import { Avatar, Button, Text } from "@orbit-ui/react-components";

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
            <Button variant="outline" shape="rounded" className="mh5">Book a demo</Button>
            <Button shape="rounded" className="mr7">Ready to buy</Button>
            <Notification className="mr3"/>
            <Link to="/settings"><Settings className="mr3" /></Link>
            <Help className="mr3" />
            <Avatar name="Mars Volta" />
          </div>
          <Hamburger className="w6 h6 lg:hidden" />
          </nav>
    );
}
