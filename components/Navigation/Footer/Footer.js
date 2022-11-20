// IMPORTS ============================================================================== // 
import Image from 'next/image'
import Link from 'next/link'

// COMPONENT IMPORTS ==================================================================== // 
import curtinLogo from '../../../public/assets/images/curtin-logo.png'

// STYLES =============================================================================== // 
import styles from './footer.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Footer
Author: Logan Trundle
Collaborators: 

Description: 
- Logo that links to home page
- Links to past grad shows
- Curtin Logo
*/

export const Footer = () => {

    return (
        <footer className={styles.container}>
            <div className={styles.footer_elements}>

                <div className={`text-med ${styles.prev_gradshows}`}>
                        <a href='https://www.2020.curtindesign.com/' target="_blank" rel="noreferrer" className='link'>
                            2020 Gradshow
                        </a>
            
                        <a href='https://www.2021.curtindesign.com/' target="_blank" rel="noreferrer" className='link'>
                            2021 Gradshow
                        </a>
                </div>

                <div className={`text-reg ${styles.night_info}`}>
                        <p>25.11.2022 | 18:00 - 21:00</p>
                        <a  href="https://link.mazemap.com/0Sto189P" target="_blank" rel="noreferrer">Building 202, Curtin University</a>
                </div>
                
                <div className={styles.curtin_logo}>
                    <a href='https://www.curtin.edu.au/' target="_blank" rel="noreferrer">
                        <Image src={curtinLogo} alt="Curtin University logo" height={30} width={166} layout="responsive" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
