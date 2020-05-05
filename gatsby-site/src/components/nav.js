import React from 'react';
import styled from 'styled-components';
import menutube from '../images/menutube-play.png';
import { Link } from 'react-scroll';
import { sizeMediaQueries } from '../utils/responsive';
import { FontStyle } from './cssStyle';

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

        @media (max-width: ${sizeMediaQueries.tabletLandscape}) {
            color: ${props => props.theme.colors.black};
        }

        .logo-title {
            color: ${props => props.theme.colors.white};
        }
    }

    .nav-color.active {
        border-bottom: solid 2px red;
        color: ${props => props.theme.colors.red};
    }

    .nav-titles {
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
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            margin-top: 5rem;
            font-size: ${props => props.theme.fontsize.fourthHeader};
        }

        .logo-title {
            color: black;
        }

        a {
            margin: 2rem 0;
        }
    }
`;

const NavContainer = styled.div`
    display: flex;
    max-height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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
        top: .125rem;
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
        this.el = React.createRef();
        this.state = {
            menuButton: 'menu-black.svg'
        };
    }

    onMenuClick() {
        if (window.innerWidth <= parseInt(sizeMediaQueries.tabletLandscape)) {
            const el = this.el.current;
            const nav = document.querySelector('.nav-bar');
            const body = document.querySelector('body');

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
                    if (!body.classList.contains('no-scroll')) {
                        body.classList.add('no-scroll');
                    } else {
                        body.classList.remove('no-scroll');
                    }
                }
            );
        }
    }

    listenScrollEvent = () => {
        const heightPercentage = window.document.body.scrollHeight * 0.02;
        const nav = document.querySelector('.nav-bar');
        const el = this.el.current;
        if (
            window.scrollY > heightPercentage &&
            !el.classList.contains('open-menu')
        ) {
            nav.classList.add('scrolling');
            this.setState({
                menuButton: 'menu-white.svg'
            });
        } else if (
            window.scrollY <= heightPercentage &&
            nav.classList.contains('scrolling')
        ) {
            nav.classList.remove('scrolling');
            this.setState({
                menuButton: 'menu-black.svg'
            });
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
                        <MenuLogoContainer>
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
