import { css } from 'styled-components';

const FontStyle = (
    color,
    fontSize,
    fontWeight,
    fontStyle = 'normal',
    fontVariant = 'normal'
) => {
    return css`
        color: ${color};
        font-size: ${fontSize};
        font-style: ${fontStyle};
        font-variant: ${fontVariant};
        font-weight: ${fontWeight};
        text-rendering: optimizeLegibility;
    `;
};

const FocusStyle = () => {
    return css`
        box-shadow: 0 0 0 2px ${props => props.theme.colors.blueOutline};
        outline: none;
    `;
};

export { FontStyle, FocusStyle };
