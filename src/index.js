import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { defaultTheme } from "./themes/default";

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: consolas,serif;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);