// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { version } from 'react'

// COMPONENT IMPORTS ==================================================================== // 
import animationShowreel from '../public/assets/images/Showreel1.png'
import agdBadge from '../public/assets/images/Badges/agd_badge.png'
import digexBadge from '../public/assets/images/Badges/digex_badge.png'
import grfxBadge from '../public/assets/images/Badges/grfx_badge.png'
import { TextBtn } from '../components/Buttons/Button'
import { OutlineBtn } from '../components/Buttons/Button'
import { CountdownBanner } from '../components/CountdownBanner/CountdownBanner'
import { IGFeed } from '../components/IGFeed/IGFeed'

// STYLES =============================================================================== // 
import styles from '../styles/Home.module.css'

// OVERVIEW ============================================================================= // 

// SCRIPTS ============================================================================= // 


/* 
Name: Home page
Collaborators: Logan Trundle, James Andrew

Description: 
- Introduce the grad show (theme, what it is, graduates, etc)
- CTA to graduates page and about page
- Show showreels and tutor comments
- Show recent social media posts
*/

export default function Home() {
  console.log(version)
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
          {/* <div id="instafeed-container" className={styles.instaContain}></div> */}
          {/* <Instagram/> */}
          <IGFeed />
        </div>
      </section>
    </div>

  )
}
