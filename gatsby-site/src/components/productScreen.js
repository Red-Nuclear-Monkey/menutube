import React from 'react';
import styled from 'styled-components';
import appleWhite from '../images/apple-donwload-white.svg';
import screenshots from '../images/screenshots.png';
import FontStyle from './fontStyle';

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
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.mainHeader,
        700
    )};
`;

const SubTitle = styled.div`
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.secondHeader,
        300
    )};
`;

const Sentence = styled.div`
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.default,
        300
    )};
`;

const AppleDonwloadWhite = styled.div`
    width: 15rem;
    height: 10rem;
    margin-top: ${props => props.theme.marginTop.smallSpace};
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
