// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

// COMPONENT IMPORTS ==================================================================== // 
import animationShowreel from '../public/assets/images/Showreel1.png'
import agdBadge from '../public/assets/images/Badges/agd_badge.png'
import digexBadge from '../public/assets/images/Badges/digex_badge.png'
import grfxBadge from '../public/assets/images/Badges/grfx_badge.png'
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
      <section className={`${styles.hero} center-align `}>
        <div className={styles.heading_group}>
          <h3 className={`regular ${styles.hero_subtitle}`}>2022 Curtin Design Showcase</h3>

          {/* TODO: replace with logo svg when it has been created */}
          <div className={`${styles.hero_title}`}>
            <h1 className='heading bold'>Exhibition <span className='italic regular'>Space</span></h1>
          </div>
        </div>

        <div className={styles.hero_info}>
          <div className={styles.countdown}></div>
          <p className='text-med'>25.09.2022 | 16:00 - 20:00</p>
          <p className='text-med body-copy'>Building 202, Curtin University</p>
        </div>
      </section>

      <CountdownBanner />
  
      {/* ABOUT */}
      <section className={styles.about}>
        <div className={`${styles.about_subcontainer} body-copy text-reg right-align `}>
          <p className={`${styles.section2_text} left-align`}>Brief Introduction about the gradshow goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper ligula ac odio tincidunt, sodales aliquet dui mollis. Duis sodales tempor nibh. Nullam ullamcorper mi in tortor venenatis ornare. </p>
          <button className={styles.section2_button}>Button</button>
        </div>
      </section>


      {/* SHOWREELS */}
      <section className={styles.showreels}>
        <h3 className='text-4xl heading center-align'>Showreels</h3>

        <div className={styles.showreels_subcontainer}>

          <div className={styles.showreel_videos}>
            <Image src={animationShowreel} alt="Showreel for Animation Major" />
          </div>

          <div className={styles.showreels_sidebar}>
            <div className={styles.showreel_buttons}>
              <button className={styles.section2_button}>Button</button>
              <button className={styles.section2_button}>Button</button>
              <button className={styles.section2_button}>Button</button>
            </div>

            <div className={styles.coordinator_text}>
              <div className={styles.coordinator}>
                <p className='text-large bold'>Jonathan Pillai</p>
                <p className='text-med caption'>Animation and Game <br />Design Coordinator</p>
              </div>
              <p className='text-reg'>Course Coordinator comment goes here. Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus ullamcorper ligula ac odio tincidunt, sodales aliquet dui mollis. Duis sodales tempor nibh. Nullam ullamcorper mi in tortor venenatis ornare.</p>
            </div>
          </div>
        </div>


        {/* GRADUATES */}
      </section>
      <section className={styles.graduates}>
        <h3 className='text-4xl heading center-align'>Graduates</h3>

        <div className={styles.graduates_subcontainer}>

          <div className={styles.major_circle}>
            <Image src={digexBadge} alt="Badge insgnia for the Digital Experience major" />
          </div>

          <div className={styles.major_circle}>
            <Image src={agdBadge} alt="Badge insgnia for the Animation Game Design major" />
          </div>
          <div className={styles.major_circle}>
            <Image src={grfxBadge} alt="Badge insgnia for the Graphic Design major" />
          </div>

        </div>

        {/* TODO: create button component and replace here */}
        <button className='center-align'>View All Graduates</button>
      </section>


      {/* SOCIALS */}
      <section className={styles.socials}>
      <h3 className='text-4xl heading center-align'>See more on our social media</h3>
      <h5 className='text-med2 regular center-align'>@curtindesign</h5>

        <div className={styles.social_images}>
          <div id="instafeed-container" className={styles.instaContain}></div>
        </div>
      </section>
    </div>

  )
}
