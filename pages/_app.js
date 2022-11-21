import { Layout } from '../components/Layout/Layout'
import "bootstrap/dist/css/bootstrap.css"
import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon_package_v0.16/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon_package_v0.16/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon_package_v0.16/favicon-16x16.png"/>
      <link rel="manifest" href="/public/favicon_package_v0.16/site.webmanifest"/>
      <link rel="mask-icon" href="/public/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#fffbf4"/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
