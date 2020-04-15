import React from 'react';
import styled from 'styled-components';
import appleWhite from '../images/apple-donwload-white.svg';
import screenshots from '../images/screenshots.png';

const Background = styled.div`
    background: ${props => props.theme.colors.black};
    min-height: 100vh;
    max-height: 100vh;
`;

const BlockContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    text-align: center;
    padding-top: 17rem;
    margin-left: 10rem;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 8rem;
    padding: 0 2rem;
`;

const SubTitle = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 4rem;
    font-weight: lighter;
    margin-right: 30rem;
`;

const Sentence = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-style: italic;
    font-weight: lighter;
    padding-left: 6rem;
`;

const AppleDonwloadWhite = styled.div`
    background-image: url(${appleWhite});
    background-repeat: no-repeat;
    background-size: contain;
    width: 15rem;
    height: 10rem;
    margin-top: 1rem;
    margin-left: 17rem;
`;

const Screenshots = styled.div`
    background-image: url(${screenshots});
    display: flex;
    background-repeat: no-repeat;
    background-size: contain;
    width: 40rem;
    height: 40rem;
    margin: 12rem auto 0 auto;
`;

const Product = () => (
    <Background>
        <BlockContainer>
            <Content>
                <SubTitle>Use</SubTitle>
                <Title>MenuTube</Title>
                <Sentence>YouTube into your macOS menu bar</Sentence>
                <AppleDonwloadWhite/>
            </Content>
            <Screenshots/>
        </BlockContainer>
    </Background>
);

export default Product;
