import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background: ${props => props.theme.colors.white};
    max-height: 100vh;
`;

const BlockContainer = styled.div`
    display: block;
    flex-direction: column;
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
    text-align: center;
    padding: 10rem 0;
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
