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

export default FontStyle;
