import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/header/Header';

import '../styles/globalStyles.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Svatební floristika - Miroslava Blatná</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" type="image/png" href="/static/logo.png" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;