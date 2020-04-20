import React from 'react';
import styled from 'styled-components';
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

const DownloadButton = styled.button`
    width: 20rem;
    height: 3.5rem;
    border: none;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: ${props =>
        props.theme.borderRadius.buttonBorderRadiusRounded};
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.buttonContent,
        700
    )};
    cursor: pointer;
    text-align: center;
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
                <DownloadButton>GET THE LAST RELEASE</DownloadButton>
            </Content>
            <Screenshots />
        </BlockContainer>
    </Background>
);

export default Product;
