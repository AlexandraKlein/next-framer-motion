import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Header from './header';
import { ThemeContext } from '../contexts/Theme';
import { GlobalStyles, lightTheme } from '../themeConfig';

const Layout = ({ children, preview }) => {
    const [theme] = useContext(ThemeContext);

    return (
        <div className="page-wrapper">
            <GlobalStyles theme={theme} />
            <Header />
            {preview && (
                <PreviewBanner>
                    <h4>Preview Mode</h4>
                    <p>
                        <a href="/api/exit-preview">Click here</a> to exit
                        preview mode.
                    </p>
                </PreviewBanner>
            )}
            <div className="content-wrapper">{children}</div>
            <style jsx global>{`
                #__next,
                html,
                body {
                    height: 100%;
                    margin: 0;
                }

                #__next,
                .page-wrapper {
                    display: flex;
                    flex-direction: column;
                }

                .page-wrapper {
                    flex: 1;
                }
            `}</style>
        </div>
    );
};

export default Layout;

const PreviewBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(${lightTheme.base}, 0.15);
    padding: 20px;

    > * {
        margin: 0;
    }
`;
