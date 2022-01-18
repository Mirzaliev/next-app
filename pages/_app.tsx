import '../styles/globals.css';
import {AppProps} from "next/dist/shared/lib/router/router";
import React from "react";
import Head from "next/head";


function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MY TOP - приложение</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>;
}


export default MyApp;
