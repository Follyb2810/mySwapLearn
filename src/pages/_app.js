import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PropTypes from 'prop-types';
import createEmotionCache from '../styles/createEmotionCache';
import theme from '../styles/theme';
import Layout from '../components/shared/Layout'
// import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  </CacheProvider>
  );
};
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default App;