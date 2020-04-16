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
    font-size: 4rem;
`;

const SubTitle = styled.div`
    color: ${props => props.theme.colors.white};
    margin-top: 1rem;
    font-size: 3rem;
    font-weight: normal;
`;

const Sentence = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: normal;
    margin-top: 1rem;
`;

const Donate = styled.button`
    width: 10rem;
    height: 3rem;
    border: none;
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: 3rem;
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
`;

const Support = () => (
        <Background>
            <Content>
                <Title>Thanks for your support!</Title>
                <SubTitle>
                    If you would like to be thankful for this tool, please feel
                    free to donate.
                </SubTitle>
                <Sentence>Your donations help developers.</Sentence>
                <Donate>DONATE</Donate>
            </Content>
        </Background>
);

export default Support;
