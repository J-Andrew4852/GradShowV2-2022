// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Script from 'next/script'

// COMPONENT IMPORTS ==================================================================== // 

// STYLES =============================================================================== // 
import styles from './instagram.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Example component
Author: Logan Trundle
Collaborators: 

Description: 
- Example component to illustrate file structure.
*/

// const SSR = typeof window === 'undefined'

export const Instagram = ({name}) => {
  return (
    <div className={styles.container}>
      <Script id='instafeed-script' strategy='afterInteractive'>
        {`
            const SSR = typeof window === 'undefined'
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
      <Script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js" strategy='beforeInteractive'/>
      {/* {!SSR ? <div id="instafeed-container" className={styles.instaContain}></div> : null} */}
      <div id="instafeed-container" className={styles.instaContain}></div>
    </div>
  )
}
