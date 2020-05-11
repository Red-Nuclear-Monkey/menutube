import React from 'react';
import styled from 'styled-components';
import { FocusStyle, FontStyle } from './cssStyle';
import { sizeMediaQueries } from '../utils/responsive';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const Content = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.thirdHeader,
        400
    )};
    text-align: center;
`;

const SubTitle = styled.div`
    width: 80%;
    margin-top: ${props => props.theme.marginTop.mediumSpace};
    text-align: center;
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.default,
        300
    )};

    .bold-text {
        font-weight: 500;
    }

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 90%;
        font-size: ${props => props.theme.fontsize.defaultMobileLandscape};
    }
`;

const Donate = styled.button`
    width: 10rem;
    height: 3rem;
    border: none;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: ${props =>
        props.theme.borderRadius.buttonBorderRadiusCircle};
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.buttonContent,
        700
    )};
    cursor: pointer;

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 12rem;
        font-size: ${props => props.theme.fontsize.fourthHeader};
    }

    :hover {
        transform: scale(1.1);
    }

    :focus {
        ${FocusStyle};
    }
`;

const BRTop = styled.div`
    position: relative;
    top: 7rem;
    width: 90%;
    height: 1px;
    border: 0;
    margin: 0 auto;
    background-image: -webkit-linear-gradient(left, #fff, #8c8b8b, #fff);
    background-image: -moz-linear-gradient(left, #fff, #8c8b8b, #fff);
    background-image: -ms-linear-gradient(left, #fff, #8c8b8b, #fff);
    background-image: -o-linear-gradient(left, #fff, #8c8b8b, #fff);
`;

const BRBottom = styled.div`
    position: relative;
    top: -7rem;
    width: 90%;
    height: 1px;
    border: 0;
    margin: 0 auto;
    background-image: -webkit-linear-gradient(left, #fff, #8c8b8b, #fff);
    background-image: -moz-linear-gradient(left, #fff, #8c8b8b, #fff);
    background-image: -ms-linear-gradient(left, #fff, #8c8b8b, #fff);
    background-image: -o-linear-gradient(left, #fff, #8c8b8b, #fff);
`;

const Support = () => (
    <Background id="support">
        <BRTop />
        <Content>
            <Title>You can help us to improve MenuTube!</Title>
            <Donate
                onClick={e => {
                    e.preventDefault();
                    window.open('https://www.paypal.me/EDanchenkov', '_blank');
                }}
            >
                DONATE
            </Donate>
            <SubTitle>WE APPRECIATE YOUR SUPPORT ❤️</SubTitle>
        </Content>
        <BRBottom />
    </Background>
);

export default Support;
