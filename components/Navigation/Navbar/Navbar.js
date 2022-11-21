// IMPORTS ============================================================================== // 
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'

// COMPONENT IMPORTS ==================================================================== // 
import { SelectedDropdown } from '../SelectedDropdown/SelectedDropdown';
import { Hamburger } from '../Hamburger/Hamburger';
import logo from './../../../public/assets/images/nav-logo.svg';

// STYLES =============================================================================== // 
import styles from './navbar.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Navbar
Author: Logan Trundle
Collaborators: James Andrew

Description: 
- Logo that links to home page
- Main page links
- Dropdown that shows favurited students
*/

export const Navbar = () => {
  const router = useRouter();
  const [hammy, setHammy] = useState(false)
  // const [menu, setmenu] = useState('menu hidden')
  
  // const [ clicked, setClicked ] = useState('false');

  // const handleClick = () => {
  //     const menu =  document.querySelector(".mobile_nav_options");
  //     const hamburger = document.querySelector(".hamburger_container");

  //     clicked ? setClicked('hidden') : setClicked ('');

  //     if(menu.classList.contains("hidden")) {
  //         mobile_nav_options.style.display ="none" ;
  //     } else {
  //         mobile_nav_options.style.display ="block" ;
  //     }
  // }

  // useEffect(() => {
    // console.log(hammy)
  // },  [hammy])

  return (
    hammy ? 

    <nav className={styles.container}>
      <div className={styles.navcontainer}>
        <div className={`text-med ${styles.nav_elements}`}>   
          <Link href={'/#GradShow'} className={styles.logo}>
            {/* <a> */}
              <Image src={logo} alt="Exhibition Space logo"/>
            {/* </a> */}
          </Link>
          <div className={styles.hammy} onClick={() => { setHammy(false); }}>
            <div className={styles.crossTainer}>
                <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="15.9393" x2="15.9393" y2="1" stroke="#283618" stroke-width="1.5" stroke-linecap="round"/>
                    <line x1="0.75" y1="-0.75" x2="21.8774" y2="-0.75" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16 17)" stroke="#283618" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
          </div>

          <div className={styles.nav_options}>
            <Link href={'/#GradShow'}>
              <a className={router.pathname === '/' ? `link active` : `link`}>Home</a>
            </Link>
            <Link href={'/about#GradShow'}>
              <a className={router.pathname.startsWith('/about') ? `link active` : `link`}>About</a>
            </Link>
            <Link href={'/graduates#GradShow'}>
              <a className={router.pathname.startsWith('/graduates') ? `link active` : `link`}>Graduates</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mobile_nav_options}>
          <Link href={'/#GradShow'}>
            <a className={router.pathname === '/' ? `link active` : `link`}>Home</a>
          </Link>
          <Link href={'/about#GradShow'}>
            <a className={router.pathname.startsWith('/about') ? `link active` : `link`}>About</a>
          </Link>
          <Link href={'/graduates#GradShow'}>
            <a className={router.pathname.startsWith('/graduates') ? `link active` : `link`}>Graduates</a>
          </Link>
        </div>
    </nav>

    :
    <nav className={styles.container}>
      <div className={styles.navcontainer}>
        <div className={`text-med ${styles.nav_elements}`}>   
          <Link href={'/#GradShow'} className={styles.logo}>
            {/* <a> */}
              <Image src={logo} alt="Exhibition Space logo"/>
            {/* </a> */}
          </Link>
          
          <div className={styles.hammy}  onClick={() => { setHammy(true); }}>
            <Hamburger />
          </div>
          <div className={styles.nav_options}>
            <Link href={'/#GradShow'}>
              <a className={router.pathname === '/' ? `link active` : `link`}>Home</a>
            </Link>
            <Link href={'/about#GradShow'}>
              <a className={router.pathname.startsWith('/about') ? `link active` : `link`}>About</a>
            </Link>
            <Link href={'/graduates#GradShow'}>
              <a className={router.pathname.startsWith('/graduates') ? `link active` : `link`}>Graduates</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
