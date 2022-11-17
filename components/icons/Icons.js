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
    <svg width="78" height="69" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M68.8889 34.4445V43.0555H60.2778V34.4445H68.8889V25.8333H60.2778V8.61115H51.6667V0H25.8333V8.61115H17.2222V25.8333H8.6111V34.4445H17.2222V43.0555H8.6111V34.4445H0V51.6667H17.2222V60.2778H25.8333V51.6667H34.4445V68.8889H43.0555V51.6667H51.6667V60.2778H60.2778V51.6667H77.5V34.4445H68.8889ZM25.8333 17.2222H34.4445V8.61115H43.0555V17.2222H51.6667V25.8333H25.8333V17.2222ZM25.8333 43.0555V34.4445H34.4445V43.0555H25.8333ZM43.0555 43.0555V34.4445H51.6667V43.0555H43.0555Z" fill="var(--dark-green)"/>
      <path d="M68.8894 60.2698H60.2783V68.8809H68.8894V60.2698Z" fill="var(--dark-green)"/>
      <path d="M17.2225 60.2698H8.61133V68.8809H17.2225V60.2698Z" fill="var(--dark-green)"/>
    </svg>
  )
}