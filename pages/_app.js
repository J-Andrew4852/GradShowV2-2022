import { Layout } from '../components/Layout/Layout'
import '../styles/globals.css'
import '../public/fonts/avenir_ff/fonts.module.css'
import Script from 'next/script'
import Head from 'next/head'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        {/* TODO - get description to put into meta tag */}
        <meta name="description" content="" />
        <meta property="og:title" content="Exhibition Space || 2022 Curtin Grad Show"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.curtindesign.com/"/>
        <meta property="og:title" content="Curtin Exhibition Space"/>
        <meta property="og:site_name" content="Exhibition Space || 2022 Curtin Grad Show"/>
        {/* TODO - get description to put into meta tag */}
        <meta property="og:description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="../public/favicon.ico" />
      <link rel="stylesheet" href="../styles/globals.css"></link>
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
