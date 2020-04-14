import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background: black;
    min-height: 100vh;
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    text-align: center;
    padding-top: 17rem;
`;

const Title = styled.h1`
    color: white;
    font-size: 8rem;
    padding: 0 2rem 0 2rem;
`;

const SubTitle = styled.h2`
    color: white;
    font-size: 4rem;
    font-weight: lighter;
    margin-bottom: -5.5rem;
    padding-right: 27rem;
`;

const Sentence = styled.h3`
    color: white;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: lighter;
    padding-left: 6rem;
    margin-top: -5rem;
`;

const Product = () => (
    <Background>
        <Content>
            <SubTitle>Use</SubTitle>
            <Title>MiniTube</Title>
            <Sentence>YouTube into your macOS menu bar</Sentence>
        </Content>
    </Background>
);

export default Product;
