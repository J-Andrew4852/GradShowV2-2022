// IMPORTS ============================================================================== // 
import Head from 'next/head'
import React, { Component } from 'react';

// COMPONENT IMPORTS ==================================================================== // 
import { Artstation, Behance, Codepen, Dribble, Facebook, Github, Instagram, Linkedin, Other, Twitter, Youtube } from '../icons/Icons'

// STYLES =============================================================================== // 
import styles from './socials.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Example component
Author: Logan Trundle
Collaborators: 

Description: 
- Example component to illustrate file structure.
*/


export const Socials = (data) => {

Component = {
    artstation: Artstation,
    behance: Behance,
    codepen: Codepen,
    dribble: Dribble,
    facebook: Facebook,
    github: Github,
    instagram: Instagram,
    linkedin: Linkedin,
    other: Other,
    twitter: Twitter,
    youtube: Youtube
};


// console.log(data.data.socials)

var socials = data.data.socials

console.log(socials)

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
  
  console.log(sauce)

  sauce.map((icon) => {
    const TagName = this.Component[this.props.tag || icon[0]];
    console.log(TagName)
    console.log(icon.input)
    return (
     <div className={styles.container}>
        <div>
          {/* {TagName} */}
          <TagName linkTo={icon.input} />
        </div>
    </div>
    )})
}

