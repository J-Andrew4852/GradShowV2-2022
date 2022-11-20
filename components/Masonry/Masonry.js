// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'

// COMPONENT IMPORTS ==================================================================== // 


// STYLES =============================================================================== // 
import styles from './masonry.module.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// OVERVIEW ============================================================================= // 
/* 
Name: Example component
Author: James Andrew
Collaborators: 

Description: 
- Masonry grid of student work images.
*/

export const MasonryComp = (data) => {

  // console.log(data.data.workExamples)

  let images = data.data.workExamples

  // let images = [
  //   {
  //     id: 1,
  //     imgSrc: '/assets/images/Griddy/Image1.jpg',
  //   },
  //   {
  //     id: 2,
  //     imgSrc: '/assets/images/Griddy/Image2.jpg',
  //   },
  //   {
  //     id: 3,
  //     imgSrc: '/assets/images/Griddy/Image3.jpg',
  //   },
  //   {
  //     id: 4,
  //     imgSrc: '/assets/images/Griddy/Image4.jpg',
  //   },
  //   {
  //     id: 5,
  //     imgSrc: '/assets/images/Griddy/Image1.jpg',
  //   },
  //   {
  //     id: 6,
  //     imgSrc: '/assets/images/Griddy/Image2.jpg',
  //   },
  //   // {
  //   //   id: 9,
  //   //   imgSrc: 'https://drive.google.com/u/2/open?usp=forms_web&id=102DhDeowwOoReVS--oT2mD9MKcchvNCk',
  //   // }
  // ]

  function getCols() {
    // console.log("images" + images.length)
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

  // const breakpointColumnsObj = {
  //   default: cols,
  //   1100: 2,
  //   700: 1
  // };

  // console.log(images)

  const items = images.map( (item, index) => {
    // {console.log(item)}
    return (
        <img src={item} key={index} />
    )
  })
  console.log(cols)
  return (
    <div className={styles.container}>
      <ResponsiveMasonry 
        columnsCountBreakPoints={{600: 1, 900: 2, 900: cols}}
      >

        <Masonry
          className={styles.masonryGrid}
          gutter={'20px'}
        >
          {/* array of JSX items */}
          {items}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
