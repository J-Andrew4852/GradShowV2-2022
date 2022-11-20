// IMPORTS ============================================================================== // 
import Head from 'next/head'
import React from 'react';

// COMPONENT IMPORTS ==================================================================== // 
import { Artstation, Behance, Codepen, Dribble, Facebook, Github, Instagram, Linkedin, Twitter, Youtube, Other } from '../icons/Icons'

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

// export const sockLoader = ({ name, linkTo }) => {
//   console.log(name)
//   if (name == 'artstation') { return <Artstation href={linkTo} /> }
//   else if (name == 'behance') { return <Behance href={linkTo} /> }
//   else if (name == 'codepen') { return <Codepen href={linkTo} /> }
//   else if (name == 'dribble') { return <Dribble href={linkTo} /> }
//   else if (name == 'facebook') { return <Facebook href={linkTo} /> }
//   else if (name == 'github') { return <Github href={linkTo} /> }
//   else if (name == 'instagram') { return <Instagram href={linkTo} /> }
//   else if (name == 'linkedin') { return <Linkedin href={linkTo} /> }
//   else if (name == 'twitter') { return <Twitter href={linkTo} /> }
//   else if (name == 'youtube') { return <Youtube href={linkTo} /> }
//   else { return <Other href={linkTo} /> }
// }


export const Socials = (data) => {


// console.log(data.data.socials)

var socials = data.data.socials

// console.log(socials)

let sauce = []

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
});
  
  // console.log(sauce)

  sauce.map((icon) => {
    var name = icon[0]
    // console.log("name   " + name)
    var linkTo = icon.input
    // console.log(linkTo)
    function sockLoader( name, linkTo ) {
      if (name == 'artstation') { console.log('yee'); return  <Artstation href={linkTo} /> }
      else if (name == 'behance') { console.log('yee'); return <Behance href={linkTo} /> }
      else if (name == 'codepen') { console.log('yee'); return <Codepen href={linkTo} /> }
      else if (name == 'dribble') { console.log('yee'); return <Dribble href={linkTo} /> }
      else if (name == 'facebook') { console.log('yee'); return <Facebook href={linkTo} /> }
      else if (name == 'github') { console.log('yee'); return <Github href={linkTo} /> }
      else if (name == 'instagram') { console.log('yee'); return <Instagram href={linkTo} /> }
      else if (name == 'linkedin') { console.log('yee'); return <Linkedin href={linkTo} /> }
      else if (name == 'twitter') { console.log('yee'); return <Twitter href={linkTo} /> }
      else if (name == 'youtube') { console.log('yee'); return <Youtube href={linkTo} /> }
      else { console.log('naahhhhh'); return <Other href={linkTo} /> }
    }
    var sockComp = sockLoader( name, linkTo )
    // console.log(sockComp)
    return (
     <div className={styles.container}>
        <div>
          {sockComp}
        </div>
    </div>
    )})
}

