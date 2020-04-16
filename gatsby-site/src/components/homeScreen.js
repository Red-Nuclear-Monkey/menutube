import React from 'react';
import styled from 'styled-components';
import play from '../images/playbutton.png';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const Content = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 60%;
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontsize.secondHeader};
    font-weight: 300;
    text-align: center;

    b {
        font-weight: 400;
    }
`;

const SubTitle = styled.div`
    margin-top: ${props => props.theme.marginTop.smallSpace};
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontsize.default};
    font-style: italic;
    font-weight: 300;
`;

const Play = styled.div`
    width: 15rem;
    height: 10rem;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-image: url(${play});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Home = () => (
    <Background>
        <Content>
            <Title>
                Do you use YouTube for listening <b>podcasts</b>?
            </Title>
            <SubTitle>
                * or anything else that doesn’t require to focus on video
            </SubTitle>
            <Play />
        </Content>
    </Background>
);

export default Home;
