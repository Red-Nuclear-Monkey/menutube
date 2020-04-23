import React from 'react';
import styled from 'styled-components';
import FontStyle from './fontStyle';
// import Plyr from 'plyr';

const Background = styled.div`
    position: relative;
    height: 100vh;

    .blur {
        position: absolute;
        z-index: 1;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.redOrange};
        opacity: .85;
    }

    #video-background {
        position: relative;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 1500ms ease-in;
        will-change: opacity;
    }

    #video-background.visible {
        opacity: 1;
    }
`;

const Content = styled.div`
    position: absolute;
    top: 0;
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

class Download extends React.Component {
    componentDidMount() {
        if (typeof window !== 'undefined') {
            const Plyr = require('plyr');
            const player = new Plyr('#player', {
                autoplay: true,
                muted: true,
                loop: { active: true },
                ratio: '16:9',
                controls: false
            });
            player.on('play', () => {
                const video = document.querySelector('#video-background');
                video.classList.add('visible');
            });
        }
    }

    render() {
        return (
            <Background id="download">
                <div className="blur" />
                <div id="video-background">
                    <div
                        id="player"
                        data-plyr-provider="vimeo"
                        data-plyr-embed-id="45817468"
                    />
                </div>
                <Content>
                    <Title>MenuTube</Title>
                    <SubTitle>
                        is totally <span className="bold-text">free</span>!
                    </SubTitle>
                    <Sentence>
                        So what are you waiting to put an entire full functional
                        YouTube website into your macOS’s menu bar?
                    </Sentence>
                    <Release>Get the last release</Release>
                    <DownloadButton>DOWNLOAD</DownloadButton>
                </Content>
            </Background>
        );
    }
}

export default Download;
