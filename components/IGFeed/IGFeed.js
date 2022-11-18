// IMPORTS ============================================================================== // 
import Head from 'next/head'

// COMPONENT IMPORTS ==================================================================== // 
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

// STYLES =============================================================================== // 
import styles from './ig-feed.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Example component
Author: James Andrew
Collaborators: 

Description: 
- Example component to illustrate file structure.
*/

export const IGFeed = () => {
  return (
    <div className={styles.container}>
      <InstagramFeed token="IGQVJYVVlJdG40bU9FRzFKNkdlOVJmZAXpSYnVnLW9UMlVxcWpId3hIY2RIa19zbWkzNjlORDZAaampXd0hLVDBoWjdvOWduZAllTWTZAGclk2YUdkNU5FNWROdThxYXNBeHpKeC1rRzliTV9ycXUwbHcxagZDZD"  counter="6"/>
    </div>
  )
}
