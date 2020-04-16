import React from 'react';
import styled from 'styled-components';
import play from '../images/playbutton.png';
import listen from '../images/listen.png';

const Background = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    padding-top: 17rem;
    text-align: center;
`;

const Title = styled.div`
    padding: 0 18rem;
    color: ${props => props.theme.colors.black};
    font-size: 5rem;
`;

const SubTitle = styled.div`
    padding-top: 1rem;
    color: ${props => props.theme.colors.black};
    font-size: 1.5rem;
    font-style: italic;
    font-weight: normal;
`;

const Play = styled.div`
    width: 15rem;
    height: 10rem;
    margin: 2rem auto 0 auto;
    background-image: url(${play});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Listen = styled.div`
    position: relative;
    bottom: 10rem;
    left: 20rem;
    width: 20rem;
    height: 20rem;
    margin: 2rem auto 0 auto;
    background-image: url(${listen});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Home = () => (
    <Background>
        <Content>
            <Title>Do you use YouTube for listening podcasts?</Title>
            <SubTitle>
                * or anything else that doesn’t require to focus on video
            </SubTitle>
            <Play />
            <Listen />
        </Content>
    </Background>
);

export default Home;
