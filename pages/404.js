// IMPORTS ============================================================================== // 
import Head from 'next/head'
// COMPONENT IMPORTS ==================================================================== // 
import {OutlineBtn} from '../components/Buttons/Button'
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
          <h2>uh oh.<br></br>You've landed on alien grounds</h2>
          <h3>This page either does not exist or<br></br> has not yet been discovered</h3>
          <br></br>
          <br></br>
          <br></br>
          <a href='/'>
            <OutlineBtn text="Back to Home"/>
          </a>
      </div>
    </div>
  )
}
