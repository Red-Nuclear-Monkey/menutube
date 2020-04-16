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
    height: 50vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ColumnTitleContent = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 40%;
    
`;

const Title = styled.div`
    color: ${props => props.theme.colors.black};
    font-size: 3rem;
`;

const Text = styled.div`
    color: ${props => props.theme.colors.black};
`;

const ColumnImageOneText = styled.div`
    width: 13rem;
    height: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 2rem;
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: .8rem;
`;

const GitHub = styled.div`
    width: 7rem;
    height: 7rem;
    background-image: url(${github});
    background-repeat: no-repeat;
    background-size: contain;
`;

const ImageText = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: bold;
`;

const ColumnImageTwo = styled.div`
    width: 15rem;
    height: 7rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.black};
    border-radius: .8rem;
`;

const RedNuclearMonkey = styled.div`
    width: 10rem;
    height: 3rem;
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
