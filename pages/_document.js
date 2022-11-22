import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Link for custom fonts (such as from google fonts to be included in this sectioAn) */}
        {/* TODO - get description to put into meta tag */}
        <meta name="description" content="" />
        <meta property="og:title" content="Exhibition Space || 2022 Curtin Grad Show"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.curtindesign.com/"/>
        <meta property="og:title" content="Curtin Exhibition Space"/>
        <meta property="og:site_name" content="Exhibition Space || 2022 Curtin Grad Show"/>
        {/* TODO - get description to put into meta tag */}
        <meta property="og:description" content=""/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu:wght@300;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet"></link>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}