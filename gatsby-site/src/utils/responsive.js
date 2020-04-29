import { createGlobalStyle } from 'styled-components';

const defaultSizeFont = 1;

export const sizeMediaQueries = {
    mobileLandscape: '480px',
    tabletPortrait: '768px',
    tabletLandscape: '992px',
    laptop: '1200px'
};

const GlobalStyle = createGlobalStyle`
/* Mobile (portrait) ----------- */
@media only screen and (max-device-width: ${sizeMediaQueries.mobileLandscape}) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * .55}rem;
    }
}

/* Mobile (landscape) ----------- */
@media only screen and (min-device-width: ${sizeMediaQueries.mobileLandscape}) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * .48}rem;
    }
}

/* Tablet (portrait) ----------- */
@media only screen and (min-device-width: ${sizeMediaQueries.tabletPortrait}) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * .7}rem;
    }
}

/* Tablet (Landscape) ----------- */
@media only screen and (min-device-width: ${sizeMediaQueries.tabletLandscape}) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * .8}rem;
    }
}

/* Laptop  ----------- */
@media only screen and (min-device-width: ${sizeMediaQueries.laptop}) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * 1.1}rem;
    }
}

/* iPhone X (Landscape) ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * .55}rem;
    }
}

/* iPhone 4 (Landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 480px) and (orientation: landscape) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * .35}rem;
    }
}

/* iPhone 4 (Portrait) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 480px) and (orientation: portrait) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * .45}rem;
    }
}

/* iPhone 5 (Portrait) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
    /* Styles */
    html,
    body {
        font-size: ${defaultSizeFont * .45}rem;
    }
}
`;

export default GlobalStyle;
