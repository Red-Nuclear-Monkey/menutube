import React from 'react';
import styled from 'styled-components';
import appleWhite from '../images/apple-donwload-white.svg';
import screenshots from '../images/screenshots.png';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.black};
`;

const BlockContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
   
`;

const Title = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 8rem;
`;

const SubTitle = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 4rem;
    font-weight: lighter;
`;

const Sentence = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-style: italic;
    font-weight: lighter;
`;

const AppleDonwloadWhite = styled.div`
    width: 15rem;
    height: 10rem;
    margin-top: 1rem;
    background-image: url(${appleWhite});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Screenshots = styled.div`
    display: flex;
    width: 40rem;
    height: 40rem;
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
