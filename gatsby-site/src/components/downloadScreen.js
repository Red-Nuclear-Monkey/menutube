import React from 'react';
import styled from 'styled-components';
import appleblack from '../images/apple-download.svg';

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
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.mainHeader};
    font-weight: 700;
`;

const SubTitle = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.secondHeader};
    font-weight: 300;

    b {
        font-weight: 500;
    }
`;

const Sentence = styled.div`
    width: 85%;
    margin-top: ${props => props.theme.marginTop.mediumSpace};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.thirdHeader};
    font-weight: 100;
    text-align: center;
`;

const Release = styled.div`
    margin-top: ${props => props.theme.marginTop.mediumSpace};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.fourthHeader};
    font-weight: 700;
`;

const AppleDonwloadBlack = styled.div`
    width: 15rem;
    height: 10rem;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-image: url(${appleblack});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Download = () => (
    <Background>
        <Content>
            <Title>MenuTube</Title>
            <SubTitle>
                is totally <b>free</b>!
            </SubTitle>
            <Sentence>
                So what are you waiting to put an entire full functional YouTube
                website into your macOS’s menu bar?
            </Sentence>
            <Release>Get the last release</Release>
            <AppleDonwloadBlack />
        </Content>
    </Background>
);

export default Download;
