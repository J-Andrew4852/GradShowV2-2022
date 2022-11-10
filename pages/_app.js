import { Layout } from '../components/Layout/Layout'
import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js" strategy='beforeInteractive'/>
    <Script id='instafeed-script' strategy='afterInteractive'>
      {`
      	var userFeed = new Instafeed({
          get: 'user',
          target: "instafeed-container",
            resolution: 'low_resolution',
          accessToken: 'IGQVJWUTNFTXE0M3Q4bUFwNC1qbjlfLVI2TWl3elprT2tNS2pVZAmExZA1VSamh0Ymd0SDYzVDFwd1d2Rlg1R1lteWZAvMHJreVNiaW5rai1FdUUwWEV2MUpENFA1cjVzNVlyN1lmSmNTY0Mwc0FjVHdkdwZDZD',
              limit: 3,
        });
        userFeed.run();
      `}
    </Script>
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
