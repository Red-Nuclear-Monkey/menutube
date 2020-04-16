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
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.mainHeader}rem;
`;

const SubTitle = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.thirdHeader}rem;
    font-weight: 100;
`;

const Sentence = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.default}rem;
    font-style: italic;
    font-weight: 100;
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
