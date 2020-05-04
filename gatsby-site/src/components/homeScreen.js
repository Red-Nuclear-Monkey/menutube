import React from 'react';
import styled from 'styled-components';
import play from '../images/playbutton.png';
import { FontStyle } from './cssStyle';
import { sizeMediaQueries } from '../utils/responsive';

const Background = styled.div`
    overflow: hidden;
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
        props => props.theme.fontsize.secondHeader,
        300
    )};
    text-align: center;

    span.typed-text {
        ${FontStyle(
            props => props.theme.colors.white,
            props => props.theme.fontsize.secondHeader,
            400
        )};
        background-color: ${props => props.theme.colors.red};
    }

    span.cursor {
        display: inline-block;
        width: .2rem;
        margin-right: .5rem;
        animation: blink 1s infinite;
        background-color: ${props => props.theme.colors.black};
    }

    span.cursor.typing {
        animation: none;
    }

    @keyframes blink {
        0% {
            background-color: ${props => props.theme.colors.black};
        }

        49% {
            background-color: ${props => props.theme.colors.black};
        }

        50% {
            background-color: transparent;
        }

        99% {
            background-color: transparent;
        }

        100% {
            background-color: ${props => props.theme.colors.black};
        }
    }
`;

const SubTitle = styled.div`
    width: 95%;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    font-weight: 300;
    text-align: center;
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.default,
        300,
        'italic'
    )};

    @media only screen and (max-device-width: ${sizeMediaQueries.mobileLandscape}) {
        font-size: ${props => props.theme.fontsize.defaultMobilePortrait};
    }

    @media only screen and (min-device-width: ${sizeMediaQueries.mobileLandscape}) {
        font-size: ${props => props.theme.fontsize.defaultMobilePortrait};
    }
`;

const Play = styled.div`
    width: 15rem;
    height: 10rem;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-image: url(${play});
    background-repeat: no-repeat;
    background-size: contain;
`;

class Home extends React.Component {
    componentDidMount() {
        const typedTextSpan = document.querySelector('.typed-text');
        const cursorSpan = document.querySelector('.cursor');

        const textArray = ['podcasts', 'audiobooks', 'music'];
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 1500; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains('typing')) {
                    cursorSpan.classList.add('typing');
                }
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(
                    charIndex
                );
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove('typing');
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains('typing')) {
                    cursorSpan.classList.add('typing');
                }
                typedTextSpan.textContent = textArray[textArrayIndex].substring(
                    0,
                    charIndex - 1
                );
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove('typing');
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) {
                    textArrayIndex = 0;
                }
                setTimeout(type, typingDelay + 1100);
            }
        }

        if (textArray.length) {
            setTimeout(type, newTextDelay + 250);
        }
    }

    render() {
        return (
            <Background id="home">
                <Content>
                    <Title>
                        Do you use YouTube for <br />
                        listening <span className="typed-text" />
                        <span className="cursor">&nbsp;</span>?
                    </Title>
                    <SubTitle>
                        * or anything else that doesn’t require to focus on
                        video
                    </SubTitle>
                    <Play />
                </Content>
            </Background>
        );
    }
}

export default Home;
