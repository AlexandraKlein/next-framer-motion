import { useState, useContext } from "react";
import NextImage from "next/image";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { ThemeContext, THEME } from "../contexts/Theme";
import { darkTheme, lightTheme } from "../themeConfig";

const customLoader = ({ src, quality, width }) => {
  const params = [`w=${width}`];

  if (quality) {
    params.push(`q=${quality}`);
  }

  return `${src}?${params.join("&")}`;
};

const Image = (props) => {
  const [theme] = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(
    !props.loading === "eager" || !props.priority
  );

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <ImageContainer isLoading={isLoading} theme={theme} {...props}>
      {isLoading && <Loading theme={theme} />}
      <NextImage loader={customLoader} onLoad={handleLoad} {...props} />
    </ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div`
  position: relative;
  display: ${(props) => (props.layout === "fill" ? "flex" : "block")};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme === THEME.LIGHT
      ? `rgba(${lightTheme.base}, .05)`
      : `rgba(${darkTheme.base}, .05)`};
  img {
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: 0.25s ease;
  }
`;

const Loading = styled.div`
  ${({ theme }) => css`
    flex: 1;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      display: block;
      position: absolute;
      left: -150px;
      top: -50%;
      height: 200%;
      width: 25%;
      transform: rotate(45deg);
      animation: ${load} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      background: ${theme === THEME.LIGHT
        ? loadingLinearGradient("240, 240, 240")
        : loadingLinearGradient("55, 55, 55")};
    }
  `}
`;

const loadingLinearGradient = (rgb) =>
  `linear-gradient(to right, rgba(${rgb}, 0) 0%,rgba(${rgb}, .8) 40%, rgba(${rgb}, 1) 50%, rgba(${rgb}, .8) 60%, rgba(${rgb}, 0) 100%)`;

const load = keyframes`
    0% {
        left: -75%;
    }
    100% {
        left: 150%;
    }
`;
