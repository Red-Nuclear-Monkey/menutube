import React from 'react';
import styled from 'styled-components';
import FontStyle from './fontStyle';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.redOrange};
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

    .bold-text {
        font-weight: 500;
    }
`;

const Sentence = styled.div`
    width: 85%;
    margin-top: ${props => props.theme.marginTop.mediumSpace};
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.thirdHeader,
        100
    )};
    text-align: center;
`;

const Release = styled.div`
    margin-top: ${props => props.theme.marginTop.mediumSpace};
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.fourthHeader,
        700
    )};
`;

const DownloadButton = styled.button`
    width: 10rem;
    height: 3rem;
    border: none;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-color: ${props => props.theme.colors.green};
    border-radius: ${props =>
        props.theme.borderRadius.buttonBorderRadiusCircle};
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.buttonContent,
        700
    )};
    cursor: pointer;
    text-align: center;
`;

const Download = () => (
    <Background>
        <Content>
            <Title>MenuTube</Title>
            <SubTitle>
                is totally <span className="bold-text">free</span>!
            </SubTitle>
            <Sentence>
                So what are you waiting to put an entire full functional YouTube
                website into your macOS’s menu bar?
            </Sentence>
            <Release>Get the last release</Release>
            <DownloadButton>DOWNLOAD</DownloadButton>
        </Content>
    </Background>
);

export default Download;
