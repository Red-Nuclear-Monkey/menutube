import React from 'react';
import styled from 'styled-components';
import FontStyle from './fontStyle';

const FooterSite = styled.footer`
    padding-bottom: 1rem;
    background: ${props => props.theme.colors.white};
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.buttonContent,
        400
    )};
    text-align: center;
`;

const Link = styled.a`
    color: ${props => props.theme.colors.blue};

    :focus {
        box-shadow: 0 0 0 2px #88b8ff;
        outline: none;
    }
`;

const Footer = () => (
    <FooterSite>
        © 2020 Red Nuclear Monkey -{' '}
        <Link href="https://www.rednuclearmonkey.com">
            rednuclearmonkey.com
        </Link>
    </FooterSite>
);

export default Footer;
