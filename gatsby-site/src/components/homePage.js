import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background: white;
    min-height: 100vh;
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    text-align: center;
    padding-top: 17rem;
`;

const Title = styled.h1`
    color: pink;
    font-size: 5rem;
    padding: 0 18rem 0 18rem;
`;

const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-style: italic;
    font-weight: normal;
    margin-top: -1.5rem;
`;

const Home = () => (
    <Background>
        <Content>
            <Title>Do you use YouTube for listening podcasts?</Title>
            <SubTitle>
                * or anything else that doesn’t require to focus on video
            </SubTitle>
        </Content>
    </Background>
);

export default Home;
