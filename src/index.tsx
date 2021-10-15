import "@orbit-ui/react-components/index.css";

import { render } from 'react-dom';
import App from "./App";
import { ThemeProvider, ApricotTheme, createThemeVars } from "@orbit-ui/react-components";

createThemeVars([ApricotTheme]);

render(
  <ThemeProvider theme={ApricotTheme} colorScheme="light">
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
