import React from 'react';
import styled from 'styled-components';
import play from '../images/playbutton.png';
import FontStyle from './fontStyle';

const Background = styled.div`
    height: 100vh;
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
    width: 60%;
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.secondHeader,
        300
    )};
    text-align: center;

    .bold-text {
        ${FontStyle(
            props => props.theme.colors.white,
            props => props.theme.fontsize.secondHeader,
            400
        )};
        background-color: ${props => props.theme.colors.red};
    }

    .bold-text::before {
        animation: animate infinite 10s;
        content: 'podcasts';
    }

    @keyframes animate {
        20% {
            content: 'podcasts';
        }

        50% {
            content: 'audiobooks';
        }

        100% {
            content: 'musics';
        }
    }
`;

const SubTitle = styled.div`
    margin-top: ${props => props.theme.marginTop.smallSpace};
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.default,
        300,
        'italic'
    )};
    font-weight: 300;
`;

const Play = styled.div`
    width: 15rem;
    height: 10rem;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-image: url(${play});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Home = () => (
    <Background>
        <Content>
            <Title>
                Do you use YouTube for listening{' '}
                <span className="bold-text"></span>?
            </Title>
            <SubTitle>
                * or anything else that doesn’t require to focus on video
            </SubTitle>
            <Play />
        </Content>
    </Background>
);

export default Home;
