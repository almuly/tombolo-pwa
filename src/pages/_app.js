import * as React from 'react';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import {ProjectWrapper} from '../lib/context/projectContext'

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Tombolo PWA</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ProjectWrapper>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ProjectWrapper>
        </CacheProvider>
    );
}

