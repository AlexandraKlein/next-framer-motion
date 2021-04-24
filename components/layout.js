import React, { useContext } from "react";
import Header from "./header";
import { ThemeContext } from "../contexts/Theme";
import { GlobalStyles } from "../themeConfig";

const Layout = ({ children }) => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className="page-wrapper">
      <GlobalStyles theme={theme} />
      <Header />
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
