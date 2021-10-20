import "@orbit-ui/react-components/index.css";

import { ApricotTheme, ThemeProvider, createThemeVars } from "@orbit-ui/react-components";
import { render } from "react-dom";
import App from "./App";

createThemeVars([ApricotTheme]);

render(
    <ThemeProvider colorScheme="light" theme={ApricotTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
