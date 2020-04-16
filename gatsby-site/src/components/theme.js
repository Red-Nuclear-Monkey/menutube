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
        cardBorderRadius: [0.8, 'rem'],
        buttonBorderRadius: [3, 'rem']
    },
    fontsize: {
        mainHeader: [8, 'rem'],
        secondHeader: [5, 'rem'],
        thirdHeader: [3, 'rem'],
        default: [1.5, 'rem'],
        buttonContent: [1.3, 'rem'],
        navTitles: [1.2, 'rem']
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
