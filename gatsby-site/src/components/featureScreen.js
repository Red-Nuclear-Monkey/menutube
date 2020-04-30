import React from 'react';
import styled from 'styled-components';
import FontStyle from './fontStyle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gatsbyastro from '../images/gatsby-astronaut.png';
import { sizeMediaQueries } from '../utils/responsive';

const Background = styled.div`
    max-height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const BlockContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const RowTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Title = styled.div`
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.thirdHeader,
        900
    )};
`;

const DecorationTitle = styled.div`
    ${FontStyle(
        props => props.theme.colors.redOrange,
        props => props.theme.fontsize.thirdHeader,
        900
    )};
`;

const Carousel = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    .slick-slider {
        width: 90%;
    }

    .slick-next {
        right: 1rem;
    }

    .slick-prev {
        @media (max-width: ${sizeMediaQueries.tabletPortrait}) {
            left: -1rem;
        }
        @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
            left: -0.5rem;
        }
    }

    .slick-prev::before {
        color: ${props => props.theme.colors.redOrange};
        font-size: 4rem;
    }

    .slick-next::before {
        color: ${props => props.theme.colors.redOrange};
        font-size: 4rem;
    }

    .slick-dots {
        bottom: -5rem;
        color: red;

        li button::before {
            color: ${props => props.theme.colors.redOrange};
            font-size: 1rem;
            opacity: .5;
        }

        li.slick-active button::before {
            color: ${props => props.theme.colors.redOrange};
            font-size: 1rem;
            opacity: 1;
        }
    }

    .slick-list {
        margin: 0 5rem;
    }
`;

const Item = styled.div`
    color: black;
    text-align: center;
`;

const TextCarousel = styled.div`
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.thirdHeader,
        400,
        'normal',
        'all-small-caps'
    )};
    margin: 2rem 0;
`;

const GatsbyAstro = styled.div`
    width: 15rem;
    height: 15rem;
    justify-content: center;
    margin: 0 auto;
    background-image: url(${gatsbyastro});
    background-repeat: no-repeat;
    background-size: contain;
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                mobileFirst: true,
                slidesToScroll: 2,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                adaptiveHeight: true,
                rows: 2
            }
        }
    ]
};

const Feature = () => (
    <Background id="features">
        <BlockContainer>
            <RowTitle>
                <DecorationTitle>-</DecorationTitle>
                <Title>FEATURES</Title>
                <DecorationTitle>-</DecorationTitle>
            </RowTitle>
            <Carousel>
                <Slider {...settings}>
                    <Item>
                        <GatsbyAstro />
                        <TextCarousel>Item 1</TextCarousel>
                    </Item>
                    <Item>
                        <GatsbyAstro />
                        <TextCarousel>Item 2</TextCarousel>
                    </Item>
                    <Item>
                        <GatsbyAstro />
                        <TextCarousel>Item 3</TextCarousel>
                    </Item>
                    <Item>
                        <GatsbyAstro />
                        <TextCarousel>Item 4</TextCarousel>
                    </Item>
                    <Item>
                        <GatsbyAstro />
                        <TextCarousel>Item 5</TextCarousel>
                    </Item>
                    <Item>
                        <GatsbyAstro />
                        <TextCarousel>Item 6</TextCarousel>
                    </Item>
                </Slider>
            </Carousel>
        </BlockContainer>
    </Background>
);

export default Feature;
