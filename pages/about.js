// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import introImage from '../public/assets/images/About/intro-image.jpg'
import signature from '../public/assets/images/About/signature.png'
import sparkle from '../public/assets/images/About/sparkle.png'
import eye from '../public/assets/images/About/eye.png'
import world from '../public/assets/images/About/world.png'
import space from '../public/assets/images/About/space.png'
import team from '../public/assets/images/About/team.png'
import crew from '../public/assets/images/About/crew.png'
import supplies from '../public/assets/images/About/supplies.png'
import { committeesData, acknowledgementsData } from '../Utils/creditsData'

// COMPONENT IMPORTS ==================================================================== // 
import { StyledHeader } from '../components/StyledHeader/StyledHeader'
import { CreditsList } from '../components/CreditsList/CreditsList'

// STYLES =============================================================================== // 
import styles from '../styles/About.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: About page
Collaborators: Logan Trundle, James Kang

Description: 
- Introduce the grad show and us graduates
- List our values
- Ackowledge student committees, the staff, volunteers, sponsors
*/

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About || Exhibition Space</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      {/* INTRODUCTION */}
      <section className={`${styles.about}`}>
        <div className={styles.section_heading}>

          <div className={`${styles.aboutTitle} color-green`}>
            <h2 className={`regular text-xl`}>THE MISSION</h2>
            <h1 className={`bold text-7xl`}>MAKING HISTORY</h1>
            <span className={`regular text-9xl`}>01</span>
          </div>

          <div className={styles.forward}>
            <p><strong>FOREWARD</strong></p>
            <p>Such a great show wow we have so much to talk about including this this and that, and that ofcourse. Come see our work and meet great design students from digital design, animation game design and graphic design. A lot more text will go here, I hope someone actually replaces this with relevant information because it’d be quite embarrassing to have this on our website</p>
          </div>
          <div className={styles.about_signature}><Image src={signature} lassName={styles.signature} alt="2022 Design Graduates Signature" /></div>
          
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={`${styles.whoweare}`}>
        {/* <div className={styles.elements}>
            <h2>WHAT MAKES US</h2>
            <h1>WHO WE ARE</h1>
            <span>02</span>
          </div> */}

        <div className={`${styles.aboutTitle} color-green`}>
            <h2 className={`regular text-xl`}>WHAT MAKES US</h2>
            <h1 className={`bold text-7xl`}>WHO WE ARE</h1>
            <span className={`regular text-9xl`}>02</span>
        </div>

          <div className={styles.whoweare_content}>

            <div className={styles.whoweare_text}>
              <div className={styles.whoweare_first}>
                <div className={styles.whoweare_heading}><div className={styles.whoweare_icon}><Image src={sparkle} alt="Sparkle" /></div><h1>First Value</h1></div>
                <p>Something relevant about our second value or whatever. Something sophisticated and smart sounding. Another sentence of sounding smart</p>
              </div>

              <div className={styles.whoweare_second}>
                <div className={styles.whoweare_heading}><div className={styles.whoweare_icon}><Image src={eye} alt="Eye" /></div><h1>First Value</h1></div>
                <p>Something relevant about our second value or whatever. Something sophisticated and smart sounding. Another sentence of sounding smart</p>
              </div>

              <div className={styles.whoweare_third}>
                <div className={styles.whoweare_heading}><div className={styles.whoweare_icon}><Image src={world} alt="World" /></div><h1>First Value</h1></div>
                <p>Something relevant about our second value or whatever. Something sophisticated and smart sounding. Another sentence of sounding smart</p>
              </div>
            </div>

            <div className={styles.whoweare_polaroids}>
              <div className={styles.space_photo}><Image src={space} alt="Space" /></div>
              <div className={styles.team_photo}><Image src={team} alt="Team" /></div>
            </div>
          </div>
      </section>


      {/* ON THE FRONTLINES */}
      <section className={styles.frontline}>
        <div className={`${styles.aboutTitle} color-green`}>
            <h2 className={`regular text-xl`}>THE CREW</h2>
            <h1 className={`bold text-7xl`}>ON THE FRONT<p/>LINES</h1>
            <span className={`regular text-9xl`}>03</span>
        </div>

        <div className={styles.crew_images}>
          <div className={styles.crew}><Image src={crew} alt="Crew" /></div>
          <div className={styles.supplies}><Image src={supplies} alt="Graduation show supplies" /></div>
        </div>

        <div className={styles.creditsContainer}>

              {acknowledgementsData.map(committee => (
                <CreditsList key={committee.id} title={committee.name} members={committee.members} />
              ))}

          </div>
      </section>


      {/* BEHIND THE SCENES*/}
      <section className={`${styles.thanksto} ${styles.credits}`}>
        <div className={styles.credits_subContainer}>
        
          <div className={`${styles.aboutTitle} color-green`}>
              <h2 className={`regular text-xl`}>THE CREW</h2>
              <h1 className={`bold text-7xl`}>BEHIND THE SCENES</h1>
              <span className={`regular text-9xl`}>04</span>
          </div>  
          
          <div className={styles.creditsContainer}>

              {acknowledgementsData.map(committee => (
                <CreditsList key={committee.id} title={committee.name} members={committee.members} />
              ))}
              
          </div>
        </div>
      </section>
    </div>
  )
}
