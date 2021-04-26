import React, { createContext, useState, useEffect } from "react";

export const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState(THEME.LIGHT);

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setTheme(isDark ? THEME.DARK : THEME.LIGHT);
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", theme === THEME.DARK);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === THEME.LIGHT ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
