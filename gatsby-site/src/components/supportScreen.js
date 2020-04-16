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
    font-size: ${props => props.theme.fontsize.secondHeader};
`;

const SubTitle = styled.div`
    margin-top: 1rem;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.thirdHeader};
`;

const Sentence = styled.div`
    margin-top: 1rem;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.default};
`;

const Donate = styled.button`
    width: 10rem;
    height: 3rem;
    border: none;
    margin-top: 1rem;
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: ${props => props.theme.borderRadius.buttonBorderRadius};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.buttonContent};
    font-weight: 700;
`;

const Support = () => (
    <Background>
        <Content>
            <Title>Thanks for your support!</Title>
            <SubTitle>
                If you would like to be thankful for this tool, please feel free
                to donate.
            </SubTitle>
            <Sentence>Your donations help developers.</Sentence>
            <Donate>DONATE</Donate>
        </Content>
    </Background>
);

export default Support;
