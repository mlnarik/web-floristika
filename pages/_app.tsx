import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MenuNav } from '../components/header/MenuNav';

import '../styles/globalStyles.scss';
import { Router } from 'next/dist/client/router';

class MyApp extends App {
    public componentDidMount() {
        Router.events.on('routeChangeComplete', () => {
            var element = document.querySelector('body');
            if (element) {
                element.scrollTop = 0;
            }
        });
    }

    public render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Svatební floristika - Miroslava Blatná</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link rel="icon" type="image/png" href="/static/logo.png" />
                </Head>
                <MenuNav />
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;
