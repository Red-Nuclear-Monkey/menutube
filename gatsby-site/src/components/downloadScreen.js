import React from 'react';
import styled from 'styled-components';
import appleblack from '../images/apple-download.svg';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.redOrange};
`;

const Content = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 5rem;
`;

const SubTitle = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 3rem;
    font-weight: normal;
`;

const Sentence = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-style: italic;
    font-weight: normal;
`;

const Release = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 1.3rem;
    font-weight: bold;
`;

const AppleDonwloadBlack = styled.div`
    width: 15rem;
    height: 10rem;
    background-image: url(${appleblack});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Download = () => (
    <Background>
        <Content>
            <Title>MenuTube</Title>
            <SubTitle>is totally free!</SubTitle>
            <Sentence>
                So what are you waiting to put an entire full functional YouTube
                website into your macOS’s menu bar?
            </Sentence>
            <Release>Get the last release</Release>
            <AppleDonwloadBlack />
        </Content>
    </Background>
);

export default Download;
