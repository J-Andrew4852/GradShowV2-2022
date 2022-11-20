// IMPORTS ============================================================================== // 
import Head from 'next/head'
import React from 'react';

// COMPONENT IMPORTS ==================================================================== // 
import { SockLoader } from '../icons/Icons'

// STYLES =============================================================================== // 
import styles from './socials.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Example component
Author: James Andrew
Collaborators: 

Description: 
- Example component to illustrate file structure.
*/

export const Socials = (data) => {


// console.log(data.data.socials)

var socials = data.data.socials;

// console.log(socials)

let sauce = [];

socials.forEach((item) => {

    if (item.match("artstation") !== null) {
      sauce.push(item.match("artstation"))
    }
    else if (item.match("behance") !== null) {
      sauce.push(item.match("behance"))
    }
    else if (item.match("codepen") !== null) {
      sauce.push(item.match("codepen"))
    }
    else if (item.match("dribble") !== null) {
      sauce.push(item.match("dribble"))
    }
    else if (item.match("facebook") !== null) {
      sauce.push(item.match("facebook"))
    }
    else if (item.match("github") !== null) {
      sauce.push(item.match("github"))
    }
    else if (item.match("instagram") !== null) {
      // console.log("selected instagram")
      sauce.push(item.match("instagram"))
    }
    else if (item.match("linkedin") !== null) {
      // console.log(item.match("linkedin"))
      sauce.push(item.match("linkedin"))
    }
    else if (item.match("twitter") !== null) {
      sauce.push(item.match("twitter"))
    }
    else if (item.match("youtube") !== null) {
      sauce.push(item.match("youtube"))
    }
    else {
        sauce.push(item.match("other"))
    }
    return sauce
})
  
  // var name = icon[0]
  // // console.log("name   " + name)
  // var linkTo = icon.input
  // // console.log(linkTo)
  // var sockComp = sockLoader( name, linkTo )
  // // console.log(sockComp)
  // console.log(sauce)

  const icons = sauce.map( (item, index) => {
    console.log(item.input)
    return (
      <div className={styles.socialIcons}>
        <SockLoader name={item[0]} linkTo={item.input} size />
      </div>
      
    )
  })

  return (
    <div className={styles.iContainer}>
        {icons}
    </div>
  )
}
