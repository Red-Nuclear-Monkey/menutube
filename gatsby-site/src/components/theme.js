import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        black: '#231F1F',
        white: '#FFFFFF',
        red: '#F22323',
        redOrange: '#D35C50',
        blue: '#0975C3'
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
