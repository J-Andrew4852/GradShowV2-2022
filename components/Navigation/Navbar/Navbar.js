// IMPORTS ============================================================================== // 
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';

// COMPONENT IMPORTS ==================================================================== // 
import { SelectedDropdown } from '../SelectedDropdown/SelectedDropdown';
import { Hamburger } from '../Hamburger/Hamburger';

// STYLES =============================================================================== // 
import styles from './navbar.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Navbar
Author: Logan Trundle
Collaborators: 

Description: 
- Logo that links to home page
- Main page links
- Dropdown that shows favurited students
*/

export const Navbar = () => {
  const router = useRouter();
  // const [hamburgerState, setHamburgerState] = useState(false)
  const [ clicked, setClicked ] = useState('false');

  const handleClick = () => {
      // const menu =  document.querySelector(".mobile_nav_options");
      // const hamburger = document.querySelector(".hamburger_container");

      clicked ? setClicked('hidden') : setClicked ('');

  //     if(menu.classList.contains("hidden")) {
  //         mobile_nav_options.style.display ="none" ;
  //     } else {
  //         mobile_nav_options.style.display ="block" ;
  //     }
  }

  
  return (
    <nav className={styles.container}>
      <div className={`text-med ${styles.nav_elements}`}>   
        <Link href={'/'} className={styles.logo}>
          <a>
            Exhibiton Space
          </a>
        </Link>
        
        <Hamburger onClick={ handleClick } />

        <div className={styles.nav_options}>
          <Link href={'/'}>
            <a className={router.pathname === '/' ? `link active` : `link`}>Home</a>
          </Link>
          <Link href={'/about'}>
            <a className={router.pathname.startsWith('/about') ? `link active` : `link`}>About</a>
          </Link>
          <Link href={'/graduates'}>
            <a className={router.pathname.startsWith('/graduates') ? `link active` : `link`}>Graduates</a>
          </Link>
        </div>

        <div className={styles.mobile_nav_options}>
          <Link href={'/'}>
            <a className={router.pathname === '/' ? `link active` : `link`}>Home</a>
          </Link>
          <Link href={'/about'}>
            <a className={router.pathname.startsWith('/about') ? `link active` : `link`}>About</a>
          </Link>
          <Link href={'/graduates'}>
            <a className={router.pathname.startsWith('/graduates') ? `link active` : `link`}>Graduates</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
