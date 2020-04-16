import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    max-height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const BlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;
`;

const RowTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 4rem;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.black};
    font-size: 5rem;
`;

const DecorationTitle = styled.div`
    color: ${props => props.theme.colors.redOrange};
    font-size: 5rem;
`;

const Carousel = styled.div`
    padding: 5rem 0;
`;

const Feature = () => (
    <Background>
        <BlockContainer>
            <RowTitle>
                <DecorationTitle>-</DecorationTitle>
                <Title>Features</Title>
                <DecorationTitle>-</DecorationTitle>
            </RowTitle>
            <Carousel>IMPLEMENT CAROUSEL</Carousel>
        </BlockContainer>
    </Background>
);

export default Feature;
