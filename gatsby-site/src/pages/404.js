import React from 'react';
import styled from 'styled-components';
import Theme from '../components/theme';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { FocusStyle, FontStyle } from '../components/cssStyle';
import { sizeMediaQueries } from '../utils/responsive';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const Content = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Title = styled.div`
    ${FontStyle(
        props => props.theme.colors.redOrange,
        props => props.theme.fontsize.mainHeader,
        300
    )};

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        font-size: ${props => props.theme.fontsize.secondHeader};
    }
`;

const SubTitle = styled.div`
    width: 80%;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    text-align: center;
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.thirdHeader,
        300,
        'all-small-caps'
    )};

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        font-size: ${props => props.theme.fontsize.defaultMobilePortrait};
    }
`;

const Sentence = styled.div`
    width: 85%;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.default,
        300,
        'normal'
    )};

    @media only screen and (max-device-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 90%;
        font-size: ${props => props.theme.fontsize.default};
    }
`;

const Homepage = styled.button`
    width: 15rem;
    height: 3.5rem;
    border: ${props => props.theme.colors.redOrange} 2px solid;
    margin-top: ${props => props.theme.marginTop.smallSpace};
    background-color: ${props => props.theme.colors.white};
    border-radius: ${props =>
        props.theme.borderRadius.buttonBorderRadiusCircle};
    ${FontStyle(
        props => props.theme.colors.redOrange,
        props => props.theme.fontsize.buttonContent,
        400
    )};
    cursor: pointer;

    :hover {
        border: none;
        background-color: ${props => props.theme.colors.redOrange};
        color: ${props => props.theme.colors.white};
    }

    :focus {
        ${FocusStyle};
    }
`;

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Theme>
            <Background>
                <Content>
                    <Title>404</Title>
                    <SubTitle>OOPS! NOTHING WAS FOUND</SubTitle>
                    <Sentence>
                        The page you are looking for might not exist or is
                        temporarily unavailable.
                    </Sentence>
                    <Homepage
                        onClick={e => {
                            e.preventDefault();
                            window.open(
                                'https://menutube.rednuclearmonkey.com/',
                                '_blank'
                            );
                        }}
                    >
                        HOMEPAGE
                    </Homepage>
                </Content>
            </Background>
        </Theme>
    </Layout>
);

export default NotFoundPage;
