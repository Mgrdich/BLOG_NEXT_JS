import '../styles/index.css';
import type {AppProps} from 'next/app'
import {ReactNode} from "react";
import Layout from "../components/layout/Layout";

function MyApp({Component, pageProps}: AppProps): ReactNode {
    return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
    );
}

export default MyApp
