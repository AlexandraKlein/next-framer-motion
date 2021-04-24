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
        body {
          background-color: ${isLightTheme
            ? lightTheme.background
            : darkTheme.background};
          color: ${isLightTheme ? lightTheme.text : darkTheme.text};
          transition: all 0.25s ease;
        }
      `}
    />
  );
};
