import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MantineProvider} from "@mantine/core";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const useSystemColorScheme = () => {
    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    useEffect(() => {
        const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const changeHandler = () => setTheme(colorSchemeQuery.matches ? 'dark' : 'light');

        colorSchemeQuery.addListener(changeHandler);

        return () => {
            colorSchemeQuery.removeListener(changeHandler);
        }
    }, []);

    return theme;
}
root.render(
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        colorScheme: 'light',
    }}>
        <App/>
    </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
