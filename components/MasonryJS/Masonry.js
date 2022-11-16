// IMPORTS ============================================================================== // 
import Head from 'next/head'
import {useEffect} from 'react'
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
  ]


  useEffect(()=>{
    var elem = document.querySelector('.grid');
    new Masonry(elem, {
      itemSelector: '.grid-item',
      columnWidth: 50
    });
    }, []);


  return (
      <div className={styles.container}>
          <div className='grid'>
            {images.map((image, i) => (
                <div className='grid-item' key={i}>
                  <Image src={image.imgSrc} blurDataURL={image.imgSrc}/>
                </div>
            ))}
          </div>
      </div>
    )
}
