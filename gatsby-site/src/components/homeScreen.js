import React from 'react';
import styled from 'styled-components';
import play from '../images/playbutton.png';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const Content = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 70rem;
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontsize.secondHeader}rem;
    text-align: center;
`;

const SubTitle = styled.div`
    margin-top: 1rem;
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontsize.default}rem;
    font-style: italic;
`;

const Play = styled.div`
    width: 15rem;
    height: 10rem;
    margin-top: 2rem;
    background-image: url(${play});
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
        </Content>
    </Background>
);

export default Home;
