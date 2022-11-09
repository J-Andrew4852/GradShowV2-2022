import { Layout } from '../components/Layout/Layout'
import '../styles/globals.css'
import Script from 'next/script'

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
