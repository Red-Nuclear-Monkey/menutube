import React from 'react';
import styled from 'styled-components';
import redNuclearLogo from '../images/rednuclear-monkey.png';
import githubLogo from '../images/github.png';
import { FocusStyle, FontStyle } from './cssStyle';
import 'aos/dist/aos.css';
import { sizeMediaQueries } from '../utils/responsive';

const Background = styled.div`
    padding: 5rem 0;
    background: ${props => props.theme.colors.white};
    height: 100%;
`;

const BlockContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: ${sizeMediaQueries.tabletPortrait}) {
        height: 100vh;
        flex-direction: column;
    }
`;

const ColumnTitleContent = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${sizeMediaQueries.tabletPortrait}) {
        width: 80%;
    }
`;

const Title = styled.div`
    border-bottom-width: 0.4rem;
    border-bottom-style: solid;
    border-bottom-color: ${props => props.theme.colors.redOrange};
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.secondHeader,
        900
    )};
`;

const Text = styled.div`
    margin-top: ${props => props.theme.marginTop.smallSpace};
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.default,
        300
    )};
    text-align: justify;

    span.highlight {
        background: rgba(211, 92, 80, 0.1);
    }

    span.bold {
        font-weight: 700;
    }

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        font-size: ${props => props.theme.fontsize.defaultMobilePortrait};
    }
`;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ColumnImageOneText = styled.a`
    display: flex;
    width: 13rem;
    height: 16rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: ${props => props.theme.marginTop.highSpace};
    margin-left: 6rem;
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: ${props => props.theme.borderRadius.cardBorderRadius};
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    text-decoration: none;

    :focus {
        ${FocusStyle};
    }

    :hover {
        transform: scale(1.1);
    }

    @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
        margin-left: 0;
    }
`;

const GitHub = styled.div`
    width: 7rem;
    height: 7rem;
    background-image: url(${githubLogo});
    background-repeat: no-repeat;
    background-size: contain;
`;

const ImageText = styled.div`
    ${FontStyle(
        props => props.theme.colors.white,
        props => props.theme.fontsize.default,
        700
    )};

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        font-size: ${props => props.theme.fontsize.defaultMobilePortrait};
    }
`;

const ColumnImageTwo = styled.a`
    display: flex;
    width: 15rem;
    height: 7rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${props => props.theme.marginTop.highSpace};
    margin-left: 4rem;
    background-color: ${props => props.theme.colors.black};
    border-radius: ${props => props.theme.borderRadius.cardBorderRadius};
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    text-decoration: none;

    :hover {
        transform: scale(1.1);
    }

    :focus {
        ${FocusStyle};
    }
`;

const RedNuclearMonkey = styled.div`
    width: 10rem;
    height: 3rem;
    margin-top: 0.5rem;
    background-image: url(${redNuclearLogo});
    background-repeat: no-repeat;
    background-size: contain;
`;

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: '0'
        };
    }

    componentDidMount() {
        this.setState({ offset: window.innerHeight * 0.5 });
    }

    render() {
        return (
            <Background id="github">
                <BlockContainer
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-offset={this.state.offset}
                >
                    <ColumnTitleContent>
                        <Title>GitHub</Title>
                        <Text>
                            <span className="bold">MenuTube</span> has already
                            existed for more than 3 years! You can find the old
                            GitHub repository. This tool is now developed by the
                            company{' '}
                            <span className="bold">Red Nuclear Monkey</span>.
                            <br /> <br />
                            Don't hesitate to take a look at our company by
                            visiting our website and leave a message or even
                            issues regarding MenuTube.{' '}
                            <span className="highlight">
                                We would love to hear them!
                            </span>
                        </Text>
                    </ColumnTitleContent>
                    <BoxContainer>
                        <ColumnImageOneText
                            href="https://github.com/edanchenkov/MenuTube"
                            target="_blank"
                            rel="noopener"
                        >
                            <GitHub />
                            <ImageText>OLD REPO</ImageText>
                        </ColumnImageOneText>
                        <ColumnImageTwo
                            href="https://rednuclearmonkey.com"
                            target="_blank"
                            rel="noopener"
                        >
                            <RedNuclearMonkey />
                        </ColumnImageTwo>
                    </BoxContainer>
                </BlockContainer>
            </Background>
        );
    }
}

export default Github;
