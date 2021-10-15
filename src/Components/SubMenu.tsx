import { Link } from "react-router-dom";

export function SubMenu() {
    return (
        <nav className="menu bb b--cloud-200 pr8 pl8 pb5 pt5">
            <div className="mr7">
                <Link to="/">&lt; Back</Link>
            </div>
            <div className="mr7">
                <Link to="/settings">Sensitivity</Link>
            </div>
            <div>
                <Link to="/settings">Inactivity</Link>
            </div>
        </nav>
    );
}
