import React from 'react';
import styled from 'styled-components';
import rednuc from '../images/rednuclear-monkey.png';
import github from '../images/github.png';

const Background = styled.div`
    max-height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const BlockContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15rem 0;
`;

const ColumnTitleContent = styled.div`
    width: 50%;
    flex-direction: column;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.black};
    font-size: 3rem;
`;

const Text = styled.div`
    width: 80%;
    color: ${props => props.theme.colors.black};
`;

const ColumnImageOneText = styled.div`
    width: 13rem;
    height: 18rem;
    flex-direction: column;
    margin-top: 3rem;
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: .8rem;
`;

const GitHub = styled.div`
    width: 7rem;
    height: 7rem;
    margin: 2rem auto;
    background-image: url(${github});
    background-repeat: no-repeat;
    background-size: contain;
`;

const ImageText = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;

const ColumnImageTwo = styled.div`
    width: 15rem;
    height: 7rem;
    flex-direction: column;
    margin-top: 3rem;
    margin-left: 5rem;
    background-color: ${props => props.theme.colors.black};
    border-radius: .8rem;
`;

const RedNuclearMonkey = styled.div`
    width: 10rem;
    height: 3rem;
    margin: 2rem auto;
    background-image: url(${rednuc});
    background-repeat: no-repeat;
    background-size: contain;
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
