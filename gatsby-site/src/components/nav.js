import React from "react";
import styled from 'styled-components';
import menutube from '../images/menutube-play.png';

const BlockContainer = styled.div`
    background: transparent;
    display: flex;
    flex-direction: row;
    position: fixed;
    height: 5rem;
    font-size: 1.2rem;
    width: 100%;
    top: 0;
    justify-content: center;
    
    span{
    margin: 1.5rem 2.5rem 0 2.5rem;
    cursor: pointer;
    }
    
    span:hover{
    color: ${props => props.theme.colors.red};
    }
`;

const Logo = styled.div`
    background-image: url(${menutube});
    background-repeat: no-repeat;
    background-size: contain;
    width: 4rem;

`;

const Nav = () => (
    <BlockContainer>
        <Logo/>
        <span>HOME</span>{" "}
        <span>PRODUCT</span>{" "}
        <span>FEATURES</span>{" "}
        <span>DOWNLOAD</span>{" "}
        <span>GITHUB</span>{" "}
        <span>SUPPORT</span>
    </BlockContainer>
);

export default Nav;
