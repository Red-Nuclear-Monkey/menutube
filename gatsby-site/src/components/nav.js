import React from 'react';
import styled from 'styled-components';
import menutube from '../images/menutube-play.png';
import { Link } from 'react-scroll';
import { sizeMediaQueries } from '../utils/responsive';
import { FontStyle } from './cssStyle';
import firebase from 'gatsby-plugin-firebase';

const BlockContainer = styled.div`
    position: fixed;
    z-index: 3;
    width: 100%;

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

        @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
            transition: none;
        }

        a:hover {
            color: ${props => props.theme.colors.red};
        }
    }

    .nav-bar.scrolling {
        background: rgb(0, 0, 0, 0.95);
        color: white;

        @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
            color: ${props => props.theme.colors.black};
        }

        .logo-title {
            color: ${props => props.theme.colors.white};
        }
    }

    .nav-color.active {
        color: ${props => props.theme.colors.red};
    }

    .nav-titles {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        font-size: ${props => props.theme.fontsize.navTitles};

        @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
            display: none;
        }
    }

    .nav-bar.open-menu {
        height: 100vh;
        background-color: ${props => props.theme.colors.white};

        .nav-container {
            height: 100%;
        }

        .nav-titles {
            display: flex;
            width: 100%;
            height: 100%;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: ${props => props.theme.fontsize.thirdHeader};
            text-align: center;

            .nav-color.active {
                background-color: ${props => props.theme.colors.red};
                color: ${props => props.theme.colors.white};
            }
        }

        .logo-title {
            color: ${props => props.theme.colors.black};
        }

        a {
            width: 40%;
            margin: 2rem 0;
        }
    }
`;

const NavContainer = styled.div`
    display: flex;
    max-height: 100vh;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 100%;
        flex-direction: column;
    }
`;

const MenuLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &.position.fixed {
        display: none;
    }

    @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 100%;
        padding: 0 1rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LogoTitle = styled.div`
    display: none;
    ${FontStyle(
        props => props.theme.colors.black,
        props => props.theme.fontsize.fourthHeader,
        700
    )};

    @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
        position: relative;
        top: 0.125rem;
        display: flex;
    }

    @media (min-width: ${sizeMediaQueries.mobileLandscape}) and (max-width: ${sizeMediaQueries.tabletLandscape}) {
        font-size: ${props => props.theme.fontsize.fourthHeader};
    }
`;

const Logo = styled.div`
    width: 4rem;
    height: 4rem;
    background-image: url(${menutube});
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: ${sizeMediaQueries.mobileLandscape}) and (max-width: ${sizeMediaQueries.tabletLandscape}) {
        width: 5rem;
        height: 5rem;
    }
`;

const MenuLogo = styled.div`
    display: none;
    width: 2.5rem;
    height: 2.5rem;

    @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
        display: flex;

        img {
            margin: 0;
        }
    }
`;

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.scrollAnalytics = false;
        this.el = React.createRef();
        this.state = {
            menuButton: 'menu-black.svg'
        };
    }

    onMenuClick() {
        if (window.innerWidth <= parseInt(sizeMediaQueries.tabletLandscape)) {
            const el = this.el.current;
            const nav = document.querySelector('.nav-bar');

            this.setState(
                {
                    menuButton: el.classList.contains('open-menu')
                        ? nav.classList.contains('scrolling')
                            ? 'menu-white.svg'
                            : 'menu-black.svg'
                        : 'close-menu.svg'
                },
                () => {
                    this.el.current.classList.toggle('open-menu');
                }
            );
        }
    }

    listenScrollEvent = () => {
        const heightPercentageNav = window.document.body.scrollHeight * 0.02;
        const heightPercentageAnalytics =
            window.document.body.scrollHeight * 0.1;
        const nav = document.querySelector('.nav-bar');
        const el = this.el.current;
        if (
            window.scrollY > heightPercentageNav &&
            !el.classList.contains('open-menu')
        ) {
            nav.classList.add('scrolling');
            this.setState({
                menuButton: 'menu-white.svg'
            });
        } else if (
            window.scrollY <= heightPercentageNav &&
            nav.classList.contains('scrolling')
        ) {
            nav.classList.remove('scrolling');
            this.setState({
                menuButton: 'menu-black.svg'
            });
        }

        if (
            !this.scrollAnalytics &&
            window.scrollY > heightPercentageAnalytics
        ) {
            firebase.analytics().logEvent('user-scroll-10-percent');
            this.scrollAnalytics = true;
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    render() {
        return (
            <BlockContainer>
                <div {...this.props} className="nav-bar" ref={this.el}>
                    <NavContainer className="nav-container">
                        <MenuLogoContainer className="position">
                            <LogoContainer>
                                <LogoTitle className="logo-title">
                                    MenuTube
                                </LogoTitle>
                                <Logo />
                            </LogoContainer>
                            <MenuLogo onClick={this.onMenuClick.bind(this)}>
                                <img
                                    src={`${this.state.menuButton}`}
                                    alt="menu-button"
                                />
                            </MenuLogo>
                        </MenuLogoContainer>
                        <div className="nav-titles">
                            <Link
                                className="nav-color"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={this.onMenuClick.bind(this)}
                            >
                                HOME
                            </Link>
                            <Link
                                className="nav-color"
                                activeClass="active"
                                to="product"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={this.onMenuClick.bind(this)}
                            >
                                PRODUCT
                            </Link>
                            <Link
                                className="nav-color"
                                activeClass="active"
                                to="features"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={this.onMenuClick.bind(this)}
                            >
                                FEATURES
                            </Link>
                            <Link
                                className="nav-color"
                                activeClass="active"
                                to="download"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={this.onMenuClick.bind(this)}
                            >
                                DOWNLOAD
                            </Link>
                            <Link
                                className="nav-color"
                                activeClass="active"
                                to="github"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={this.onMenuClick.bind(this)}
                            >
                                GITHUB
                            </Link>
                            <Link
                                className="nav-color"
                                activeClass="active"
                                to="support"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={this.onMenuClick.bind(this)}
                            >
                                SUPPORT
                            </Link>
                        </div>
                    </NavContainer>
                </div>
            </BlockContainer>
        );
    }
}

export default Nav;
