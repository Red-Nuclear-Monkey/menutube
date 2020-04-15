import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background: ${props => props.theme.colors.black};
    max-height: 100vh;
`;

const Content = styled.div`
    display: block;
    flex-direction: column;
    text-align: center;
    padding: 20rem 0;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 4rem;
    padding: 0 18rem;
`;

const SubTitle = styled.div`
    font-size: 3rem;
    font-weight: normal;
    color: ${props => props.theme.colors.white};
`;

const Sentence = styled.div`
    font-size: 1.5rem;
    font-weight: normal;
    color: ${props => props.theme.colors.white};
`;

const Donate = styled.button`
    background-color: ${props => props.theme.colors.redOrange};
    border: none;
    color: ${props => props.theme.colors.white};
    border-radius: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
    width: 10rem;
    height: 3rem;
`;

const Footer = styled.footer`
    background: ${props => props.theme.colors.black};
    color: white;
    text-align: center;
    padding-bottom: 1rem;
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
