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
      <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Expires" content="0" />
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
