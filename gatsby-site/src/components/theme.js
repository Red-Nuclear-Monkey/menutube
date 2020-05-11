import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        black: '#231F1F',
        white: '#FFFFFF',
        red: '#F22323',
        redOrange: '#D35C50',
        blue: '#0975C3',
        blueOutline: '#88b8ff',
        green: '#00cc66'
    },
    borderRadius: {
        cardBorderRadius: [0.8, 'rem'],
        buttonBorderRadiusCircle: [3, 'rem'],
        buttonBorderRadiusRounded: [0.5, 'rem']
    },
    fontsize: {
        mainHeader: [8, 'rem'],
        titleHeader: [6.5, 'rem'],
        secondHeader: [5, 'rem'],
        thirdHeader: [3, 'rem'],
        fourthHeader: [2, 'rem'],
        default: [1.5, 'rem'],
        defaultMobilePortrait: [2.2, 'rem'],
        defaultMobileLandscape: [3, 'rem'],
        buttonContent: [1.3, 'rem'],
        navTitles: [1.2, 'rem']
    },
    marginTop: {
        smallSpace: [2, 'rem'],
        mediumSpace: [4, 'rem'],
        highSpace: [6, 'rem']
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
