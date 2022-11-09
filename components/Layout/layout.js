// IMPORTS ============================================================================== // 
import { useRouter } from 'next/router'

// COMPONENT IMPORTS ==================================================================== // 
import { Acknowledgement } from '../Acknowledgement/Acknowledgement'
import { Footer } from '../Navigation/Footer/Footer'
import { Navbar } from '../Navigation/Navbar/Navbar'

// STYLES =============================================================================== // 
import styles from './layout.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Layout component
Author: Logan Trundle
Collaborators: 

Description: 
- Create base structure for pages on the website
- includes navbar, footer and acknowledgement of country
*/

export const Layout = ({children}) => {
  const router = useRouter()
  
  return (
    <div className={styles.container}>
        <Navbar />
          <main>
            {children}
          </main>
          <div className={styles.footer_group}>
            {router.pathname === '/' || router.pathname === '/about' && <Acknowledgement />}
            <Footer />
          </div>
    </div>
  )
}
