import React from 'react';
import styled from 'styled-components';
import FontStyle from './fontStyle';

const Background = styled.div`
    max-height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const Content = styled.div`
    display: flex;
    height: 100vh;
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
`;

const SubTitle = styled.div`
    width: 80%;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    text-align: center;
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.fourthHeader,
        300
    )};

    .bold-text {
        font-weight: 500;
    }
`;

const Sentence = styled.div`
    margin-top: ${props => props.theme.marginTop.smallSpace};
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.fourthHeader,
        100,
        'normal',
        'all-small-caps'
    )};
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

    :hover {
        transform: scale(1.1);
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
            <Title>Thanks for your support!</Title>
            <SubTitle>
                If you would like to be thankful for this tool, please{' '}
                <span className="bold-text">feel free</span> to donate.
            </SubTitle>
            <Sentence>Your donations help developers.</Sentence>
            <Donate>DONATE</Donate>
        </Content>
        <BRBottom />
    </Background>
);

export default Support;
