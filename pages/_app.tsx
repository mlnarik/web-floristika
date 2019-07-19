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
          <title>Miroslava Blatná - Floristika</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        </Head>
        <Header />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;