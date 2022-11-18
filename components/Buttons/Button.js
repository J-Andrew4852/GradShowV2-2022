// IMPORTS ============================================================================== // 
import react from 'react'
import Link from 'next/link'

// COMPONENT IMPORTS ==================================================================== // 
import { Arrow, ExternalLink, Star } from '../icons/Icons'

// STYLES =============================================================================== // 
import styles from './button.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Buttons
Author: Jade Mitchell
Collaborators: Logan Trundle

*/


export const OutlineBtn = ({text, onAction, major, selected, height, external}) => {

    return (
        <div className={`${styles.outlinebtn} ${styles[height]}`}>
            <div tabIndex={external ? `-1` : '0'} className={selected ? `${styles.selected} ${styles.gradientBox} ${styles[major]}` : `${styles.gradientBox} ${styles[major]}`} onClick={onAction} onKeyDown={onAction}>
                {text}
            </div>
        </div>
    )
}

export const TextBtn = ({text, linkTo, external}) => {

    return (
        external ? 
            <a href={linkTo} target="_blank" rel="noopener noreferrer" className={styles.textbtn}>
                    <p>
                        {text}
                    </p>
                    <ExternalLink/>
            </a>
        : 
        <Link href={linkTo}>
            <a>
                <div className={styles.textbtn}>
                    <p>
                        {text}
                    </p>
                    <Arrow />
                </div>
            </a>
        </Link>
    )
}