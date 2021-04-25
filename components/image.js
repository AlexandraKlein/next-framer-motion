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
        ? "linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%)"
        : "linear-gradient(to right, transparent 0%, #404040 50%, transparent 100%)"};
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
