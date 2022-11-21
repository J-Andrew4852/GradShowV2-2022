// STYLES =============================================================================== // 
import { setRevalidateHeaders } from 'next/dist/server/send-payload'
import styles from './icons.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Icons

Description: 
- Collection of SVG icons
*/
export const Star = ({ size = '22px', filled }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill={filled ? '#141414' : 'none'} xmlns="http://www.w3.org/2000/svg" id="favourite">
      <path d="M13.6667 7.33182V8.33182H14.6667H17.1111H19.5556H21V8.77652H19.5556H18.5556V9.77652V11.2212H17.1111H16.1111V12.2212V14.6659V17.1106V18.1106H17.1111H18.5556V19.5553V21H18.1111V19.5553V18.5553H17.1111H15.6667V17.1106V16.1106H14.6667H13.2222V14.6659V13.6659H12.2222H9.77778H8.77778V14.6659V16.1106H7.33334H6.33334V17.1106V18.5553H4.8889H3.8889V19.5553V21H3.44444V19.5553V18.1106H4.8889H5.8889V17.1106V14.6659V12.2212V11.2212H4.8889H3.44444V9.77652V8.77652H2.44444H1V8.33182H2.44444H4.8889H7.33334H8.33334V7.33182V5.88713H9.77778H10.7778V4.88713V2.44243V1H11.2222V2.44243V4.88713V5.88713H12.2222H13.6667V7.33182Z" stroke="#141414" strokeWidth="2" />
    </svg>
  )
}
export const SidebarIcon = ({ size = 25, ...props }) => {
  return (
    <svg width={size} height={size * 0.76} viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="quickview" {...props}>
      <path d="M22.1446 2.69433L22.1266 0L19.3608 0.0174651L16.595 0.0349301L13.8291 0.0523876L11.0633 0.0698526L8.29748 0.0873177L5.53167 0.104783L2.76583 0.122248L0 0.139705L0.0179285 2.83404L0.0358415 5.52836L0.05377 8.22269L0.0716985 10.917L0.0896271 13.6113L0.107556 16.3057L0.125484 19L2.89131 18.9825L5.65715 18.9651L8.42296 18.9476L11.1888 18.9301L13.9546 18.9127L16.7205 18.8952L19.4863 18.8778L22.2521 18.8603L22.2342 16.166L25 16.1485L24.9821 13.4542L24.9642 10.7598L24.9462 8.06552L24.9283 5.37119L24.9104 2.67687L22.1446 2.69433ZM8.40505 16.2508L5.63921 16.2682L2.87338 16.2857L2.85545 13.5914L2.83752 10.8971L2.81961 8.20273L2.80168 5.50841L2.78375 2.81408L5.54958 2.79661L8.31542 2.77915L11.0812 2.76169L11.0992 5.45601L11.1171 8.15034L11.135 10.8447L11.1529 13.539L11.1709 16.2333L8.40505 16.2508Z" fill="#141414" />
    </svg>
  )
}

export const Caret = ({ direction }) => {
  return (
    <>
      {direction === 'down' &&
        <svg width="15" height="8" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.53556 1.17155L4.35358 4.35353C4.15832 4.54879 3.84173 4.54879 3.64647 4.35353L0.464492 1.17155C0.26923 0.976284 0.26923 0.659702 0.464492 0.464439C0.659755 0.269177 0.976337 0.269177 1.1716 0.46444L3.70713 2.99997L4.29292 2.99997L6.82845 0.46444C7.02372 0.269178 7.3403 0.269178 7.53556 0.46444C7.73082 0.659702 7.73082 0.976284 7.53556 1.17155Z" fill="#141414" />
        </svg>
      }
      {direction === 'up' &&
        <svg width="15" height="8" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.53556 3.64645L4.35358 0.464466C4.15832 0.269204 3.84173 0.269204 3.64647 0.464466L0.464492 3.64645C0.26923 3.84171 0.26923 4.15829 0.464492 4.35355C0.659755 4.54882 0.976337 4.54882 1.1716 4.35355L3.70713 1.81802L4.29292 1.81802L6.82845 4.35355C7.02372 4.54882 7.3403 4.54882 7.53556 4.35355C7.73082 4.15829 7.73082 3.84171 7.53556 3.64645Z" fill="#141414" />
        </svg>
      }
    </>
  )
}

export const Arrow = ({ direction = 'right', size = '15' }) => {
  return (
    <svg width={`${size}px`} height={`${size / 2}px`} className={direction === 'left' ? `${styles.pointLeft} ${styles.icon}` : `${styles.icon}`} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.50775e-08 4.5L14 4.5L14 3.5L4.50775e-08 3.5L-4.50775e-08 4.5Z" fill="#141414" />
    </svg>
  )
}

export const ExternalLink = () => {
  return (
    <svg className={styles.icon} width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.42105 1.68421H1V14H13.3158V10.5789M14 1L5.10526 9.89474" stroke="#141414" strokeLinecap="round" />
      <path d="M14 1H7.1579" stroke="#141414" />
      <path d="M14 1V7.15789" stroke="#141414" />
    </svg>
  )
}

export const RocketShipIcon = ({ animate, size = "51"}) => {
  return (
    <svg className={animate ? `${styles.animate}` : `` } width={size} height={size * 1.55} viewBox="0 0 51 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Rocket">
        <path id={styles.initialRocket} d="M41 60.1111V48.3333H35V18.8889H29V13H23V18.8889H17V48.3333H11V60.1111H5V66H17V54.2222H23V66H29V54.2222H35V66H47V60.1111H41V60.1111ZM23 24.7778H29V30.6667H23V24.7778ZM23 36.5556H29V42.4444H23V36.5556Z" />
        <g id={styles.speedLines}>
          <rect className={`${styles.speedLine} ${styles.light}`} x="5" y="4" width="6" height="24" fill="#3B3B3C" />
          <rect className={`${styles.speedLine} ${styles.light}`} opacity="0.3" x="5" y="33" width="6" height="9" />
          <rect className={`${styles.speedLine} ${styles.light}`} opacity="0.3" x="35" y="70" width="6" height="6" />
          <rect className={`${styles.speedLine} ${styles.light}`} opacity="0.3" x="20" y="9" width="6" height="32" />
          <rect className={`${styles.speedLine} ${styles.light}`} x="35" y="35" width="6" height="30" />
          <rect className={`${styles.speedLine} ${styles.light}`} x="41" y="2" width="6" height="30" />
          <rect className={`${styles.speedLine} ${styles.light}`} x="17" y="38" width="6" height="30" />
        </g>
        <path id={styles.endRocket} d="M41 60.1111V48.3333H35V18.8889H29V13H23V18.8889H17V48.3333H11V60.1111H5V66H17V54.2222H23V66H29V54.2222H35V66H47V60.1111H41V60.1111ZM23 24.7778H29V30.6667H23V24.7778ZM23 36.5556H29V42.4444H23V36.5556Z" />
      </g>
    </svg>

  )
}

export const AlienIcon = () =>{
  return(
    <svg width="55" height="50" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M68.8889 34.4445V43.0555H60.2778V34.4445H68.8889V25.8333H60.2778V8.61115H51.6667V0H25.8333V8.61115H17.2222V25.8333H8.6111V34.4445H17.2222V43.0555H8.6111V34.4445H0V51.6667H17.2222V60.2778H25.8333V51.6667H34.4445V68.8889H43.0555V51.6667H51.6667V60.2778H60.2778V51.6667H77.5V34.4445H68.8889ZM25.8333 17.2222H34.4445V8.61115H43.0555V17.2222H51.6667V25.8333H25.8333V17.2222ZM25.8333 43.0555V34.4445H34.4445V43.0555H25.8333ZM43.0555 43.0555V34.4445H51.6667V43.0555H43.0555Z" fill="var(--dark-green)"/>
      <path d="M68.8894 60.2698H60.2783V68.8809H68.8894V60.2698Z" fill="var(--dark-green)"/>
      <path d="M17.2225 60.2698H8.61133V68.8809H17.2225V60.2698Z" fill="var(--dark-green)"/>
    </svg>
  )
}

// Socials Icons ========================================================

// export const other = ({ linkTo }) => {
//   return(

//   )
// }

export const SockLoader = ({ name, linkTo }) => {
  if (name == 'artstation') { return <Artstation linkTo={linkTo} size={'50'} /> }
  else if (name == 'behance') { return <Behance linkTo={linkTo} size={'50'} /> }
  else if (name == 'codepen') { return <Codepen linkTo={linkTo} size={'50'} /> }
  else if (name == 'dribbble') { return <Dribbble linkTo={linkTo} size={'50'} /> }
  else if (name == 'facebook') { return <Facebook linkTo={linkTo} size={'50'} /> }
  else if (name == 'github') { return <Github linkTo={linkTo} size={'50'} /> }
  else if (name == 'instagram') { return <Instagram linkTo={linkTo} size={'50'} /> }
  else if (name == 'linkedin') { return <Linkedin linkTo={linkTo} size={'50'} /> }
  else if (name == 'twitter') { return <Twitter linkTo={linkTo} size={'50'} /> }
  else if (name == 'youtube') { return <Youtube linkTo={linkTo} size={'50'} /> }
  else { return <Other linkTo={linkTo} size={'50'} /> } 
}

export const Artstation = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 23" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M13.1,0h-2.5v2.5h2.5V0z M3.2,17.4H0.7v2.5h2.5V17.4z M5.6,19.9H3.2v2.5h2.5V19.9z M5.6,17.4H3.2v2.5h2.5V17.4z
          M8.1,17.4H5.6v2.5h2.5V17.4z M10.6,17.4H8.1v2.5h2.5V17.4z M13.1,17.4h-2.5v2.5h2.5V17.4z M8.1,19.9H5.6v2.5h2.5V19.9z M10.6,19.9
          H8.1v2.5h2.5V19.9z M13.1,19.9h-2.5v2.5h2.5V19.9z M15.6,19.9h-2.5v2.5h2.5V19.9z M15.6,0h-2.5v2.5h2.5V0z M15.6,2.5h-2.5V5h2.5V2.5
          z M18.1,5h-2.5v2.5h2.5V5z M18.1,2.5h-2.5V5h2.5V2.5z M15.6,5h-2.5v2.5h2.5V5z M20.6,7.4h-2.5v2.5h2.5V7.4z M18.1,7.5h-2.5v2.5h2.5
          V7.5z M23.1,12.4h-2.5v2.5h2.5V12.4z M20.6,12.4h-2.5v2.5h2.5V12.4z M23.1,14.9h-2.5v2.5h2.5V14.9z M20.6,17.3h-2.5v2.5h2.5V17.3z
          M20.6,14.9h-2.5v2.5h2.5V14.9z M20.6,9.9h-2.5v2.5h2.5V9.9z M18.1,9.9h-2.5v2.5h2.5V9.9z M8.1,7.5H5.6v2.5h2.5V7.5z M3.2,9.9H0.7
          v2.5h2.5V9.9z M5.6,9.9H3.2v2.5h2.5V9.9z M10.6,9.9H8.1v2.5h2.5V9.9z M8.1,9.9H5.6v2.5h2.5V9.9z M3.2,12.4H0.7v2.5h2.5V12.4z
          M5.6,12.4H3.2v2.5h2.5V12.4z M10.6,12.4H8.1v2.5h2.5V12.4z M8.1,12.4H5.6v2.5h2.5V12.4z M13.1,9.9h-2.5v2.5h2.5V9.9z M13.1,12.4
          h-2.5v2.5h2.5V12.4z M10.6,7.5H8.1v2.5h2.5V7.5z M8.1,5H5.6v2.5h2.5V5z M5.6,7.5H3.2v2.5h2.5V7.5z"/>
        </svg>
    </a>
  )
}
export const Behance = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 30 23" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M10.3,5.6h2.4V3.2h-2.4H7.9H5.5v2.4h2.4H10.3z M12.7,12.7v2.4v2.4v2.4H15v-2.4v-2.4v-2.4H12.7z M7.9,17.4H5.5
          v2.4h2.4h2.4h2.4v-2.4h-2.4H7.9z M3.1,13v-0.3h2.4h2.4h2.4v-2.4h2.4V7.9V5.6V3.2h-2.4v2.4v2.4v2.4H7.9H5.5H3.1V9.5V7.9V5.6V3.2H0.8
          v2.4v2.4v2.4V13v3.4v3.4h2.4v-3.4V13z M24.5,5.7h2.5V3.2h-2.5H22h-2.5v2.5H22H24.5z M24.5,9.9H27l0-2.5h-2.5H22h-2.5v2.5H22H24.5z
          M22,17.3l-2.5,0v2.5H22h2.5H27v-2.5h-2.5H22z M27,9.9L27,9.9l-0.1,2.4l-1.9,0l-0.6,0l-2.5,0l-0.7,0l-1.7,0v0V9.9h-2.5l0,2.5v2.5
          v2.5h2.5v-2.4l1.8,0l0.7,0l2.5,0l0.6,0l1.9,0l0-2.4l2.5,0l0-2.5L27,9.9z"/>
      </svg>
    </a>
  )
}
export const Codepen = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 25" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M3.7,10H1.2v2.4h2.4V10z M3.7,7.6H1.2V10h2.4V7.6z M6.1,5.2H3.7v2.4h2.4V5.2z M8.6,2.7H6.1v2.4h2.4V2.7z
        M11,0.3H8.6v2.4H11V0.3z M13.4,0.3H11v2.4h2.4V0.3z M3.7,12.5H1.2v2.4h2.4V12.5z M3.7,14.9H1.2v2.4h2.4V14.9z M6.1,17.4H3.7v2.4
        h2.4V17.4z M8.6,19.9H6.1v2.4h2.4V19.9z M11,22.3H8.6v2.4H11V22.3z M13.4,2.7h-2.4v2.4h2.4V2.7z M13.4,5.2h-2.4v2.4h2.4V5.2z
        M13.4,7.6h-2.4V10h2.4V7.6z M11,10.1H8.5v2.4H11V10.1z M15.9,10h-2.4v2.4h2.4V10z M13.4,22.3H11v2.4h2.4V22.3z M13.4,19.9H11v2.4
        h2.4V19.9z M13.4,17.4H11v2.4h2.4V17.4z M23.2,12.5h-2.4v2.4h2.4V12.5z M23.2,10h-2.4v2.4h2.4V10z M15.9,15h-2.4v2.4h2.4V15z
        M18.3,12.5h-2.4V15h2.4V12.5z M20.8,10h-2.4v2.4h2.4V10z M23.2,7.6h-2.4V10h2.4V7.6z M20.7,5.2h-2.4v2.4h2.4V5.2z M18.3,2.7h-2.4
        v2.4h2.4V2.7z M15.8,0.3h-2.4v2.4h2.4V0.3z M15.9,22.3h-2.4v2.4h2.4V22.3z M18.4,19.9h-2.4v2.4h2.4V19.9z M20.8,17.4h-2.4v2.4h2.4
        V17.4z M23.2,14.9h-2.4v2.4h2.4V14.9z M11,15H8.5v2.4H11V15z M8.5,12.5H6.1v2.4h2.4V12.5z M6.1,10H3.7v2.4h2.4V10z"/>
      </svg>
    </a>
  )
}
export const Dribbble = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 22" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M11.2,2.9L9,3.3l0.4,2.2l2.2-0.4L11.2,2.9z M15.3,13.7l-2.2,0.4l0.4,2.2l2.2-0.4L15.3,13.7z M13.4,16.3
        l-2.2,0.4l0.4,2.2l2.2-0.4L13.4,16.3z M13.8,4.8l-2.2,0.4L12,7.4L14.2,7L13.8,4.8z M14.6,9.2l-2.2,0.4l0.4,2.2l2.2-0.4L14.6,9.2z
        M14.9,11.5l-2.2,0.4l0.4,2.2l2.2-0.4L14.9,11.5z M6.3,15.1l-2.2,0.4l0.4,2.2l2.2-0.4L6.3,15.1z M19.8,13l-2.2,0.4l0.4,2.2l2.2-0.4
        L19.8,13z M8.2,12.6L6,12.9l0.4,2.2l2.2-0.4L8.2,12.6z M10.4,12.2l-2.2,0.4l0.4,2.2l2.2-0.4L10.4,12.2z M12.7,11.8l-2.2,0.4l0.4,2.2
        l2.2-0.4L12.7,11.8z M17.2,11.1l-2.2,0.4l0.4,2.2l2.2-0.4L17.2,11.1z M18.3,4.1l-2.2,0.4l0.4,2.2l2.2-0.4L18.3,4.1z M7.5,8.1
        L5.2,8.5l0.4,2.2l2.2-0.4L7.5,8.1z M4.9,6.3L2.6,6.6L3,8.8l2.2-0.4L4.9,6.3z M16.4,6.7L14.2,7l0.4,2.2l2.2-0.4L16.4,6.7z M14.2,7
        L12,7.4l0.4,2.2l2.2-0.4L14.2,7z M12,7.4L9.7,7.8l0.4,2.2l2.2-0.4L12,7.4z M9.7,7.8L7.5,8.1l0.4,2.2l2.2-0.4L9.7,7.8z M18.3,4.1
        l0.4,2.2l0.7,4.4l0.4,2.2l0.4,2.2l2.2-0.4L22,12.6l-0.4-2.2l-0.4-2.2l-0.4-2.2l-0.4-2.2L18.3,4.1z M17.9,1.9l-2.2,0.4l0.4,2.2
        l2.2-0.4L17.9,1.9z M20.1,15.2l-2.2,0.4l0.4,2.2l2.2-0.4L20.1,15.2z M13.8,18.5l-2.2,0.4l-2.2,0.4l-2.2,0.4l0.4,2.2l2.2-0.4l2.2-0.4
        l2.2-0.4l2.2-0.4l2.2-0.4l-0.4-2.2L16,18.1L13.8,18.5z M15.3,0L4.1,1.8L4.5,4l11.2-1.8L15.3,0z M4.5,4L2.3,4.4l0.4,2.2l2.2-0.4
        L4.5,4z M6.7,17.4l-2.2,0.4l0.4,2.2l2.2-0.4L6.7,17.4z M3.7,13.3l-0.4-2.2L3,8.8L2.6,6.6L0.4,7l0.4,2.2l0.4,2.2l0.4,2.2l0.4,2.2
        l0.4,2.2l2.2-0.4l-0.4-2.2L3.7,13.3z"/>
      </svg>
    </a>
  )
}
export const Facebook = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 23" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M17.4,11.5h-3.2H11H7.8v2.3H11h3.2h3.2V11.5z M12.4,11.5V9.2V6.9V4.6h-2.3v2.3v2.3v2.3H12.4z M15.7,6.9h1.7V4.6
        h-1.7h-1.7h-1.7v2.3h1.7H15.7z M12.4,4.6h-2.3v6.9v9.2h2.3V4.6z M17.4,6.9h-2.2v2.2h2.2V6.9z M19.9,22.2v-2.5h2.5c0,0,0,0,0,0V2.5
        l-2.5,0V0H2.7v2.5H0.2v17.3h2.5v2.5 M19.9,19.7H2.7V2.5h17.3V19.7z"/>
      </svg>
    </a>
  )
}
export const Github = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 22 23" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M10,14H8v2h2V14z M10,16H8v2h2V16z M12,16h-2v2h2V16z M14,16h-2v2h2V16z M10,18H8v2h2V18z M8,16H6v2h2V16z
        M6,14H4v2h2V14z M12,18h-2v2h2V18z M14,18h-2v2h2V18z M14,14h-2v2h2V14z M12,14h-2v2h2V14z M8,12H6v2h2V12z M10,12H8v2h2V12z
        M12,12h-2v2h2V12z M14,12h-2v2h2V12z M16,12h-2v2h2V12z M8,10H6v2h2V10z M10,10H8v2h2V10z M12,10h-2v2h2V10z M14,10h-2v2h2V10z
        M16,10h-2v2h2V10z M8,8H6v2h2V8z M10,8H8v2h2V8z M8,6H6v2h2V6z M12,8h-2v2h2V8z M14,8h-2v2h2V8z M16,8h-2v2h2V8z M16,6h-2v2h2V6z
        M20,6v2v4v2v2h2v-2v-2v-2V8V6H20z M20,4h-2v2h2V4z M18,2h-2v2h2V2z M18,18h-2v2h2V18z M20,16h-2v2h2V16z M12,20h-2H8H6v2h2h2h2h2h2
        v-2h-2H12z M16,0H6v2h10V0z M4,4H2v2h2V4z M6,2H4v2h2V2z M4,16H2v2h2V16z M6,18H4v2h2V18z M2,12v-2V8V6H0v2v2v2v2v2h2v-2V12z"/>
      </svg>
    </a>
  )
}
export const Instagram = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 23" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M20.3,22.4v-2.5h2.5c0,0,0,0,0,0V2.5l-2.5,0V0H2.9v2.5H0.4v17.4h2.5v2.5 M20.3,19.9H2.9V2.5h17.4V19.9z
        M18.9,4.5h-2.5V7h2.5V4.5z M14.1,8.7v2.5v2.4h-2.5H9.1v-2.4V8.7h2.5H14.1V6.3h-2.5H9.1v2.5H6.6v2.5v2.5h2.5v2.4h2.5h2.5v-2.4h2.5
        v-2.5V8.7H14.1z"/>
      </svg>
    </a>
  )
}
export const Linkedin = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 23" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M20.1,22.5v-2.4h2.5c0,0,0,0,0,0V2.9l-2.5,0V0.5H2.9v2.4H0.4v17.1h2.5v2.4 M20.1,20.1H2.9V2.9h17.3V20.1z
        M7.8,5.4H5.3v2.4h2.5V5.4z M7.8,10.3H5.3v2.4h2.5V10.3z M15.2,10.3h-2.5v2.4h2.5V10.3z M17.7,10.3h-2.5v2.4h2.5V10.3z M17.7,12.7
        h-2.5v2.4h2.5V12.7z M17.7,15.2h-2.5v2.4h2.5V15.2z M7.8,12.7H5.3v2.4h2.5V12.7z M7.8,15.2H5.3v2.4h2.5V15.2z M12.7,10.3h-2.5v2.4
        h2.5V10.3z M12.7,12.7h-2.5v2.4h2.5V12.7z M12.7,15.2h-2.5v2.4h2.5V15.2z"/>
      </svg>
    </a>
  )
}
export const Other = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1467_225)">
        <path d="M19.5555 4.88892V7.33336H17.1111V4.88892H14.6666V7.33336H12.2222V9.7778H14.6666V12.2222H17.1111H19.5555V14.6667V17.1089H21.9999V14.6667V12.2222V9.7778V7.33336V4.88892H19.5555Z" fill="#283618"/>
        <path d="M19.5558 2.44446H17.1113V4.8889H19.5558V2.44446Z" fill="#283618"/>
        <path d="M19.5558 17.1089H17.1113V19.5533H19.5558V17.1089Z" fill="#283618"/>
        <path d="M12.222 19.5555H9.77756H7.33312H4.88867V22H7.33312H9.77756H12.222H14.6665H17.1109V19.5555H14.6665H12.222Z" fill="#283618"/>
        <path d="M7.33312 4.88889H4.88867V7.33333V9.77778H7.33312V7.33333H9.77756V4.88889V2.44444H12.222H14.6665H17.1109V0H14.6665H12.222H9.77756H7.33312H4.88867V2.44444H7.33312V4.88889Z" fill="#283618"/>
        <path d="M7.33312 14.6666V17.1088H9.77756V14.6666V12.2222H7.33312H4.88867V14.6666H7.33312Z" fill="#283618"/>
        <path d="M4.88878 2.44446H2.44434V4.8889H4.88878V2.44446Z" fill="#283618"/>
        <path d="M4.88878 17.1089H2.44434V19.5533H4.88878V17.1089Z" fill="#283618"/>
        <path d="M2.44444 12.2222H4.88889V9.7778H2.44444V7.33336V4.88892H0V7.33336V9.7778V12.2222V14.6667V17.1089H2.44444V14.6667V12.2222Z" fill="#283618"/>
        </g>
        <defs>
        <clipPath id="clip0_1467_225">
        <rect width="22" height="22" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </a>
  )
}
export const Twitter = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 23" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M7.8,7.4H5.3v2.5h2.5V7.4z M17.7,14.8h-2.5v2.5h2.5V14.8z M15.2,17.3h-2.5v2.5h2.5V17.3z M15.3,14.8h-2.5v2.5
        h2.5V14.8z M15.3,12.3h-2.5v2.5h2.5V12.3z M17.7,12.3h-2.5v2.5h2.5V12.3z M12.7,19.8h-2.5v2.5h2.5V19.8z M7.8,19.8H5.3v2.5h2.5V19.8
        z M10.3,19.8H7.8v2.5h2.5V19.8z M5.4,2.5H2.9V5h2.5V2.5z M12.7,17.3h-2.5v2.5h2.5V17.3z M12.8,14.8h-2.5v2.5h2.5V14.8z M12.8,12.3
        h-2.5v2.5h2.5V12.3z M10.3,17.3H7.8v2.5h2.5V17.3z M10.3,14.8H7.8v2.5h2.5V14.8z M10.3,12.3H7.8v2.5h2.5V12.3z M5.4,4.9H2.9v2.5h2.5
        V4.9z M12.8,7.4h-2.5v2.5h2.5V7.4z M17.7,7.4h-2.5v2.5h2.5V7.4z M15.3,7.4h-2.5v2.5h2.5V7.4z M15.2,4.9h-2.5v2.5h2.5V4.9z M12.7,4.9
        h-2.5v2.5h2.5V4.9z M20.2,12.3h-2.5v2.5h2.5V12.3z M17.7,4.9h-2.5v2.5h2.5V4.9z M20.2,4.9h-2.5v2.5h2.5V4.9z M10.3,9.9H7.8v2.5h2.5
        V9.9z M15.2,2.4h-2.5v2.5h2.5V2.4z M2.9,0H0.4v2.5h2.5V0z M17.7,2.4h-2.5v2.5h2.5V2.4z M22.7,4.9h-2.5v2.5h2.5V4.9z M20.2,2.4h-2.5
        v2.5h2.5V2.4z M10.3,7.4H7.8v2.5h2.5V7.4z M20.2,7.4h-2.5v2.5h2.5V7.4z M20.2,14.8h-2.5v2.5h2.5V14.8z M7.8,4.9H5.3v2.5h2.5V4.9z
        M7.8,9.9H5.3v2.5h2.5V9.9z M5.4,7.4H2.9v2.5h2.5V7.4z M17.7,17.3h-2.5v2.5h2.5V17.3z M5.4,9.9H2.9v2.5h2.5V9.9z M7.8,12.3H5.3v2.5
        h2.5V12.3z M12.8,9.9h-2.5v2.5h2.5V9.9z M15.3,9.9h-2.5v2.5h2.5V9.9z M17.7,9.9h-2.5v2.5h2.5V9.9z M20.2,9.9h-2.5v2.5h2.5V9.9z
        M2.9,2.5H0.4V5h2.5V2.5z M2.9,4.9H0.4v2.5h2.5V4.9z"/>
      </svg>
    </a>
  )
}
export const Youtube = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 23" fill="#283618" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M21,5.5L21,3l-2.6,0l-2.6,0l-2.6,0l-2.6,0L8.2,3L5.6,3L3.1,3h0v2.4H0.5l0,2.4l0,2.4l0,2.4l0,2.4l0,2.4v0h2.6V20
        h0l2.6,0l2.6,0l2.6,0l2.6,0l2.6,0l2.6,0l2.6,0l0-2.4l2.6,0l0-2.4l0-2.4l0-2.4l0-2.4l0-2.4L21,5.5L21,5.5z M15.8,12.7h-2.6v2.4h-2.6
        V7.9h2.6v2.4h2.6V12.7z"/>
      </svg>
    </a>
  )
}
