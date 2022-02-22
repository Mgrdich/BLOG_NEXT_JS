import '../styles/index.css';
import type {AppProps} from 'next/app'
import {ReactNode} from "react";
import Layout from "../components/layout/Layout";
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps): ReactNode {
    return (
      <Layout>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <title>My Blog</title>
          </Head>
          <Component {...pageProps} />
      </Layout>
    );
}

export default MyApp
