// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";

// NEXT IMPORTS ============================================================================== // 
import Image from 'next/image'
import Link from "next/link";

// COMPONENT IMPORTS ========================================================================= // 
import { OutlineBtn, TextBtn } from "../Buttons/Button";
import { Arrow } from "../icons/Icons";

// STYLES ==================================================================================== // 
import styles from './side-folder.module.css'

// RESOURCES ================================================================================= // 
import gradImage from '../../public/assets/images/graduate_image_placeholder.JPG'


/* 
Component Name: Graduate Folder

Author: James Andrew
Collaborators:
Version #: 1.0.0
Date Created: 04/10/2022
Date Updated:

Overview: 
This component is the side folder that pops out when a graduateCard element is clicked.

    data = {
        body: string,
        id: number,
        title: string,
        userId: number
    }
*/


export const GradFolder = ({ data, onClose }) => {

    // VARIABLES ============================================================================== // 

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => { }, []);
    // RENDER ================================================================================= // 
    return (
        <div className={styles.container}>
            <div className={styles.folderContent}>

            <div className={styles.closeArrow} onClick={onClose}>
                <Arrow size={22} direction="left"/>
            </div>
                <div className={styles.graduateContent}>

                    <div className={styles.graduate_photo}>
                        <Image className={styles.graduateImage} src={gradImage} alt={`Headshot photo of ${data.preferredName} ${data.lastName}`} width={783} height={1175} layout="fill" objectFit="cover" placeholder="blur" blurDataURL={gradImage} />
                    </div>

                    <div className={styles.details}>
                        <div className={styles.heading_group}>
                            <h1 className='heading bold text-2xl'>{data.preferredName} {data.lastName}</h1>
                            <h3 className={`regular text-reg`}>{data.major[0]} {data.major[1]}</h3>
                        </div>

                        <div className={styles.shortBio}>
                            {data.bio}
                        </div>

                        <div className={styles.linksBar}>
                            <OutlineBtn external text="portfolio" height="thin" major={data.major[0].toLowerCase()}/>
                            <TextBtn text='Expand' linkTo={`/graduates/${data._id}`}/>
                        </div>
                    </div>

                </div>

                <div className={styles.socialsBar}>
                    {/* {data.socials?.map(social => (
                        <a key={social.name} href={social.link}>
                            {social.name}
                        </a>
                    ))} */}
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>


                <div className={styles.graduateImageGrid}>
                    <div className={styles.graduateImages}></div>
                </div>

            </div>
        </div>
    )
}
