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
          <div className={styles.elements}>
            <h2>THE MISSION</h2>
            <h1>MAKING HISTORY</h1>
            <span>01</span>
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
        <div className={styles.elements}>
            <h2>WHAT MAKES US</h2>
            <h1>WHO WE ARE</h1>
            <span>02</span>
          </div>

          <div className={styles.whoweare_content}>

            <div className={styles.whoweare_text}>
              <div className={styles.whoweare_first}>
                <div className={styles.whoweare_heading}><Image src={sparkle} lassName={styles.signature} alt="Sparkle" /><h1>First Value</h1></div>
                <p>Something relevant about our second value or whatever. Something sophisticated and smart sounding. Another sentence of sounding smart</p>
              </div>

              <div className={styles.whoweare_second}>
                <div className={styles.whoweare_heading}><Image src={eye} lassName={styles.signature} alt="Eye" /><h1>First Value</h1></div>
                <p>Something relevant about our second value or whatever. Something sophisticated and smart sounding. Another sentence of sounding smart</p>
              </div>

              <div className={styles.whoweare_third}>
                <div className={styles.whoweare_heading}><Image src={world} lassName={styles.signature} alt="World" /><h1>First Value</h1></div>
                <p>Something relevant about our second value or whatever. Something sophisticated and smart sounding. Another sentence of sounding smart</p>
              </div>
            </div>

            <div className={styles.whoweare_polaroids}>
              <Image src={space} lassName={styles.signature} alt="Space" />
              <Image src={team} lassName={styles.signature} alt="Team" />
            </div>

            
          </div>

      </section>


      {/* THE TEAM BEHIND IT ALL */}
      <section className={`${styles.behinditall} ${styles.credits}`}>

        <figure className={`${styles.chromeball} ${styles.chromeball_one}`}></figure>
        <figure className={`${styles.chromeball} ${styles.chromeball_two}`}></figure>
        <figure className={`${styles.chromeball} ${styles.chromeball_three}`}></figure>
        <div className={styles.behinditall_subContainer}>

          <StyledHeader lineOneText="The team" lineTwoText="behind it all" sectionNumber='03' />

          <div className={styles.creditsContainer}>
            <div className={styles.creditsSubContainer}>

              {committeesData.map(committee => (
                <CreditsList key={committee.id} title={committee.name} members={committee.members} />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SPECIAL THANKS TO*/}
      <section className={`${styles.thanksto} ${styles.credits}`}>
        <div className={styles.credits_subContainer}>

          <StyledHeader lineOneText="Special thanks to" lineTwoText="everyone involved" sectionNumber='03' />

          <div className={styles.creditsContainer}>
            <div className={`${styles.creditsSubContainer} ${styles.acknowledgements}`}>

              {acknowledgementsData.map(committee => (
                <CreditsList key={committee.id} title={committee.name} members={committee.members} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
