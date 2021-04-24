import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../contexts/Theme";
import Layout from "../components/layout";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ThemeProvider>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
