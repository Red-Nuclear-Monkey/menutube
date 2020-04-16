import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    max-height: 100vh;
    background: ${props => props.theme.colors.black};
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    padding: 20rem 0;
    text-align: center;
`;

const Title = styled.div`
    padding: 0 18rem;
    color: ${props => props.theme.colors.white};
    font-size: 4rem;
`;

const SubTitle = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 3rem;
    font-weight: normal;
`;

const Sentence = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: normal;
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
`;

const Footer = styled.footer`
    padding-bottom: 1rem;
    background: ${props => props.theme.colors.black};
    color: white;
    text-align: center;
`;

const A = styled.a`
    color: ${props => props.theme.colors.blue};
`;

const Support = () => (
    <>
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
        <Footer>
            © 2020 Red Nuclear Monkey -{' '}
            <A href="https://www.rednuclearmonkey.com">rednuclearmonkey.com</A>
        </Footer>
    </>
);

export default Support;
