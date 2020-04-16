import React from 'react';
import styled from 'styled-components';
import menutube from '../images/menutube-play.png';

const BlockContainer = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    height: 5rem;
    flex-direction: row;
    justify-content: center;
    background: transparent;
    font-size: 1.2rem;

    span {
        margin: 1.5rem 2.5rem 0 2.5rem;
        cursor: pointer;
    }

    span:hover {
        color: ${props => props.theme.colors.red};
    }
`;

const Logo = styled.div`
    width: 4rem;
    background-image: url(${menutube});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Nav = () => (
    <BlockContainer>
        <Logo />
        <span>HOME</span> <span>PRODUCT</span> <span>FEATURES</span>{' '}
        <span>DOWNLOAD</span> <span>GITHUB</span> <span>SUPPORT</span>
    </BlockContainer>
);

export default Nav;
