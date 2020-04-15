import React from 'react';
import styled from 'styled-components';
import play from '../images/playbutton.png';
import listen from "../images/listen.png";

const Background = styled.div`
    background: ${props => props.theme.colors.white};
    min-height: 100vh;
    max-height: 100vh;
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    text-align: center;
    padding-top: 17rem;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.black};
    font-size: 5rem;
    padding: 0 18rem;
`;

const SubTitle = styled.div`
    font-size: 1.5rem;
    font-style: italic;
    font-weight: normal;
    color: ${props => props.theme.colors.black};
    padding-top: 1rem;
`;

const Play = styled.div`
    background-image: url(${play});
    background-repeat: no-repeat;
    background-size: contain;
    width: 15rem;
    height: 10rem;
    margin: 2rem auto 0 auto;

`;

const Listen = styled.div`
    background-image: url(${listen});
    background-repeat: no-repeat;
    background-size: contain;
    width: 20rem;
    height: 20rem;
    margin: 2rem auto 0 auto;
    position: relative;
    bottom: 10rem;
    left: 20rem;

`;

const Home = () => (
    <Background>
        <Content>
            <Title>Do you use YouTube for listening podcasts?</Title>
            <SubTitle>
                * or anything else that doesn’t require to focus on video
            </SubTitle>
            <Play/>
            <Listen/>
        </Content>
    </Background>
);

export default Home;
