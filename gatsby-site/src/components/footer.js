import React from 'react';
import styled from 'styled-components';

const FooterSite = styled.footer`
    padding-bottom: 1rem;
    background: ${props => props.theme.colors.black};
    color: white;
    text-align: center;
`;

const A = styled.a`
    color: ${props => props.theme.colors.blue};
`;

const Footer = () => (
        <FooterSite>
            © 2020 Red Nuclear Monkey -{' '}
            <A href="https://www.rednuclearmonkey.com">rednuclearmonkey.com</A>
        </FooterSite>
);

export default Footer;
