// IMPORTS ============================================================================== // 
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OutlineBtn, TextBtn } from "../Buttons/Button";
import { Sidebar, SidebarIcon, Star } from "../icons/Icons";

// COMPONENT IMPORTS ==================================================================== // 
import placeholder from './../../public/assets/images/sarah_phonemockup.png'

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
  function spliter(heroImage) {
    // console.log("heroimage " + heroImage)
    var splitHero = heroImage.split('id=')
    // console.log("split " + splitHero[1])
    // let slicedHero = splitHero.slice(0, 33)
    // console.log("sliced data " + slicedHero)
    let sauceHero = `https://drive.google.com/uc?export=view&id=${splitHero[1]}`
    console.log("hero sauce " + sauceHero)
    return sauceHero
  }
  var sauceHero = spliter(data.heroImage)

  // function slicer() {
  //   var hero = 'https://drive.google.com/file/d/102DhDeowwOoReVS--oT2mD9MKcchvNCk/view'
  //   var splitHero = hero.split('/d/')
  //   console.log("split " + splitHero[1])
  //   let slicedHero = splitHero[1].slice(0, 33)
  //   console.log("slice " + slicedHero)
  //   let sauceHero = `https://drive.google.com/uc?export=view&id=${slicedHero}`
  //   console.log("sauce " + sauceHero)
  //   return sauceHero
  // }
  // var sauceHero = slicer()

  // COMPONENT INIT ========================================================================= // 

  return (
    list ?
        <article className={`${styles.listContainer}`}>
          <a href={`/graduates/${data._id}`} target="_blank" rel="noreferrer">
          <div className={styles.leftGroup}>

            <div className={styles.placeholder_headshot}></div>
            <div className={styles.student_details}>
              <h2 className="font-med2 bold subheading">{data.preferredName} {data.lastName}</h2>
              <h3 className={`text-xs regular ${styles.reset_font}`}>{data.major[0]} {data.major[1]}</h3>
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
            <div className={styles.placeholder_headshot}></div>
            <div className={styles.student_details}>
              <h2 className="font-med2 bold subheading">{data.preferredName} {data.lastName}</h2>
              <h3 className={`text-xs regular ${styles.reset_font}`}>{data.major[0]} {data.major[1]}</h3>
            </div>
          </div>

          <div className={styles.icons}>
            <SidebarIcon onClick={() => handleClick(data)}/>

          </div>
        </header>
        <div className={styles.heroImageContainer}>
          <Image alt="Example of graduate's work" src={sauceHero} layout="fill" objectFit="contain" />
        </div>

        <footer className={styles.footer}>
          { /* replace with button styling when available */}
          {/* <a href={`http://${data.portfolioSite}/`} target="_blank" rel="noreferrer">
            <OutlineBtn external height="thin" text='Portfolio' major={data.major[0].toLowerCase()} />
          </a> */}

          <OutlineBtn text='view' linkTo={`/graduates/${data._id}`} height="thin" major={data.major[0].toLowerCase()}/>
        </footer>
      </article>
  )
}
