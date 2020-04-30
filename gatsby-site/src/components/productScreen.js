import React from 'react';
import styled from 'styled-components';
import screenshots from '../images/screenshots.png';
import FontStyle from './fontStyle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { sizeMediaQueries } from '../utils/responsive';

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

    @media (max-width: ${sizeMediaQueries.tabletPortrait}) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;

    @media (max-width: ${sizeMediaQueries.tabletPortrait}) {
        align-items: center;
        margin: 3rem 0;
    }
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

    :hover {
        transform: scale(1.05);
    }
`;

const Screenshots = styled.div`
    display: flex;
    width: 40rem;
    height: 40rem;
    background-image: url(${screenshots});
    background-repeat: no-repeat;
    background-size: contain;

    @media (max-width: ${sizeMediaQueries.tabletPortrait}) {
        width: 35rem;
        height: 35rem;
    }
`;

class Product extends React.Component {
    componentDidMount() {
        Aos.init();
    }

    render() {
        return (
            <Background id="product">
                <BlockContainer data-aos="zoom-in" data-aos-duration="1500">
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
    }
}

export default Product;
