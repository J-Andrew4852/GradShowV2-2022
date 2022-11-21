// IMPORTS ============================================================================== // 
import { useState } from 'react';
// COMPONENT IMPORTS ==================================================================== // 

// STYLES =============================================================================== // 
import styles from './hamburger.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Hamburger
Author: Logan Trundle
Collaborators: 
*/


export const Hamburger = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hamburger_container}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
  )}