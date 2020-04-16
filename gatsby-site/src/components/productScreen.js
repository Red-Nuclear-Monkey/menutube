import React from 'react';
import styled from 'styled-components';
import appleWhite from '../images/apple-donwload-white.svg';
import screenshots from '../images/screenshots.png';

const Background = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    background: ${props => props.theme.colors.black};
`;

const BlockContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    padding-top: 17rem;
    margin-left: 10rem;
    text-align: center;
`;

const Title = styled.div`
    padding: 0 2rem;
    color: ${props => props.theme.colors.white};
    font-size: 8rem;
`;

const SubTitle = styled.div`
    margin-right: 30rem;
    color: ${props => props.theme.colors.white};
    font-size: 4rem;
    font-weight: lighter;
`;

const Sentence = styled.div`
    padding-left: 6rem;
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-style: italic;
    font-weight: lighter;
`;

const AppleDonwloadWhite = styled.div`
    width: 15rem;
    height: 10rem;
    margin-top: 1rem;
    margin-left: 17rem;
    background-image: url(${appleWhite});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Screenshots = styled.div`
    display: flex;
    width: 40rem;
    height: 40rem;
    margin: 12rem auto 0 auto;
    background-image: url(${screenshots});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Product = () => (
    <Background>
        <BlockContainer>
            <Content>
                <SubTitle>Use</SubTitle>
                <Title>MenuTube</Title>
                <Sentence>YouTube into your macOS menu bar</Sentence>
                <AppleDonwloadWhite />
            </Content>
            <Screenshots />
        </BlockContainer>
    </Background>
);

export default Product;
