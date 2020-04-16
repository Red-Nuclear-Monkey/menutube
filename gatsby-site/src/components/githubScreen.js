import React from 'react';
import styled from 'styled-components';
import redNuclearLogo from '../images/rednuclear-monkey.png';
import githubLogo from '../images/github.png';

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
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontsize.secondHeader};
`;

const Text = styled.div`
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontsize.default};
    text-align: justify;
`;

const ColumnImageOneText = styled.div`
    display: flex;
    width: 13rem;
    height: 18rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 2rem;
    background-color: ${props => props.theme.colors.redOrange};
    border-radius: ${props => props.theme.borderRadius.cardBorderRadius};
`;

const GitHub = styled.div`
    width: 7rem;
    height: 7rem;
    background-image: url(${githubLogo});
    background-repeat: no-repeat;
    background-size: contain;
`;

const ImageText = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontsize.default};
    font-weight: 700;
`;

const ColumnImageTwo = styled.div`
    display: flex;
    width: 15rem;
    height: 7rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    background-color: ${props => props.theme.colors.black};
    border-radius: ${props => props.theme.borderRadius.cardBorderRadius};
`;

const RedNuclearMonkey = styled.div`
    width: 10rem;
    height: 3rem;
    background-image: url(${redNuclearLogo});
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
