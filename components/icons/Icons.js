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

// Socials Icons ========================================================

// export const other = ({ linkTo }) => {
//   return(

//   )
// }

export const SockLoader = ({ name, linkTo }) => {
  if (name == 'artstation') { return <Artstation linkTo={linkTo} size={'50'} /> }
  else if (name == 'behance') { return <Behance linkTo={linkTo} size={'50'} /> }
  else if (name == 'codepen') { return <Codepen linkTo={linkTo} size={'50'} /> }
  else if (name == 'dribble') { return <Dribble linkTo={linkTo} size={'50'} /> }
  else if (name == 'facebook') { return <Facebook linkTo={linkTo} size={'50'} /> }
  else if (name == 'github') { return <Github linkTo={linkTo} size={'50'} /> }
  else if (name == 'instagram') { return <Instagram linkTo={linkTo} size={'50'} /> }
  else if (name == 'linkedin') { return <Linkedin linkTo={linkTo} size={'50'} /> }
  else if (name == 'twitter') { return <Twitter linkTo={linkTo} size={'50'} /> }
  else if (name == 'youtube') { return <Youtube linkTo={linkTo} size={'50'} /> }
  else { return <Other href={linkTo} size={'50'} /> } 
}

export const Artstation = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1119 0H10.6226V2.48702H13.1119V0Z" fill="#283618"/>
        <path d="M3.15924 17.3815H0.669922V19.8685H3.15924V17.3815Z" fill="#283618"/>
        <path d="M5.6485 19.8685H3.15918V22.3555H5.6485V19.8685Z" fill="#283618"/>
        <path d="M5.6485 17.3815H3.15918V19.8685H5.6485V17.3815Z" fill="#283618"/>
        <path d="M8.13532 17.3815H5.646V19.8685H8.13532V17.3815Z" fill="#283618"/>
        <path d="M10.6251 17.3815H8.13574V19.8685H10.6251V17.3815Z" fill="#283618"/>
        <path d="M13.1119 17.3815H10.6226V19.8685H13.1119V17.3815Z" fill="#283618"/>
        <path d="M8.13532 19.8685H5.646V22.3555H8.13532V19.8685Z" fill="#283618"/>
        <path d="M10.6251 19.8685H8.13574V22.3555H10.6251V19.8685Z" fill="#283618"/>
        <path d="M13.1119 19.8685H10.6226V22.3555H13.1119V19.8685Z" fill="#283618"/>
        <path d="M15.6011 19.8685H13.1118V22.3555H15.6011V19.8685Z" fill="#283618"/>
        <path d="M15.6011 0H13.1118V2.48702H15.6011V0Z" fill="#283618"/>
        <path d="M15.6011 2.48706H13.1118V4.97408H15.6011V2.48706Z" fill="#283618"/>
        <path d="M18.0884 4.974H15.5991V7.46103H18.0884V4.974Z" fill="#283618"/>
        <path d="M18.0884 2.48706H15.5991V4.97408H18.0884V2.48706Z" fill="#283618"/>
        <path d="M15.6011 4.974H13.1118V7.46103H15.6011V4.974Z" fill="#283618"/>
        <path d="M20.5777 7.42188H18.0884V9.90891H20.5777V7.42188Z" fill="#283618"/>
        <path d="M18.0884 7.46106H15.5991V9.94808H18.0884V7.46106Z" fill="#283618"/>
        <path d="M23.0645 12.3983H20.5752V14.8853H23.0645V12.3983Z" fill="#283618"/>
        <path d="M20.5777 12.3983H18.0884V14.8853H20.5777V12.3983Z" fill="#283618"/>
        <path d="M23.0645 14.8853H20.5752V17.3723H23.0645V14.8853Z" fill="#283618"/>
        <path d="M20.5777 17.3447H18.0884V19.8317H20.5777V17.3447Z" fill="#283618"/>
        <path d="M20.5777 14.8853H18.0884V17.3723H20.5777V14.8853Z" fill="#283618"/>
        <path d="M20.5777 9.91125H18.0884V12.3983H20.5777V9.91125Z" fill="#283618"/>
        <path d="M18.0884 9.91125H15.5991V12.3983H18.0884V9.91125Z" fill="#283618"/>
        <path d="M8.13532 7.46106H5.646V9.94808H8.13532V7.46106Z" fill="#283618"/>
        <path d="M3.15924 9.94812H0.669922V12.4351H3.15924V9.94812Z" fill="#283618"/>
        <path d="M5.6485 9.94812H3.15918V12.4351H5.6485V9.94812Z" fill="#283618"/>
        <path d="M10.6251 9.94812H8.13574V12.4351H10.6251V9.94812Z" fill="#283618"/>
        <path d="M8.13532 9.94812H5.646V12.4351H8.13532V9.94812Z" fill="#283618"/>
        <path d="M3.15924 12.4351H0.669922V14.9221H3.15924V12.4351Z" fill="#283618"/>
        <path d="M5.6485 12.4351H3.15918V14.9221H5.6485V12.4351Z" fill="#283618"/>
        <path d="M10.6251 12.4351H8.13574V14.9221H10.6251V12.4351Z" fill="#283618"/>
        <path d="M8.13532 12.4351H5.646V14.9221H8.13532V12.4351Z" fill="#283618"/>
        <path d="M13.1119 9.94812H10.6226V12.4351H13.1119V9.94812Z" fill="#283618"/>
        <path d="M13.1119 12.4351H10.6226V14.9221H13.1119V12.4351Z" fill="#283618"/>
        <path d="M10.6251 7.46106H8.13574V9.94808H10.6251V7.46106Z" fill="#283618"/>
        <path d="M8.13532 4.9718H5.646V7.45882H8.13532V4.9718Z" fill="#283618"/>
        <path d="M5.6485 7.46106H3.15918V9.94808H5.6485V7.46106Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Behance = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2749 2.37648H12.6514V0H10.2749H7.89846H5.52197V2.37648H7.89846H10.2749Z" fill="#283618"/>
        <path d="M12.6514 9.50366V11.8778V14.2543V16.6308H15.0255V14.2543V11.8778V9.50366H12.6514Z" fill="#283618"/>
        <path d="M7.89846 14.2544H5.52197V16.6309H7.89846H10.2749H12.6514V14.2544H10.2749H7.89846Z" fill="#283618"/>
        <path d="M3.14567 9.77997V9.50364H5.52215H7.89864H10.2751V7.12715H12.6516V4.75067V2.37418V0H10.2751V2.37418V4.75067V7.12715H7.89864H5.52215H3.14567V6.35571V4.75067V2.37418V0H0.771484V2.37418V4.75067V7.12715V9.77997V13.2042V16.6308H3.14567V13.2042V9.77997Z" fill="#283618"/>
        <path d="M24.4741 2.52384H26.9496V0.0483398H24.4741H22.0009H19.5254V2.52384H22.0009H24.4741Z" fill="#283618"/>
        <path d="M24.4946 6.68278H26.9701L26.9724 4.20728H24.4946H22.0214H19.5459V6.68278H22.0214H24.4946Z" fill="#283618"/>
        <path d="M22.0214 14.1069L19.5459 14.1046V16.5824H22.0214H24.4946H26.9701V14.1069H24.4946H22.0214Z" fill="#283618"/>
        <path d="M26.9705 6.68275H26.8738L26.906 9.1076L25.0408 9.13293L24.4305 9.13983L21.9251 9.17438L21.2665 9.18128L19.5463 9.20431V9.15595V6.68275H17.0731L17.0708 9.15595V11.6315V14.1047H19.5463V11.6798L21.2987 11.6568L21.9573 11.6499L24.4628 11.6153L25.073 11.6084L26.9383 11.5831L26.906 9.15826L29.3815 9.12602L29.3493 6.65051L26.9705 6.68275Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Codepen = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.44896 9.79626H0V12.2448H2.44896V9.79626Z" fill="#283618"/>
        <path d="M2.44896 7.34778H0V9.79627H2.44896V7.34778Z" fill="#283618"/>
        <path d="M4.89818 4.89709H2.44922V7.34559H4.89818V4.89709Z" fill="#283618"/>
        <path d="M7.34447 2.44849H4.89551V4.89698H7.34447V2.44849Z" fill="#283618"/>
        <path d="M9.7932 0H7.34424V2.44849H9.7932V0Z" fill="#283618"/>
        <path d="M12.2244 0H9.77539V2.44849H12.2244V0Z" fill="#283618"/>
        <path d="M2.44896 12.2446H0V14.6931H2.44896V12.2446Z" fill="#283618"/>
        <path d="M2.44896 14.6932H0V17.1417H2.44896V14.6932Z" fill="#283618"/>
        <path d="M4.89818 17.1486H2.44922V19.5971H4.89818V17.1486Z" fill="#283618"/>
        <path d="M7.34447 19.5972H4.89551V22.0457H7.34447V19.5972Z" fill="#283618"/>
        <path d="M9.77562 22.0454H7.32666V24.4939H9.77562V22.0454Z" fill="#283618"/>
        <path d="M12.1721 2.44849H9.72314V4.89698H12.1721V2.44849Z" fill="#283618"/>
        <path d="M12.1721 4.89709H9.72314V7.34559H12.1721V4.89709Z" fill="#283618"/>
        <path d="M12.1721 7.34778H9.72314V9.79627H12.1721V7.34778Z" fill="#283618"/>
        <path d="M9.72582 9.79858H7.27686V12.2471H9.72582V9.79858Z" fill="#283618"/>
        <path d="M14.6711 9.79626H12.2222V12.2448H14.6711V9.79626Z" fill="#283618"/>
        <path d="M12.2244 22.0454H9.77539V24.4939H12.2244V22.0454Z" fill="#283618"/>
        <path d="M12.2244 19.5972H9.77539V22.0457H12.2244V19.5972Z" fill="#283618"/>
        <path d="M12.2244 17.1486H9.77539V19.5971H12.2244V17.1486Z" fill="#283618"/>
        <path d="M22.0002 12.2446H19.5513V14.6931H22.0002V12.2446Z" fill="#283618"/>
        <path d="M22.0002 9.79626H19.5513V12.2448H22.0002V9.79626Z" fill="#283618"/>
        <path d="M14.6711 14.7001H12.2222V17.1486H14.6711V14.7001Z" fill="#283618"/>
        <path d="M17.1203 12.2493H14.6714V14.6978H17.1203V12.2493Z" fill="#283618"/>
        <path d="M19.551 9.79626H17.1021V12.2448H19.551V9.79626Z" fill="#283618"/>
        <path d="M22.0002 7.34778H19.5513V9.79627H22.0002V7.34778Z" fill="#283618"/>
        <path d="M19.5193 4.89709H17.0703V7.34559H19.5193V4.89709Z" fill="#283618"/>
        <path d="M17.072 2.44849H14.623V4.89698H17.072V2.44849Z" fill="#283618"/>
        <path d="M14.6208 0H12.1719V2.44849H14.6208V0Z" fill="#283618"/>
        <path d="M14.6711 22.0454H12.2222V24.4939H14.6711V22.0454Z" fill="#283618"/>
        <path d="M17.1272 19.5972H14.6782V22.0457H17.1272V19.5972Z" fill="#283618"/>
        <path d="M19.5764 17.1486H17.1274V19.5971H19.5764V17.1486Z" fill="#283618"/>
        <path d="M22.0002 14.6932H19.5513V17.1417H22.0002V14.6932Z" fill="#283618"/>
        <path d="M9.76 14.7001H7.31104V17.1486H9.76V14.7001Z" fill="#283618"/>
        <path d="M7.31078 12.2446H4.86182V14.6931H7.31078V12.2446Z" fill="#283618"/>
        <path d="M4.89818 9.79626H2.44922V12.2448H4.89818V9.79626Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Dribble = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2229 2.9463L8.98145 3.30847L9.3469 5.52987L11.5884 5.1677L11.2229 2.9463Z" fill="#283618"/>
        <path d="M15.2932 13.6923L13.0518 14.0544L13.4172 16.2758L15.6587 15.9137L15.2932 13.6923Z" fill="#283618"/>
        <path d="M13.4153 16.2734L11.1738 16.6356L11.5393 18.857L13.7808 18.4948L13.4153 16.2734Z" fill="#283618"/>
        <path d="M13.8313 4.80482L11.5898 5.16699L11.9553 7.38839L14.1968 7.02622L13.8313 4.80482Z" fill="#283618"/>
        <path d="M14.5623 9.24842L12.3208 9.6106L12.6863 11.832L14.9277 11.4698L14.5623 9.24842Z" fill="#283618"/>
        <path d="M14.927 11.4706L12.6855 11.8328L13.051 14.0542L15.2925 13.692L14.927 11.4706Z" fill="#283618"/>
        <path d="M6.32791 15.1408L4.08643 15.5029L4.45188 17.7243L6.69336 17.3622L6.32791 15.1408Z" fill="#283618"/>
        <path d="M19.7747 12.9663L17.5332 13.3285L17.8987 15.5499L20.1401 15.1877L19.7747 12.9663Z" fill="#283618"/>
        <path d="M8.20486 12.5555L5.96338 12.9177L6.32883 15.1391L8.57031 14.7769L8.20486 12.5555Z" fill="#283618"/>
        <path d="M10.4446 12.1926L8.20312 12.5548L8.56857 14.7762L10.8101 14.414L10.4446 12.1926Z" fill="#283618"/>
        <path d="M12.6844 11.8317L10.4429 12.1938L10.8083 14.4152L13.0498 14.0531L12.6844 11.8317Z" fill="#283618"/>
        <path d="M17.1682 11.1074L14.9268 11.4696L15.2922 13.691L17.5337 13.3288L17.1682 11.1074Z" fill="#283618"/>
        <path d="M18.3137 4.08289L16.0723 4.44507L16.4377 6.66647L18.6792 6.30429L18.3137 4.08289Z" fill="#283618"/>
        <path d="M7.47244 8.11414L5.23096 8.47632L5.59641 10.6977L7.83789 10.3355L7.47244 8.11414Z" fill="#283618"/>
        <path d="M4.86599 6.2533L2.62451 6.61548L2.98996 8.83688L5.23144 8.4747L4.86599 6.2533Z" fill="#283618"/>
        <path d="M16.4363 6.66578L14.1948 7.02795L14.5603 9.24936L16.8018 8.88718L16.4363 6.66578Z" fill="#283618"/>
        <path d="M14.1956 7.02698L11.9541 7.38916L12.3196 9.61056L14.561 9.24839L14.1956 7.02698Z" fill="#283618"/>
        <path d="M11.9558 7.38978L9.71436 7.75195L10.0798 9.97335L12.3213 9.61118L11.9558 7.38978Z" fill="#283618"/>
        <path d="M9.71462 7.75294L7.47314 8.11511L7.83859 10.3365L10.0801 9.97434L9.71462 7.75294Z" fill="#283618"/>
        <path d="M18.312 4.08259L18.6779 6.30414L19.4076 10.7473L19.7735 12.9667L20.1394 15.1883L22.381 14.8257L22.0151 12.6062L21.6513 10.3846L21.2854 8.16308L20.9195 5.94153L20.5536 3.71997L18.312 4.08259Z" fill="#283618"/>
        <path d="M17.949 1.86085L15.7075 2.22302L16.073 4.44442L18.3145 4.08225L17.949 1.86085Z" fill="#283618"/>
        <path d="M20.1389 15.188L17.8975 15.5502L18.2629 17.7716L20.5044 17.4094L20.1389 15.188Z" fill="#283618"/>
        <path d="M13.7809 18.4956L11.5393 18.8582L9.29764 19.2208L7.05811 19.5835L7.4219 21.805L9.66353 21.4424L11.9052 21.0798L14.1468 20.7172L16.3884 20.3566L18.6301 19.994L18.2642 17.7725L16.0225 18.1351L13.7809 18.4956Z" fill="#283618"/>
        <path d="M15.3397 3.2714e-05L4.13232 1.81091L4.49777 4.03231L15.7052 2.22143L15.3397 3.2714e-05Z" fill="#283618"/>
        <path d="M4.49929 4.0337L2.25781 4.39587L2.62326 6.61728L4.86474 6.2551L4.49929 4.0337Z" fill="#283618"/>
        <path d="M6.69168 17.3606L4.4502 17.7228L4.81565 19.9442L7.05713 19.582L6.69168 17.3606Z" fill="#283618"/>
        <path d="M3.72067 13.2814L3.35477 11.0598L2.98888 8.83826L2.62298 6.6167L0.381348 6.97932L0.747243 9.20087L1.11314 11.4224L1.47693 13.644L1.84283 15.8635L2.20872 18.085L4.45036 17.7224L4.08446 15.5029L3.72067 13.2814Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Facebook = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4007 11.4933H14.2159H11.0289H7.8418V13.7938H11.0289H14.2159H17.4007V11.4933Z" fill="#283618"/>
        <path d="M12.445 11.4933V9.19277V6.88997V4.58948H10.1445V6.88997V9.19277V11.4933H12.445Z" fill="#283618"/>
        <path d="M15.7493 6.89227H17.4004V4.58948H15.7493H14.0982H12.4448V6.89227H14.0982H15.7493Z" fill="#283618"/>
        <path d="M12.445 4.58716H10.1445V11.4932V20.7021H12.445V4.58716Z" fill="#283618"/>
        <path d="M17.4004 6.89233H15.1621V9.13065H17.4004V6.89233Z" fill="#283618"/>
        <path d="M19.9245 22.192V19.7257H22.377C22.377 19.7257 22.3862 19.7257 22.3908 19.7257V2.46169L19.9245 2.4686V0H2.66502V2.46629H0.19873V19.7257H2.66502V22.192M19.9245 19.7257H2.66502V2.46629H19.9245V19.7257Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Github = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0312 14.0192H8.02832V16.0216H10.0312V14.0192Z" fill="#283618"/>
        <path d="M10.0312 16.0236H8.02832V18.026H10.0312V16.0236Z" fill="#283618"/>
        <path d="M12.0248 16.0236H10.022V18.026H12.0248V16.0236Z" fill="#283618"/>
        <path d="M14.0165 16.0236H12.0137V18.026H14.0165V16.0236Z" fill="#283618"/>
        <path d="M10.0312 18.0278H8.02832V20.0303H10.0312V18.0278Z" fill="#283618"/>
        <path d="M8.02972 16.0236H6.02686V18.026H8.02972V16.0236Z" fill="#283618"/>
        <path d="M6.00677 13.9988H4.00391V16.0013H6.00677V13.9988Z" fill="#283618"/>
        <path d="M12.0248 18.0278H10.022V20.0303H12.0248V18.0278Z" fill="#283618"/>
        <path d="M14.0165 18.0278H12.0137V20.0303H14.0165V18.0278Z" fill="#283618"/>
        <path d="M14.0165 14.0192H12.0137V16.0216H14.0165V14.0192Z" fill="#283618"/>
        <path d="M12.0248 14.0192H10.022V16.0216H12.0248V14.0192Z" fill="#283618"/>
        <path d="M8.02972 12.0131H6.02686V14.0155H8.02972V12.0131Z" fill="#283618"/>
        <path d="M10.0312 12.0167H8.02832V14.0192H10.0312V12.0167Z" fill="#283618"/>
        <path d="M12.0248 12.0167H10.022V14.0192H12.0248V12.0167Z" fill="#283618"/>
        <path d="M14.0165 12.0167H12.0137V14.0192H14.0165V12.0167Z" fill="#283618"/>
        <path d="M16.0117 12.0167H14.0088V14.0192H16.0117V12.0167Z" fill="#283618"/>
        <path d="M8.02972 10.0123H6.02686V12.0148H8.02972V10.0123Z" fill="#283618"/>
        <path d="M10.0312 10.0142H8.02832V12.0166H10.0312V10.0142Z" fill="#283618"/>
        <path d="M12.0248 10.0142H10.022V12.0166H12.0248V10.0142Z" fill="#283618"/>
        <path d="M14.0165 10.0142H12.0137V12.0166H14.0165V10.0142Z" fill="#283618"/>
        <path d="M16.0117 10.0142H14.0088V12.0166H16.0117V10.0142Z" fill="#283618"/>
        <path d="M8.02972 8.01733H6.02686V10.0198H8.02972V8.01733Z" fill="#283618"/>
        <path d="M10.0312 8.01917H8.02832V10.0216H10.0312V8.01917Z" fill="#283618"/>
        <path d="M8.02972 6.01294H6.02686V8.01542H8.02972V6.01294Z" fill="#283618"/>
        <path d="M12.0248 8.01917H10.022V10.0216H12.0248V8.01917Z" fill="#283618"/>
        <path d="M14.0165 8.01917H12.0137V10.0216H14.0165V8.01917Z" fill="#283618"/>
        <path d="M16.0117 8.01917H14.0088V10.0216H16.0117V8.01917Z" fill="#283618"/>
        <path d="M16.0117 6.0166H14.0088V8.01908H16.0117V6.0166Z" fill="#283618"/>
        <path d="M19.999 5.99072V7.9932V11.9982V14.0006V16.0031H22V14.0006V11.9982V9.99569V7.9932V5.99072H19.999Z" fill="#283618"/>
        <path d="M20.0083 3.99011H18.0073V5.99259H20.0083V3.99011Z" fill="#283618"/>
        <path d="M18.0054 1.995H16.0044V3.99748H18.0054V1.995Z" fill="#283618"/>
        <path d="M17.9961 18.0074H15.9951V20.0099H17.9961V18.0074Z" fill="#283618"/>
        <path d="M19.9991 16.0051H17.998V18.0076H19.9991V16.0051Z" fill="#283618"/>
        <path d="M12.0079 20.0304H10.0069H8.00589H6.00488V22.0329H8.00589H10.0069H12.0079H14.0089H16.0099V20.0304H14.0089H12.0079Z" fill="#283618"/>
        <path d="M16.0026 0H5.99756V2.00248H16.0026V0Z" fill="#283618"/>
        <path d="M3.99271 3.98645H1.9917V5.98893H3.99271V3.98645Z" fill="#283618"/>
        <path d="M5.99564 1.98206H3.99463V3.98454H5.99564V1.98206Z" fill="#283618"/>
        <path d="M4.00394 16.0012H2.00293V18.0037H4.00394V16.0012Z" fill="#283618"/>
        <path d="M6.01224 18.0278H4.01123V20.0303H6.01224V18.0278Z" fill="#283618"/>
        <path d="M2.00101 11.9982V9.99569V7.99135V5.99072H0V7.99135V9.99569V11.9982V13.9988V16.0013H2.00101V13.9988V11.9982Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Instagram = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2845 22.3809V19.8938H22.7577C22.7577 19.8938 22.7669 19.8938 22.7715 19.8938V2.48241L20.2845 2.48932V0H2.87764V2.48702H0.390625V19.8938H2.87764V22.3809M20.2845 19.8938H2.87764V2.48702H20.2845V19.8938Z" fill="#283618"/>
        <path d="M18.8565 4.53418H16.3672V7.0212H18.8565V4.53418Z" fill="#283618"/>
        <path d="M14.0693 8.74825V11.2376V13.6325H11.58H9.09528V11.2376V8.74825H11.58H14.0693V6.26123H11.58H9.09298V8.74825H6.60596V11.2376V13.7246H9.09298V16.1195H11.58H14.0693V13.7246H16.5563V11.2376V8.74825H14.0693Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Linkedin = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.732 22V19.5553H22.1851C22.1851 19.5553 22.1943 19.5553 22.1988 19.5553V2.4379L19.732 2.44469V0H2.46679V2.44469H0V19.5553H2.46679V22M19.732 19.5553H2.46679V2.44469H19.732V19.5553Z" fill="#283618"/>
        <path d="M7.40267 4.89172H4.93359V7.33642H7.40267V4.89172Z" fill="#283618"/>
        <path d="M7.40267 9.78101H4.93359V12.2257H7.40267V9.78101Z" fill="#283618"/>
        <path d="M14.8011 9.78101H12.332V12.2257H14.8011V9.78101Z" fill="#283618"/>
        <path d="M17.2699 9.77649H14.8008V12.2212H17.2699V9.77649Z" fill="#283618"/>
        <path d="M17.2699 12.2212H14.8008V14.6659H17.2699V12.2212Z" fill="#283618"/>
        <path d="M17.2699 14.6636H14.8008V17.1083H17.2699V14.6636Z" fill="#283618"/>
        <path d="M7.40267 12.2212H4.93359V14.6659H7.40267V12.2212Z" fill="#283618"/>
        <path d="M7.40267 14.6636H4.93359V17.1083H7.40267V14.6636Z" fill="#283618"/>
        <path d="M12.3343 9.78101H9.86523V12.2257H12.3343V9.78101Z" fill="#283618"/>
        <path d="M12.3343 12.2212H9.86523V14.6659H12.3343V12.2212Z" fill="#283618"/>
        <path d="M12.3343 14.6636H9.86523V17.1083H12.3343V14.6636Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Other = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1467_225)">
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
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.83307 7.41724H5.34375V9.90425H7.83307V7.41724Z" fill="#283618"/>
        <path d="M17.7491 14.8323H15.2598V17.3193H17.7491V14.8323Z" fill="#283618"/>
        <path d="M15.2388 17.3193H12.7495V19.8064H15.2388V17.3193Z" fill="#283618"/>
        <path d="M15.2598 14.8323H12.7705V17.3193H15.2598V14.8323Z" fill="#283618"/>
        <path d="M15.2598 12.343H12.7705V14.83H15.2598V12.343Z" fill="#283618"/>
        <path d="M17.7491 12.343H15.2598V14.83H17.7491V12.343Z" fill="#283618"/>
        <path d="M12.7496 19.8064H10.2603V22.2934H12.7496V19.8064Z" fill="#283618"/>
        <path d="M7.81256 19.8064H5.32324V22.2934H7.81256V19.8064Z" fill="#283618"/>
        <path d="M10.2628 19.8064H7.77344V22.2934H10.2628V19.8064Z" fill="#283618"/>
        <path d="M5.35993 2.48706H2.87061V4.97408H5.35993V2.48706Z" fill="#283618"/>
        <path d="M12.7496 17.3193H10.2603V19.8064H12.7496V17.3193Z" fill="#283618"/>
        <path d="M12.7706 14.8323H10.2812V17.3193H12.7706V14.8323Z" fill="#283618"/>
        <path d="M12.7706 12.343H10.2812V14.83H12.7706V12.343Z" fill="#283618"/>
        <path d="M10.2628 17.3193H7.77344V19.8064H10.2628V17.3193Z" fill="#283618"/>
        <path d="M10.2833 14.8323H7.79395V17.3193H10.2833V14.8323Z" fill="#283618"/>
        <path d="M10.2833 12.343H7.79395V14.83H10.2833V12.343Z" fill="#283618"/>
        <path d="M5.35993 4.9303H2.87061V7.41731H5.35993V4.9303Z" fill="#283618"/>
        <path d="M12.7706 7.41724H10.2812V9.90425H12.7706V7.41724Z" fill="#283618"/>
        <path d="M17.7491 7.41724H15.2598V9.90425H17.7491V7.41724Z" fill="#283618"/>
        <path d="M15.2598 7.41724H12.7705V9.90425H15.2598V7.41724Z" fill="#283618"/>
        <path d="M15.2344 4.9303H12.7451V7.41731H15.2344V4.9303Z" fill="#283618"/>
        <path d="M12.7452 4.9303H10.2559V7.41731H12.7452V4.9303Z" fill="#283618"/>
        <path d="M20.2359 12.343H17.7466V14.83H20.2359V12.343Z" fill="#283618"/>
        <path d="M17.7237 4.9303H15.2344V7.41731H17.7237V4.9303Z" fill="#283618"/>
        <path d="M20.2105 4.9303H17.7212V7.41731H20.2105V4.9303Z" fill="#283618"/>
        <path d="M10.2833 9.9043H7.79395V12.3913H10.2833V9.9043Z" fill="#283618"/>
        <path d="M15.2047 2.44092H12.7153V4.92793H15.2047V2.44092Z" fill="#283618"/>
        <path d="M2.87067 0H0.381348V2.48702H2.87067V0Z" fill="#283618"/>
        <path d="M17.6939 2.44092H15.2046V4.92793H17.6939V2.44092Z" fill="#283618"/>
        <path d="M22.67 4.9303H20.1807V7.41731H22.67V4.9303Z" fill="#283618"/>
        <path d="M20.1807 2.44092H17.6914V4.92793H20.1807V2.44092Z" fill="#283618"/>
        <path d="M10.2833 7.41724H7.79395V9.90425H10.2833V7.41724Z" fill="#283618"/>
        <path d="M20.2359 7.41724H17.7466V9.90425H20.2359V7.41724Z" fill="#283618"/>
        <path d="M20.2359 14.8323H17.7466V17.3193H20.2359V14.8323Z" fill="#283618"/>
        <path d="M7.80768 4.9303H5.31836V7.41731H7.80768V4.9303Z" fill="#283618"/>
        <path d="M7.83307 9.9043H5.34375V12.3913H7.83307V9.9043Z" fill="#283618"/>
        <path d="M5.38532 7.41724H2.896V9.90425H5.38532V7.41724Z" fill="#283618"/>
        <path d="M17.7281 17.3193H15.2388V19.8064H17.7281V17.3193Z" fill="#283618"/>
        <path d="M5.38532 9.9043H2.896V12.3913H5.38532V9.9043Z" fill="#283618"/>
        <path d="M7.83307 12.343H5.34375V14.83H7.83307V12.343Z" fill="#283618"/>
        <path d="M12.7706 9.9043H10.2812V12.3913H12.7706V9.9043Z" fill="#283618"/>
        <path d="M15.2598 9.9043H12.7705V12.3913H15.2598V9.9043Z" fill="#283618"/>
        <path d="M17.7491 9.9043H15.2598V12.3913H17.7491V9.9043Z" fill="#283618"/>
        <path d="M20.2359 9.9043H17.7466V12.3913H20.2359V9.9043Z" fill="#283618"/>
        <path d="M2.87067 2.48706H0.381348V4.97408H2.87067V2.48706Z" fill="#283618"/>
        <path d="M2.87067 4.9303H0.381348V7.41731H2.87067V4.9303Z" fill="#283618"/>
      </svg>
    </a>
  )
}
export const Youtube = ({ linkTo, size }) => {
  return(
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1215 2.45583L21.1262 0.0314307L18.573 0.0269367L16.0198 0.0224564L13.4666 0.0179624L10.9134 0.0134684L8.36023 0.00898804L5.80704 0.00449402L3.25384 0H3.24203V2.41992H0.693564L0.688831 4.84207L0.684106 7.26647L0.67938 9.69087L0.674647 12.1153L0.669922 14.5397V14.5442H3.22311V16.9686H3.21602L5.76921 16.9731L8.3224 16.9776L10.8756 16.9821L13.4288 16.9865L15.982 16.991L18.5352 16.9955L21.0884 17L21.0931 14.5756L23.6463 14.5801L23.651 12.1557L23.6557 9.73129L23.6605 7.30688L23.6652 4.88248L23.6699 2.45808L21.1167 2.45358L21.1215 2.45583ZM16.0033 9.71108H13.4501V12.1377H10.8969V4.86004H13.4501V7.28668H16.0033V9.71108Z" fill="#283618"/>
      </svg>
    </a>
  )
}
