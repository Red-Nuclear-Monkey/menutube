import React from 'react';
import styled from 'styled-components';
import FontStyle from './fontStyle';

const Background = styled.div`
    height: 100vh;

    .blur {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.redOrange};
        opacity: .75;
    }

    .video-background {
        position: fixed;
        z-index: -99;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #000;
    }

    .video-foreground,
    .video-background iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
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
    z-index: 2;
`;

const SubTitle = styled.div`
    z-index: 2;
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
    z-index: 2;
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
    z-index: 2;
    margin-top: ${props => props.theme.marginTop.mediumSpace};
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.fourthHeader,
        700
    )};
`;

const DownloadButton = styled.button`
    z-index: 2;
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

    :hover {
        transform: scale(1.05);
    }
`;

const Download = () => (
    <Background id="download">
        <div className="blur" />
        <div className="video-background">
            <div className="video-foreground">
                <iframe
                    title="video"
                    src="https://www.youtube.com/embed/oG7Tj5P5F14?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=oG7Tj5P5F14"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>
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
