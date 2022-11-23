// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Link from 'next/link'

// COMPONENT IMPORTS ==================================================================== // 
import {ErrorButton} from '../components/Buttons/Button'
import { AlienIcon } from '../components/icons/Icons'

// STYLES =============================================================================== // 
import styles from '../styles/404.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: 404 page
Collaborators: Jayden Dry

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
      <div className={styles.container404}>
          <h1>404</h1>
          <AlienIcon />
          <h2>uh oh.<br></br>You&apos;ve landed on alien grounds</h2>
          <h3>This page either does not exist or<br></br> has not yet been discovered</h3>
          <br></br>
          <br></br>
          <br></br>
          <Link href="/#GradShow">
            <div className={styles.pointer}>
              <ErrorButton text="Back to Home" />
            </div>
          </Link>
      </div>
    </div>
  )
}
