import {
    Link
  } from "react-router-dom";

import {ReactComponent as Logo} from "./assets/logo.svg";

import { Avatar, Button } from "@orbit-ui/react-components";

export function Menu() {
    return (
        <nav className="menu bg-marine-200 pr8 pl8 pb5 pt5 flex items-center justify-between">
          <div className="flex items-center">
            <Logo className="w8 h8 mr7" />
            <div className="mr5">
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/settings">Settings</Link>
            </div>
          </div>    
          <div className="flex">        
          <Button variant="outline" shape="rounded" className="mr5">Book a demo</Button>
          <Button shape="rounded" className="mr7">Ready to buy</Button>
            <Avatar name="Mars Volta" />
          </div>
          </nav>
    );
}
