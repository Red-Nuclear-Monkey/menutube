import React from 'react';
import styled from 'styled-components';
import { FocusStyle, FontStyle } from './cssStyle';
import triangles from '../images/background-triangle.jpg';
import { sizeMediaQueries } from '../utils/responsive';

const Background = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;

    @media (pointer: coarse) {
        height: 100vh;
    }

    .blur {
        position: absolute;
        z-index: 1;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(211, 92, 80, 0.85);
    }

    #image-background {
        display: none;

        @media (pointer: coarse) {
            display: flex;
            width: 100%;
            height: 100%;
            background-image: url(${triangles});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    #video-background {
        position: relative;
        top: 0;
        width: 177.77777778vh;
        min-width: 100%;
        height: 100%;
        min-height: 56.25vw;
        opacity: 0;
        transition: opacity 1500ms ease-in;
        will-change: opacity;

        @media (pointer: coarse) {
            display: none;
        }
    }

    #video-background.visible {
        opacity: 1;
    }
`;

const Content = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    height: 100%;
    width: 100%;
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
        props => props.theme.fontsize.thirdHeader,
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

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 17rem;
        font-size: ${props => props.theme.fontsize.fourthHeader};
    }

    :hover {
        transform: scale(1.05);
    }

    :focus {
        ${FocusStyle};
    }
`;

class Download extends React.Component {
    isMobile() {
        return !matchMedia('(pointer:coarse)').matches;
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            const Plyr = require('plyr');
            const player = new Plyr('#player', {
                loop: { active: true },
                muted: true,
                autoplay: true,
                storage: { enabled: false },
                controls: false,
                enabled: this.isMobile()
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
                <div id="image-background" />
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
                        is absolutely <span className="bold-text">free</span>!
                    </SubTitle>
                    <Sentence>
                        Are you ready to put an entire full functional YouTube
                        website into your macOS’s menu bar?
                    </Sentence>
                    <DownloadButton
                        onClick={e => {
                            e.preventDefault();
                            window.open(
                                'https://github.com/edanchenkov/MenuTube/releases',
                                '_blank'
                            );
                        }}
                    >
                        DOWNLOAD
                    </DownloadButton>
                </Content>
            </Background>
        );
    }
}

export default Download;
