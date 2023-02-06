import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ad61af'
        },
        secondary: {
            main: '#da61bf'
        }
    }
})


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
);
