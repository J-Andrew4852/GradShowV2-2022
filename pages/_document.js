import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Link for custom fonts (such as from google fonts to be included in this sectioAn) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu:wght@300;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="/fonts/avenir_ff/style.css" rel='stylessheet' />
        {/* <link href="https://fonts.cdnfonts.com/css/avenir-lt-std" rel="stylesheet" /> */}
        {/* <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet" /> */}
        {/* <link rel="stylesheet" href="../styles/globals.css"></link> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}