// IMPORTS ============================================================================== // 
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OutlineBtn, TextBtn } from "../Buttons/Button";
import { Sidebar, SidebarIcon, Star } from "../icons/Icons";
// import { motion } from "framer-motion";

// COMPONENT IMPORTS ==================================================================== // 

// STYLES =============================================================================== // 
import styles from './graduateCard.module.css'

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


export const GraduateCard = ({ data, list, handleClick }) => {

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

// console.log(data.heroImage) 

  // COMPONENT INIT ========================================================================= // 

  return (
    list ?
        <article className={`${styles.listContainer}`}>
          <a href={`/graduates/${data._id}`} target="_blank" rel="noreferrer">
          <div className={styles.leftGroup}>

            <div className={styles.placeholder_headshot}></div>
            <div className={styles.student_details}>
              <h2 className="font-med2 bold subheading">{data.preferredName} {data.lastName}</h2>
              <h3 className={`text-xs regular ${styles.reset_font}`}>{abMajor[0]} {abMajor[1]}</h3>
            </div>
          </div>
      </a>

          <div className={styles.rightGroup}>
            <div className={styles.icons}>
              <SidebarIcon onClick={() => handleClick(data)} />
              {/* <Star /> */}
            </div>
            <TextBtn text='view' linkTo={`/graduates/${data._id}`}/>
          </div>

        </article>
      :
      <article className={styles.cardContainer}>
        
        <header className={styles.header}>
          <div className={styles.header_subcontainer}>
            {/* <img className={styles.student_headshot} alt="Photograph of graduate" src="https://2022gradshow.s3.ap-southeast-1.amazonaws.com/Grad+Show+Website+Student+Information+Form+(File+responses)/Edited_Headshots_2022/alishba_tausif-DIGEX.jpg"/> */}
            <img className={styles.student_headshot} alt="" src={data.headshotURL}/>
            <div className={styles.student_details}>
              <h2 className="font-med2 bold subheading">{data.preferredName} {data.lastName}</h2>
              <h3 className={`text-med regular ${styles.reset_font}`}>{abMajor[0]} {abMajor[1]}</h3>
            </div>
          </div>

          <div className={styles.icons}>
            <SidebarIcon onClick={() => handleClick(data)}/>

          </div>
        </header>
        <div className={styles.heroContainer}>
          <img className={styles.gradHeroImage} alt="Example of graduate's work" src={data.heroImage}/>
          {/* <Image alt="Example of graduate's work" src={data.heroImage} layout="fill" objectFit="cover" placeholder="blur" blurDataURL={placeholder} priority/> */}
        </div>


        <footer className={styles.footer}>
          {/* PORTFOLIO BUTTON REMOVED FROM GRAD CARDS */}
          {/* <a href={`http://${data.portfolioSite}/`} target="_blank" rel="noreferrer">
            <OutlineBtn external height="thin" text='Portfolio' major={data.major[0].toLowerCase()} />
          </a> */}

          <OutlineBtn linkers text='view' linkTo={`/graduates/${data._id}`} height="thin" abmajor={`${abMajor[0].toString()}`} external/> {console.log(abMajor[0])}
        </footer>
      </article>
  )
}
