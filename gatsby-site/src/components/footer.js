import React from 'react';
import styled from 'styled-components';
import { FontStyle, FocusStyle } from './cssStyle';
import { sizeMediaQueries } from '../utils/responsive';

const FooterSite = styled.footer`
    padding-bottom: 1rem;
    background: ${props => props.theme.colors.white};
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.buttonContent,
        400
    )};
    text-align: center;

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        font-size: ${props => props.theme.fontsize.fourthHeader};
    }
`;

const Link = styled.a`
    color: ${props => props.theme.colors.blue};

    :focus {
        ${FocusStyle};
    }
`;

const Footer = () => (
    <FooterSite>
        © 2020 Red Nuclear Monkey -{' '}
        <Link
            href="https://www.rednuclearmonkey.com"
            target="_blank"
            rel="noopener"
        >
            rednuclearmonkey.com
        </Link>
    </FooterSite>
);

export default Footer;
