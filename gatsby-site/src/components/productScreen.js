import React from 'react';
import styled from 'styled-components';
import screenshots from '../images/screenshots.png';
import { FocusStyle, FontStyle } from './cssStyle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { sizeMediaQueries } from '../utils/responsive';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.black};
`;

const BlockContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: ${sizeMediaQueries.tabletPortrait}) and (orientation: portrait) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;

    @media (max-width: ${sizeMediaQueries.tabletPortrait}) and (orientation: portrait) {
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

    @media only screen and (max-device-width: ${sizeMediaQueries.mobileLandscape}) {
        font-size: ${props => props.theme.fontsize.defaultMobilePortrait};
    }

    @media only screen and (min-device-width: ${sizeMediaQueries.mobileLandscape}) {
        font-size: ${props => props.theme.fontsize.defaultMobilePortrait};
    }
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

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 27rem;
        font-size: ${props => props.theme.fontsize.fourthHeader};
    }

    :hover {
        transform: scale(1.05);
    }

    :focus {
        ${FocusStyle};
    }
`;

const Screenshots = styled.div`
    display: flex;
    width: 40rem;
    height: 40rem;
    background-image: url(${screenshots});
    background-repeat: no-repeat;
    background-size: contain;

    @media (max-width: ${sizeMediaQueries.tabletPortrait}) and (orientation: portrait) {
        width: 27rem;
        height: 27rem;
    }

    @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 32rem;
        height: 32rem;
    }

    @media (min-width: 768px) and (max-width: 950px) {
        width: 20rem;
        height: 20rem;
    }
`;

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: '200'
        };
    }

    componentDidMount() {
        this.setState({ offset: window.innerHeight * 0.85 }, () => {
            Aos.init();
        });
    }

    render() {
        return (
            <Background id="product">
                <BlockContainer
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-offset={this.state.offset}
                >
                    <Content>
                        <SubTitle>Use</SubTitle>
                        <Title>MenuTube</Title>
                        <Sentence>YouTube into your macOS menu bar</Sentence>
                        <DownloadButton
                            onClick={e => {
                                e.preventDefault();
                                window.open(
                                    'https://github.com/edanchenkov/MenuTube/releases',
                                    '_blank'
                                );
                            }}
                        >
                            GET THE LAST RELEASE
                        </DownloadButton>
                    </Content>
                    <Screenshots />
                </BlockContainer>
            </Background>
        );
    }
}

export default Product;
