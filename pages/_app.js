import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../contexts/Theme';
import Layout from '../components/layout';
import './arc-slider.css';

class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props;

        return (
            <ThemeProvider>
                <Layout preview={pageProps.preview}>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
            </ThemeProvider>
        );
    }
}

export default MyApp;
