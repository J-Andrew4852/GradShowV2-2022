// import React from 'react'
// import styles from './videocarousel.module.css'
// import { Carousel } from 'react-bootstrap'
// import ReactPlayer from 'react-player'
// import "bootstrap/dist/css/bootstrap.css"
// import dynamic from 'next/dynamic'


// const VideoCarousel = () => {
//   const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
//   const videoProperties = [
//     {
//       id: 1,
//       title: "DIGEX",
//       src: 'https://www.youtube.com/watch?v=pbNs7tAUFkk',
//       credit: "DIGEX"
//     },
//     {
//       id: 2,
//       title: "GRFX",
//       src: 'https://www.youtube.com/watch?v=pbNs7tAUFkk',
//       credit: "GRFX"
//     },
//     {
//       id: 3,
//       title: "AGD",
//       src: 'https://www.youtube.com/watch?v=pbNs7tAUFkk',
//       credit: "AGD"
//     },
//   ];
  
//   return  (
//   <div>
//     <Carousel>
//       {videoProperties.map((videoObj) => {
//         return (
//           <Carousel.Item key={videoObj.id}>
//             <ReactPlayer 
//               url={videoObj.src}
//               pip={true}
//               loop={true}
//               width={'57vw'}
//               height={'57vh'}
//               controls={false}
//               playing={false}
//             />
//             {/* <Carousel.Caption>
//               <h3>{videoObj.title}</h3>
//               <p>{videoObj.credit}</p>
//             </Carousel.Caption> */}
//           </Carousel.Item>
//         )
//        })}
//     </Carousel>
//   </div>
// )}

// export default VideoCarousel;