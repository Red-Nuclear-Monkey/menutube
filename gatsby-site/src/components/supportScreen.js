import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    max-height: 100vh;
    background: ${props => props.theme.colors.black};
`;

const Content = styled.div`
    display: flex;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.thirdHeader};
    font-weight: 400;
`;

const SubTitle = styled.div`
    margin-top: ${props => props.theme.marginTop.smallSpace};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.fourthHeader};
    font-weight: 300;

    b {
        font-weight: 500;
    }
`;

const Sentence = styled.div`
    margin-top: ${props => props.theme.marginTop.smallSpace};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.fourthHeader};
    font-variant: all-small-caps;
    font-weight: 100;
`;

const Donate = styled.button`
    width: 10rem;
    height: 3rem;
    border: none;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: ${props => props.theme.borderRadius.buttonBorderRadius};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    font-size: ${props => props.theme.fontsize.buttonContent};
    font-weight: 700;
`;

const Support = () => (
    <Background>
        <Content>
            <Title>Thanks for your support!</Title>
            <SubTitle>
                If you would like to be thankful for this tool, please{' '}
                <b>feel free</b> to donate.
            </SubTitle>
            <Sentence>Your donations help developers.</Sentence>
            <Donate>DONATE</Donate>
        </Content>
    </Background>
);

export default Support;
