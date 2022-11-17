// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

// COMPONENT IMPORTS ==================================================================== // 
import animationShowreel from '../public/assets/images/Showreel1.png'
import AGD from '../public/assets/images/Home/AGD-CARD.png'
import DD from '../public/assets/images/Home/DIGEX-CARD.png'
import GD from '../public/assets/images/Home/GRAPHIC-DESIGN-CARD.png'
import { TextBtn } from '../components/Buttons/Button'
import { OutlineBtn } from '../components/Buttons/Button'
import { CountdownBanner } from '../components/CountdownBanner/CountdownBanner'

// STYLES =============================================================================== // 
import styles from '../styles/Home.module.css'

// OVERVIEW ============================================================================= // 

// SCRIPTS ============================================================================= // 


/* 
Name: Home page
Collaborators: Logan Trundle, 

Description: 
- Introduce the grad show (theme, what it is, graduates, etc)
- CTA to graduates page and about page
- Show showreels and tutor comments
- Show recent social media posts
*/


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Exhibition Space || 2022 Curtin Grad Show</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HERO */}
      <section className={`${styles.hero}`}>
        <div className={styles.space}>
          <div className={styles.glare} />
          <div className={styles.hero_text}>
            <p>ES22 | B-DES - AGD, DIGEX, GRFX<br/>
            MANAGING AGENT: CURTIN UNIVERSITY</p>
          </div>
          <div className={styles.title} />
          <div className={styles.title_blurred} />
          
            <div className={styles.markers}>
                  <div className={styles.marker1}><div className={styles.arrow1} /></div>
                  <div className={styles.marker2}><div className={styles.arrow1} /></div>
            </div>    
        </div>
      </section>

      <CountdownBanner />
  
      {/* APPROVED IMAGE */}
      <div className={styles.approved}>
        <div className={styles.approved_image}></div>
        <p>More mission details &nbsp;&nbsp;→</p>
      </div>

      {/* A GLIMPSE INTO OUR SPACE */}
      <section className={styles.into_our_space}>
        <div className={styles.section_heading}>
            <div className={styles.elements}>
              <h2>A GLIMPSE</h2>
              <h1>INTO OUR SPACE</h1>
          </div>
        </div>

        <div className={styles.card_holder}>
          <a href="">
            <Image src={AGD} alt="Animation and Game Design Card" />
          </a>
          <a href="">
            <Image src={DD} alt="Digital Design Card" />
          </a>
          <a href="">
            <Image src={GD} alt="Graphic Design Card" />
          </a>
        </div>
      </section>
      


      {/* SHOWREELS */}
      <section className={styles.showreels}>
        <div className={styles.showreels_subcontainer}>
          <div className={styles.showreels_sidebar}>
            <div className={styles.showreel_buttons}>
              <button className={styles.section2_button}>Button</button>
              <button className={styles.section2_button}>Button</button>
              <button className={styles.section2_button}>Button</button>
            </div>
          </div>

          <div className={styles.showreel_videos}>
            <Image src={animationShowreel} alt="Showreel for Animation Major" />
          </div>
        </div>
      </section>


      {/* SOCIALS */}
      <section className={styles.into_our_space}>
        <div className={styles.section_heading}>
            <div className={styles.elements}>
              <h2>GAZE THROUGH OUR INSTAGRAM</h2>
              <h1>@designatcurtin</h1>
          </div>
        </div>

        {/* INSTAGRAM POSTS ~ HARD CODED (CAN BE LIVE UPDATED ANYWAY) */}
        <div className={styles.social_images}>
          <div id="instafeed-container" className={styles.instaContain}></div>
        </div>
      </section>

      <div className={styles.creditsContainer}>
            <div className={`${styles.creditsSubContainer} ${styles.acknowledgements}`}></div>
      </div>

      <p className={styles.acknowledgement}>We would like to acknowledge the Whadjuk Noongar people whose land we are standing on and recognise the strength, resilience and capacity of the Noongar people where Curtin University is situated</p>

    </div>
  )
}
