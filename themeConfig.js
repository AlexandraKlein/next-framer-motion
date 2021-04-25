import { Global, css } from "@emotion/react";

export const lightTheme = {
  base: "0, 0, 0",
  text: "#363537",
  background: "#f1f1f1",
  link: "#1b789e",
  linkHover: "#166281",
};

export const darkTheme = {
  base: "255, 255, 255",
  text: "#FAFAFA",
  background: "#373737",
  link: "#add8e6",
  linkHover: "#99cfe0",
};

export const GlobalStyles = ({ theme }) => {
  const isLightTheme = theme === "light";

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          background-color: ${isLightTheme
            ? lightTheme.background
            : darkTheme.background};
          color: ${isLightTheme ? lightTheme.text : darkTheme.text};
          transition: all 0.25s ease;
          margin: 0;
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
            "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
          text-rendering: optimizeLegibility;
        }

        a {
          color: ${isLightTheme ? lightTheme.link : darkTheme.link};
          text-decoration: none;
        }

        a:hover {
          color: ${isLightTheme ? lightTheme.linkHover : darkTheme.linkHover};
        }

        img {
          max-width: 100%;
        }

        .content-wrapper {
          text-align: center;
          padding: 40px 20px;
        }

        .container {
          max-width: 1024px;
          overflow: hidden;
          margin: 0 auto;
        }
      `}
    />
  );
};
