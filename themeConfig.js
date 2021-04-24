import { Global, css } from "@emotion/react";

export const lightTheme = {
  text: "#363537",
  background: "#f1f1f1",
};

export const darkTheme = {
  text: "#FAFAFA",
  background: "#373737",
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
          color: #1b789e;
          text-decoration: none;
        }

        a:hover {
          color: #166281;
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
