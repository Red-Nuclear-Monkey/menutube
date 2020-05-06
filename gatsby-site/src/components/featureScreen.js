import React from 'react';
import styled from 'styled-components';
import { FontStyle } from './cssStyle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import search from '../images/search-icon.svg';
import keyboard from '../images/keyboard-icon.svg';
import listen from '../images/listen-icon.svg';
import content from '../images/content-icon.svg';
import live from '../images/live-icon.svg';
import ui from '../images/ui-icon.svg';
import { sizeMediaQueries } from '../utils/responsive';

const Background = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.white};
`;

const BlockContainer = styled.div`
    display: flex;
    height: 100%;
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
        @media (max-width: ${sizeMediaQueries.tabletPortrait}) {
            right: -1rem;
        }
    }

    .slick-arrow {
        width: 4rem;
        height: 4rem;
    }

    .slick-prev {
        @media (max-width: ${sizeMediaQueries.tabletPortrait}) {
            left: -1rem;
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
        color: ${props => props.theme.colors.redOrange};

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
        props => props.theme.fontsize.fourthHeader,
        400,
        'normal',
        'all-small-caps'
    )};
    width: 90%;
    height: 5rem;
    margin: 2rem auto;
    line-height: 1.8rem;
`;

const Icon = styled.div`
    width: 15rem;
    height: 15rem;
    justify-content: center;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: contain;

    &.icon-1 {
        background-image: url(${search});
    }

    &.icon-2 {
        background-image: url(${listen});
    }

    &.icon-3 {
        background-image: url(${content});
    }

    &.icon-4 {
        background-image: url(${keyboard});
    }

    &.icon-5 {
        background-image: url(${ui});
    }

    &.icon-6 {
        background-image: url(${live});
    }
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
                        <Icon className="icon-1" />
                        <TextCarousel>
                            Browse mobile or desktop versions
                        </TextCarousel>
                    </Item>
                    <Item>
                        <Icon className="icon-2" />
                        <TextCarousel>
                            Listen in background or pin on top of all windows
                        </TextCarousel>
                    </Item>
                    <Item>
                        <Icon className="icon-3" />
                        <TextCarousel>
                            Enjoy endless amount of content
                        </TextCarousel>
                    </Item>
                    <Item>
                        <Icon className="icon-4" />
                        <TextCarousel>
                            Control media playback using keyboard
                        </TextCarousel>
                    </Item>
                    <Item>
                        <Icon className="icon-5" />
                        <TextCarousel>Simple and intuitive UI</TextCarousel>
                    </Item>
                    <Item>
                        <Icon className="icon-6" />
                        <TextCarousel>Watch live</TextCarousel>
                    </Item>
                </Slider>
            </Carousel>
        </BlockContainer>
    </Background>
);

export default Feature;
