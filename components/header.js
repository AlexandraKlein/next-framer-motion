import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { ThemeContext } from "../contexts/Theme";
import { lightTheme, darkTheme } from "../themeConfig";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <HeaderWrapper theme={theme}>
      <Logo theme={theme}>
        <Link href="/">
          <a>Next.js &amp; Framer Motion</a>
        </Link>
      </Logo>
      <ThemeButton theme={theme} onClick={toggleTheme}>
        <span>{theme === "light" ? "dark" : "light"}</span>
      </ThemeButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => (theme === "light" ? "#fafafa" : "#000")};
  transition: all 0.25s ease;
`;

const Logo = styled.div`
  padding: 10px 0;

  a {
    font-weight: 900;
    color: ${({ theme }) => (theme === "light" ? "#111" : "inherit")};

    &:hover {
      font-weight: 900;
      border-bottom: ${({ theme }) =>
        theme === "light" ? "2px solid #111" : "2px solid #fff"};
    }
  }
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
    theme === "light" ? lightTheme.text : darkTheme.text};
  background: ${({ theme }) =>
    theme === "light" ? lightTheme.background : darkTheme.background};
  border-width: ${borderWidth}px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme === "light" ? lightTheme.text : darkTheme.text};

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ theme }) =>
      theme === "light" ? `calc(100% - ${buttonHeight + 10}px)` : "15px"};
    transition: left 0.25s ease;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: ${({ theme }) =>
      theme === "light" ? 0 : `calc(100% - ${buttonHeight - borderWidth}px)`};
    height: 100%;
    width: ${buttonHeight}px;
    border-radius: ${buttonHeight}px;
    background-color: ${({ theme }) =>
      theme === "light" ? lightTheme.text : darkTheme.text};
    transition: all 0.25s ease;
  }
`;

export default Header;
