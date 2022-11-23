import { Layout } from '../components/Layout/Layout'
import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="../public/favicon.ico" />
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
