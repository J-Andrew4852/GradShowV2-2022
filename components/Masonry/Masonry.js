// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'

// COMPONENT IMPORTS ==================================================================== // 
import  Image1  from '../../public/assets/images/Griddy/Image1.jpg'
import  Image2  from '../../public/assets/images/Griddy/Image2.jpg'
import  Image3  from '../../public/assets/images/Griddy/Image3.jpg'
import  Image4  from '../../public/assets/images/Griddy/Image4.jpg'

// STYLES =============================================================================== // 
import styles from './masonry.module.css'
import Masonry from 'react-masonry-css'
import Script from 'next/script'

// OVERVIEW ============================================================================= // 
/* 
Name: Example component
Author: James Andrew
Collaborators: 

Description: 
- Masonry grid of student work images.
*/

export const MasonryComp = (data) => {
  let images = data.data.workExamples
  console.log(images)
  let sauce = []
  images.forEach((i) => {
        // console.log("workimage " + i)
        var splitWork = i.split('id=')
        // console.log("split " + splitWork[1])
        var source = `https://drive.google.com/uc?export=view&id=${splitWork[1]}`
        // console.log('src  ' + source)
        sauce.push(source)
        console.log(sauce)
  });
  // console.log("sauce   " + sauce)

  console.log(sauce)
  // let images = [data.workExamples]


  // let images = [
  //   {
  //     id: 1,
  //     imgSrc: Image1,
  //   },
  //   {
  //     id: 2,
  //     imgSrc: Image2,
  //   },
  //   {
  //     id: 3,
  //     imgSrc: Image3,
  //   },
  //   {
  //     id: 4,
  //     imgSrc: Image4,
  //   },
  //   {
  //     id: 5,
  //     imgSrc: Image1,
  //   },
  //   {
  //     id: 6,
  //     imgSrc: Image2,
  //   },
  //   // {
  //   //   id: 9,
  //   //   imgSrc: 'https://drive.google.com/u/2/open?usp=forms_web&id=102DhDeowwOoReVS--oT2mD9MKcchvNCk',
  //   // }
  // ]

  function getCols() {
    if ( images.length == 1 ) {
      return 1
    } else if ( images.length == 2) {
      return 2
    } else if ( images.length == 3) {
      return 3
    } else if ( images.length == 4) {
      return 2
    } else if ( images.length > 4) {
      return 3
    } else {
      return 2
    }
  }
  let cols = getCols()

  const breakpointColumnsObj = {
    default: cols,
    1100: 2,
    700: 1
  };

  return (
    <div className={styles.container}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridCol}>
        {/* array of JSX items */}
        {sauce.map(image => (
          <div className={styles.projectImages} key={image}>
            <div className={styles.imageContainer}>
              <picture>
                <source srcSet={image} type="image/png, image/jpg" />
                <img src={image} alt="Landscape picture" />
              </picture>
              {/* <Image className={styles.projectImage} src={image} layout='fill' objectFit='container'/> */}
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  )
}
