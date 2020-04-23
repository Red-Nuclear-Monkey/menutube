import React from 'react';
import styled from 'styled-components';
import menutube from '../images/menutube-play.png';
import { Link } from 'react-scroll';

const BlockContainer = styled.div`
    position: fixed;
    z-index: 3;
    display: flex;
    width: 100%;
    height: 5rem;
    flex-direction: row;
    justify-content: center;
    font-size: ${props => props.theme.fontsize.navTitles};

    .nav-bar {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: transparent;
        cursor: pointer;
        opacity: 1;
        transition: all 400ms ease-in-out;

        .active {
            border-bottom: solid 2px red;
            color: ${props => props.theme.colors.red};
        }

        a {
            margin: 0 3rem;
        }

        a:hover {
            color: ${props => props.theme.colors.red};
        }
    }

    .nav-bar.scrolling {
        background: rgb(0, 0, 0, .95);
        color: white;
    }
`;

const Logo = styled.div`
    width: 4rem;
    height: 4rem;
    background-image: url(${menutube});
    background-repeat: no-repeat;
    background-size: contain;
`;

class Nav extends React.Component {
    listenScrollEvent = () => {
        const heightPourcentage = window.document.body.scrollHeight * 0.02;
        const nav = document.querySelector('.nav-bar');
        if (window.scrollY > heightPourcentage) {
            nav.classList.add('scrolling');
        } else if (
            window.scrollY <= 100 &&
            nav.classList.contains('scrolling')
        ) {
            nav.classList.remove('scrolling');
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    render() {
        return (
            <BlockContainer>
                <div className="nav-bar">
                    <Link
                        activeClass="logo"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Logo />
                    </Link>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        HOME
                    </Link>
                    <Link
                        activeClass="active"
                        to="product"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        PRODUCT
                    </Link>
                    <Link
                        activeClass="active"
                        to="features"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        FEATURES
                    </Link>
                    <Link
                        activeClass="active"
                        to="download"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        DOWNLOAD
                    </Link>
                    <Link
                        activeClass="active"
                        to="github"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        GITHUB
                    </Link>
                    <Link
                        activeClass="active-support"
                        to="support"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        SUPPORT
                    </Link>
                </div>
            </BlockContainer>
        );
    }
}

export default Nav;
