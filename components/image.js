import { useState, useContext } from "react";
import NextImage from "next/image";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { ThemeContext } from "../contexts/Theme";

const Image = (props) => {
  const [theme] = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (e) => {
    if (e.target.srcset) {
      setIsLoading(false);
    }
  };

  return (
    <ImageContainer>
      {isLoading && <Loading theme={theme} />}
      <NextImage onLoad={handleLoad} {...props} />
      <Loading theme={theme} />
    </ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
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
      top: 0;
      height: 100%;
      width: 150px;
      animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      background: ${theme === "light"
        ? "linear-gradient(to right, rgba(232, 232, 232, 0) 0%, rgba(232, 232, 232, 1) 50%, rgba(232, 232, 232, 0) 100%)"
        : "linear-gradient(to right, rgba(64, 64, 64, 0) 0%, rgba(64, 64, 64, 1) 50%, rgba(64, 64, 64, 0) 100%)"};
    }
  `}
`;

const load = keyframes`
    from {
        left: -150px;
    }
    to {
        left: 100%;
    }
`;
