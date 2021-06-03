import React, { useContext, useState, useEffect } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Nav from '../components/Nav';
import { ThemeContext, THEME } from '../contexts/Theme';
import { lightTheme, darkTheme } from '../themeConfig';

const navItems = [
    {
        label: 'Wave',
        route: '/wave',
    },
    {
        label: 'Wave Alt',
        route: '/wave-alt',
    },
    {
        label: 'Carousel',
        route: '/motion-slider',
    },
    {
        label: 'Double Arc Slider',
        route: '/arc-slider',
    },
    {
        label: 'Framer Arc Slider',
        route: '/arc-slider-alt',
    },
    {
        label: 'Blobbies',
        route: '/blob',
    },
    {
        label: 'Test Wave Sections',
        route: '/test',
    },
];

const Header = () => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeComplete', () => {
            setIsOpen(false);
        });
        return () => {
            router.events.off();
        };
    }, [router.events]);

    return (
        <HeaderWrapper theme={theme}>
            {/* <Nav navItems={navItems} /> */}
            <NavButton theme={theme} onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? 'close' : 'open'}
            </NavButton>
            <NavItems>
                {navItems.map((item, index) => (
                    <NavItem isOpen={isOpen}>
                        <Link href={item.route}>
                            <a>{item.label}</a>
                        </Link>
                    </NavItem>
                ))}
            </NavItems>
            <ThemeButton theme={theme} onClick={toggleTheme}>
                <span>{theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT}</span>
            </ThemeButton>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 20px;
    z-index: 2;

    &:before {
        content: '';
        background: ${({ theme }) =>
            theme === THEME.LIGHT ? '#fafafa' : '#000'};
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 110%;
        height: 100%;
        border-radius: 10% 10% 47% 47% / 0% 0% 40% 40%;
        z-index: -1;
    }
`;

const NavButton = styled.button`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) =>
        theme === THEME.LIGHT ? lightTheme.text : darkTheme.text};
    text-transform: uppercase;
    padding: 20px;
    cursor: pointer;
`;

const NavItems = styled.div``;

const NavItem = styled.p`
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    line-height: ${({ isOpen }) => (isOpen ? 1 : 0)};
    margin: ${({ isOpen }) => (isOpen ? 10 : 0)};
    transition: 0.25s cubic-bezier(0.18, 0.89, 0.62, 1.27);
`;

const buttonHeight = 40;
const borderWidth = 2;

const ThemeButton = styled.button`
    cursor: pointer;
    position: relative;
    height: ${buttonHeight}px;
    width: ${buttonHeight * 2.75}px;
    border-radius: ${buttonHeight}px;
    line-height: ${buttonHeight}px;
    appearance: none;
    border: none;
    outline: none;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) =>
        theme === THEME.LIGHT ? lightTheme.text : darkTheme.text};
    background: ${({ theme }) =>
        theme === THEME.LIGHT ? lightTheme.background : darkTheme.background};
    border-width: ${borderWidth}px;
    border-style: solid;
    border-color: ${({ theme }) =>
        theme === THEME.LIGHT ? lightTheme.text : darkTheme.text};

    span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: ${({ theme }) =>
            theme === THEME.LIGHT
                ? `calc(100% - ${buttonHeight + 10}px)`
                : '15px'};
        transition: left 0.25s ease;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: ${({ theme }) =>
            theme === THEME.LIGHT
                ? 0
                : `calc(100% - ${buttonHeight - borderWidth}px)`};
        height: 100%;
        width: ${buttonHeight}px;
        border-radius: ${buttonHeight}px;
        background-color: ${({ theme }) =>
            theme === THEME.LIGHT ? lightTheme.text : darkTheme.text};
        transition: all 0.25s ease;
    }
`;

export default Header;
