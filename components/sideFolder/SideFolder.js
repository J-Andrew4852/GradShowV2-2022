// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";

// NEXT IMPORTS ============================================================================== // 
import Image from 'next/image'
import Link from "next/link";

// COMPONENT IMPORTS ========================================================================= // 
import { OutlineBtn, TextBtn } from "../Buttons/Button";
import { Arrow } from "../icons/Icons";
import { Socials } from '../../components/Socials/Socials';


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


export const GradFolder = ({ graduate, data, onClose }) => {

    // VARIABLES ============================================================================== // 

    var majorz = data.major
    // console.log(majorz)
    var abMajor = []

    majorz.forEach(() => {
    // console.log(majorz[0])
    if (majorz[0].match("Graphic") !== null) {
        abMajor.push("GRFX")
    }
    else if (majorz[0].match("Digital") !== null) {
        abMajor.push("DIGEX")
    }
    else {
        abMajor.push("AGD")
    }
    // console.log(abMajor)
    if (majorz.length == 2) {
        // console.log(majorz[1])
        // console.log(abMajor)
        if (majorz[1].match("Graphic") !== null) {
        abMajor.push("GRFX")
        }
        else if (majorz[1].match("Digital") !== null) {
        abMajor.push("DIGEX")
        }
        else {
        abMajor.push("AGD")
        }
        abMajor.splice(2, 2);
        // console.log(abMajor)
        // return abMajor
    }
    // console.log(abMajor)
    return abMajor
    });

    // console.log(abMajor)

    // COMPONENT INIT ========================================================================= // 
    // useEffect(() => { }, []);

    // function slicer() {
    //     var hero = 'https://drive.google.com/file/d/102DhDeowwOoReVS--oT2mD9MKcchvNCk/view'
    //     let slicedHero = hero.slice(32, 65)
    //     console.log(slicedHero)
    //     let sauceHero = `https://drive.google.com/uc?export=view&id=${slicedHero}`
    //     console.log(sauceHero)
    //     return sauceHero
    // }

    // var sauceHero = slicer()


    // RENDER ================================================================================= // 
    return (
        <div className={styles.container}>
            <div className={styles.folderContent}>

            <div className={styles.closeArrow} onClick={onClose}>
                <Arrow size={22} direction="left"/>
            </div>
                <div className={styles.graduateContent}>

                    <div className={styles.graduate_photoContainer}>
                        <img className={`${styles.graduate_photo} ${styles.altImg}`} src={data.altImage} />
                        <img className={`${styles.graduate_photo} ${styles.frontImg}`} src={data.headshotURL}/>
                    </div>

                    <div className={styles.details}>
                        <div className={styles.heading_group}>
                            <h1 className='subheading bold text-2xl'>{data.preferredName} {data.lastName}</h1>
                            <h3 className={`regular text-reg`}>{abMajor[0]} {abMajor[1]}</h3>
                        </div>

                        <div className={styles.shortBio}>
                            {data.shortBio}
                        </div>

                        <div className={styles.linksBar}>
                            {/* CANNOT READ PROPERTIES OF UNDEFINED (READING "_id") */}
                            <OutlineBtn linkers text='view' linkTo={`/graduates/${data._id}`} height="thin" abmajor={`${abMajor[0].toString()}`} external/>
                            {/* <TextBtn text='Expand' linkTo={`/graduates/${data._id}`} external/> */}
                        </div>
                    </div>

                </div>

                <div className={styles.socialsBar}>
                    <Socials key={data._id} data={data} />
                </div>


                <div className={styles.sidebar_gradHero}>
                    <img className={styles.gradHeroImage} alt="Example of graduate's work" src={data.heroImage}/>
                    {/* <Image src={data.heroImage} layout='fill' objectFit='cover' /> */}
                </div>

            </div>
        </div>
    )
}
