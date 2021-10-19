import "@orbit-ui/react-components/index.css";

import { ApricotTheme, ThemeProvider, createThemeVars } from "@orbit-ui/react-components";
import { render } from "react-dom";
import App from "./App";

createThemeVars([ApricotTheme]);

render(
    <ThemeProvider display="flex" flexDirection="column" minHeight="100vh" colorScheme="light" theme={ApricotTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
