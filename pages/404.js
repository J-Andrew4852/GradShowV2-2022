// IMPORTS ============================================================================== // 
import Head from 'next/head'

// COMPONENT IMPORTS ==================================================================== // 

// STYLES =============================================================================== // 
import styles from '../styles/About.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: About page
Collaborators: Logan Trundle, 

Description: 
- Appears when url doesn't exist
- Link back to home page
*/

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Not Found || Exhibition Space</title>
      </Head>
    </div>
  )
}
