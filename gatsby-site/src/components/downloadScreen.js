import React from 'react';
import styled from 'styled-components';
import appleblack from '../images/apple-download.svg';

const Background = styled.div`
    background: ${props => props.theme.colors.redOrange};
    min-height: 100vh;
    max-height: 100vh;
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    text-align: center;
    padding: 20rem 0;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 5rem;
    padding: 0 18rem;
`;

const SubTitle = styled.div`
    font-size: 3rem;
    font-weight: normal;
    color: ${props => props.theme.colors.white};
`;

const Sentence = styled.div`
    font-size: 1.5rem;
    font-style: italic;
    font-weight: normal;
    color: ${props => props.theme.colors.white};
`;

const Release = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
`;

const AppleDonwloadBlack = styled.div`
    background-image: url(${appleblack});
    background-repeat: no-repeat;
    background-size: contain;
    width: 15rem;
    height: 10rem;
    margin: 0 auto;
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
