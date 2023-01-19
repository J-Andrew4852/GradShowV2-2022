// IMPORTS ============================================================================== // 
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OutlineBtn, TextBtn } from "../Buttons/Button";
import { Sidebar, SidebarIcon, Star } from "../icons/Icons";
// import { motion } from "framer-motion";

// COMPONENT IMPORTS ==================================================================== // 
// import humaan from '../../public/assets/images/Home/AwardCompanies/humaan.svg'

// STYLES =============================================================================== // 
import styles from './awardCard.module.css'

// OVERVIEW ============================================================================= // 

/* 
Component Name: Graduate Card
Author: Rachael Moricono
Collaborators: James Andrew
Version #: 1.0.0
Date Updated: 16/10/2022
Overview: 
This component is displays a card with a title of an graduate and a link to it.
When being called it takes in a prop (data) which is a Graduate object.
    data = {
        needs to be updated
    }
*/


export const AwardCard = ({ data, handleClick }) => {

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

// console.log(abMajor[0])
var cardColour = abMajor[0]

// console.log(data.heroImage) 

  // COMPONENT INIT ========================================================================= // 

  return (
      <article className={styles.cardContainer}>
        <section className={styles.leftSection}>
          <div className={styles.headshotHolder}>
            <img className={styles.student_headshot} alt="" src={data.headshotURL}/>
            <img className={styles.altImage} alt="" src={data.altImage}/>
          </div>
          <div className={`${styles.colourCard} ${styles[cardColour]}`} ></div>
        </section>
        <section className={styles.rightSection}>
          <div className={styles.heroContainer}>
            <img className={styles.gradHeroImage} alt="Example of graduate's work" src={data.awardPic}/>
            {/* <Image alt="Example of graduate's work" src={data.heroImage} layout="fill" objectFit="cover" placeholder="blur" blurDataURL={placeholder} priority/> */}
          </div>
          <div className={styles.awardTitle} >{data.awardTitle}</div>
          <div className={styles.student_details}>
            <h2 className="font-med2 bold subheading">{data.preferredName} {data.lastName}</h2>
            {/* <h3 className={`text-med regular ${styles.reset_font}`}>{abMajor[0]} {abMajor[1]}</h3> */}
          </div>
          <div className={styles.viewBtn}>
            <OutlineBtn linkers text='view' linkTo={`/graduates/${data._id}`} height="thin" abmajor={`${abMajor[0].toString()}`} external/>
          </div>
        </section>
        {/* <header className={styles.header}>
          <div className={styles.header_subcontainer}>
            <div className={styles.student_details}>
              <h2 className="font-med2 bold subheading">{data.preferredName} {data.lastName}</h2>
              <h3 className={`text-med regular ${styles.reset_font}`}>{abMajor[0]} {abMajor[1]}</h3>
            </div>
          </div>

          <div className={styles.icons}>
            <SidebarIcon onClick={() => handleClick(data)}/>

          </div>
        </header> */}
      </article>
  )
}
