import React from 'react';
import styled from 'styled-components';
import rednuc from '../images/rednuclear-monkey.png';
import github from '../images/github.png';

const Background = styled.div`
    background: ${props => props.theme.colors.white};
    max-height: 100vh;
`;

const BlockContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15rem 0;
`;

const ColumnTitleContent = styled.div`
    flex-direction: column;
    width: 50%;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.black};
    font-size: 3rem;
`;

const Text = styled.div`
    color: ${props => props.theme.colors.black};
    width: 80%;
`;

const ColumnImageOneText = styled.div`
    flex-direction: column;
    background-color: ${props => props.theme.colors.redOrange};
    margin-top: 3rem;
    height: 18rem;
    width: 13rem;
    border-radius: 0.8rem;
`;

const GitHub = styled.div`
    background-image: url(${github});
    background-repeat: no-repeat;
    background-size: contain;
    height: 7rem;
    width: 7rem;
    margin: 2rem auto;
`;

const ImageText = styled.div`
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
`;

const ColumnImageTwo = styled.div`
    flex-direction: column;
    background-color: ${props => props.theme.colors.black};
    margin-top: 3rem;
    height: 7rem;
    width: 15rem;
    border-radius: 0.8rem;
    margin-left: 5rem;
`;

const RedNuclearMonkey = styled.div`
    background-image: url(${rednuc});
    background-repeat: no-repeat;
    background-size: contain;
    height: 3rem;
    width: 10rem;
    margin: 2rem auto;
`;

const Github = () => (
    <Background>
        <BlockContainer>
            <ColumnTitleContent>
                <Title>GitHub</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </ColumnTitleContent>
            <ColumnImageOneText>
                <GitHub />
                <ImageText>OLD REPO</ImageText>
            </ColumnImageOneText>
            <ColumnImageTwo>
                <RedNuclearMonkey />
            </ColumnImageTwo>
        </BlockContainer>
    </Background>
);

export default Github;
