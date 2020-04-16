import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    max-height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const BlockContainer = styled.div`
    display: flex;
    max-height: 100vh;
    flex-direction: column;
    align-items: center;
`;

const RowTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: ${props => props.theme.marginTop.mediumSpace};
`;

const Title = styled.div`
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontsize.thirdHeader};
    font-weight: 900;
`;

const DecorationTitle = styled.div`
    color: ${props => props.theme.colors.redOrange};
    font-size: ${props => props.theme.fontsize.thirdHeader};
`;

const Carousel = styled.div`
    padding: 5rem 0;
`;

const Feature = () => (
    <Background>
        <BlockContainer>
            <RowTitle>
                <DecorationTitle>-</DecorationTitle>
                <Title>FEATURES</Title>
                <DecorationTitle>-</DecorationTitle>
            </RowTitle>
            <Carousel>IMPLEMENT CAROUSEL</Carousel>
        </BlockContainer>
    </Background>
);

export default Feature;
