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
Collaborators: Logan Trundle, James Andrew

*/


export const OutlineBtn = ({text, onAction, abmajor, selected, height, linkers, linkTo, external}) => {
    // console.log(major)
    return (
        linkers ?
        <a href={linkTo} target="_blank" rel="noopener noreferrer">
            <div className={`${styles.outlinebtn} ${styles[height]}`}>
                <div tabIndex={external ? `-1` : '0'} className={selected ? `${styles.selected} ${styles.gradientBox} ${styles[abmajor]}` : `${styles.gradientBox} ${styles[abmajor]}`} onClick={onAction} onKeyDown={onAction}>
                    {text}
                </div>
            </div>
        </a>
        :
        <a href={linkTo}>
            <div className={`${styles.outlinebtn} ${styles[height]}`}>
                <div tabIndex={external ? `-1` : '0'} className={selected ? `${styles.selected} ${styles.gradientBox} ${styles[abmajor]}` : `${styles.gradientBox} ${styles[abmajor]}`} onClick={onAction} onKeyDown={onAction}>
                    {text}
                </div>
            </div>
        </a>
    )
}

export const ErrorButton = ({text, onAction, abmajor, selected, height, linkers, linkTo, external}) => {
    // console.log(abmajor)
    return (
        linkers ?
        <a href={linkTo} target="_blank" rel="noopener noreferrer">
            <div className={`${styles.errorbtn} ${styles[height]}`}>
                <div tabIndex={external ? `-1` : '0'} className={selected ? `${styles.selected} ${styles.gradientBox} ${styles[abmajor]}` : `${styles.gradientBox} ${styles[abmajor]}`} onClick={onAction} onKeyDown={onAction}>
                    {text}
                </div>
            </div>
        </a>
        :
        <div className={`${styles.errorbtn} ${styles[height]}`}>
            <div tabIndex={external ? `-1` : '0'} className={selected ? `${styles.selected} ${styles.gradientBox} ${styles[abmajor]}` : `${styles.gradientBox} ${styles[abmajor]}`} onClick={onAction} onKeyDown={onAction}>
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