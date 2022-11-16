// IMPORTS ============================================================================== // 
import Head from 'next/head'
import { useEffect } from 'react'
import Image from 'next/image'

// COMPONENT IMPORTS ==================================================================== // 
import  Image1  from '../../public/assets/images/Griddy/Image1.jpg'
import  Image2  from '../../public/assets/images/Griddy/Image2.jpg'
import  Image3  from '../../public/assets/images/Griddy/Image3.jpg'
import  Image4  from '../../public/assets/images/Griddy/Image4.jpg'

// STYLES =============================================================================== // 
import styles from './masonry.module.css'
import Masonry from 'masonry-layout'
import Script from 'next/script'

// OVERVIEW ============================================================================= // 
/* 
Name: Example component
Author: Logan Trundle
Collaborators: 

Description: 
- Example component to illustrate file structure.
*/

export const MasonryJS = () => {

  let images = [
    {
      id: 1,
      imgSrc: Image1,
    },
    {
      id: 2,
      imgSrc: Image2,
    },
    {
      id: 3,
      imgSrc: Image3,
    },
    {
      id: 4,
      imgSrc: Image4,
    },
    {
      id: 5,
      imgSrc: 'https://drive.google.com/u/2/open?usp=forms_web&id=102DhDeowwOoReVS--oT2mD9MKcchvNCk',
    }
  ]

  window.onload = function () {
    var grid = document.querySelector('.grid');
    console.log(grid)
    if (grid) {
      var msnry = new Masonry(grid);
    }
  }
  

    return (
      <div className={styles.container}>
        {/* <Script>
          {`
          var elem = document.querySelector('.grid');
          var msnry = new Masonry( elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: 200
          });
          
          // element argument can be a selector string
          //   for an individual element
          var msnry = new Masonry( '.grid', {
            // options
          });
          `}
        </Script> */}
        <div className={styles.grid}>
          {images.map((image, i) => (
            <div className={styles.porjectImages} key={i}>
              <Image className={`styles.projectImage${image.id}`} src={image.imgSrc} blurDataURL={image.imgSrc}/>
            </div>
          ))}
        </div>
      </div>
    )
}
