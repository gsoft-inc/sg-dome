import "@sharegate/orbit-ui/index.css";

import { ApricotTheme, ThemeProvider, createThemeVars } from "@sharegate/orbit-ui";
import { render } from "react-dom";
import App from "./App";

createThemeVars([ApricotTheme]);

render(
    <ThemeProvider colorScheme="light" theme={ApricotTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
