import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        black: '#231F1F',
        white: '#FFFFFF',
        red: '#F22323',
        redOrange: '#D35C50',
        blue: '#0975C3'
    },
    borderRadius: {
        cardBorderRadius: 0.8,
        buttonBorderRadius: 3
    },
    fontsize: {
        mainHeader: 8,
        secondHeader: 5,
        thirdHeader: 3,
        default: 1.5,
        buttonContent: 1.3,
        navTitles: 1.2
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
