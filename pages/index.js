// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

// COMPONENT IMPORTS ==================================================================== // 
import animationShowreel from '../public/assets/images/Showreel1.png'
import AGDbg from '../public/assets/images/Home/CardComponents/agdbg.png'
import AGDbadge from '../public/assets/images/Badges/agd_patch.png'
import GRFXbg from '../public/assets/images/Home/CardComponents/grfxbg.png'
import GRFXbadge from '../public/assets/images/Badges/grfx_patch.png'
import DIGEXbg from '../public/assets/images/Home/CardComponents/digexbg.png'
import DIGEXbadge from '../public/assets/images/Badges/digex_patch.png'
import Map from '../public/assets/images/Home/mapDiagram.svg'
import aboutDetails from '../public/assets/images/Home/aboutDetails.svg'
import { TextBtn } from '../components/Buttons/Button'
import { OutlineBtn } from '../components/Buttons/Button'
import { CountdownBanner } from '../components/CountdownBanner/CountdownBanner'
import { IGFeed } from '../components/IGFeed/IGFeed'

// STYLES =============================================================================== // 
import styles from '../styles/Home.module.css'
import react from 'react'

// OVERVIEW ============================================================================= // 

// SCRIPTS ============================================================================= // 


/* 
Name: Home page
Collaborators: Logan Trundle, James Andrew, Rachael Moriconi, James Kang, Salma Jarrar

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
                  <div className={styles.marker}><div className={`${styles.arrow} ${styles.arrow_left}`} /></div>
                  <div className={styles.marker}><div className={`${styles.arrow} ${styles.arrow_right}`} /></div>
            </div>    
        </div>
      </section>

      <CountdownBanner />
  
      {/* APPROVED IMAGE */}
      <div className={styles.approved}>
          <div className={styles.mapDiagram}>
            <Image src={Map} alt="Map Diagram" width={700} height={700}/>
          </div>
          <div className={styles.aboutInfo}>
            <Image src={aboutDetails} alt="About details"/>
            <a href={'/about'} >More mission details &nbsp;&nbsp;→ </a>
          </div>
      </div>


      {/* A GLIMPSE INTO OUR SPACE */}
      <section className={styles.into_our_space}>
        <div className={styles.section_heading}>
            <div className={styles.elements}>
              <h2 className={`regular text-xl`}>A GLIMPSE</h2>
              <h1 className={`black text-7xl`}>INTO OUR SPACE</h1>
          </div>
        </div>
      </section>

      <div className={styles.cards_holder}>

        {/* DIGEX CARD */}
        <div className={styles.card}>
          <div className={styles.cardbg_container}>
            <Image src={AGDbg} layout={'fill'} objectFit={'cover'} alt="Space" priority/>
          </div>
          <div className={styles.card_content}>
            <header className={styles.card_desktop}>
              <div className={styles.linetop}><hr/></div>
              <p className={`${styles.card_largetext} text-3xl`}>ANIMATION</p>
              <p className={`${styles.card_largetext} text-3xl`}>& GAME</p>
              <p className={`${styles.card_largetext} text-3xl`}>DESIGN</p>
            </header>
            <header className={styles.card_mobile}>
              <div className={styles.linetop}><hr/></div>
              <p className={`${styles.card_largetext}`}>ANIMATION & GAME DESIGN</p>
            </header>
            <div className={styles.card_details}>
              <p className={styles.card_subtitle}>agd_mission_2022</p>
              <p className={`${styles.major_text} ${styles.major_agd}`}>Our Agd [animation & game design] mission is to transport us to new dimensions with a curated collection of stellar animation work.</p>
              <a href="">[see more]</a>
            </div>
            <footer>
              <div className={styles.number}>
                <div className={styles.number_subtitle}>
                  <hr/><span>count</span>
                </div>
                <p className={`${styles.card_largetext} text-5xl`}>29</p>
              </div>
              <div className={styles.card_badge}><Image src={AGDbadge} alt="AGD Badge" /></div>  
            </footer>
          </div>
        </div>

        {/* DIGEX CARD */}
        <div className={styles.card}>
          <div className={styles.cardbg_container}>
            <Image src={DIGEXbg} layout={'fill'} objectFit={'cover'} alt="Space" priority/>
          </div>
          <div className={styles.card_content}>
            <header className={styles.card_desktop}>
              <div className={styles.linetop}><hr/></div>
              <p className={`${styles.card_largetext} text-3xl`}>DIGITAL</p>
              <p className={`${styles.card_largetext} text-3xl`}>DESIGN</p>
              <p></p>
            </header>
            <header className={styles.card_mobile}>
              <div className={styles.linetop}><hr/></div>
              <p className={`${styles.card_largetext}`}>DIGITAL DESIGN</p>
            </header>
            <div className={styles.card_details}>
              <p className={styles.card_subtitle}>digex_mission_2022</p>
              <p className={`${styles.major_text} ${styles.major_digex}`}>Our Digex [digital experience and interaction design] mission is to deploy user-centred gadgets that ensure a smooth journey for all.</p>
              <a href="">[see more]</a>
            </div>
            <footer>
              <div className={styles.number}>
                <div className={styles.number_subtitle}>
                  <hr/><span>count</span>
                </div>
                <p className={`${styles.card_largetext} text-5xl`}>14</p>
              </div>
              <div className={styles.card_badge}><Image  src={DIGEXbadge} alt="DIGEX Badge" /></div>  
            </footer>
          </div>
        </div>

        {/* GRFX CARD */}
        <div className={styles.card}>
          <div className={styles.cardbg_container}>
            <Image src={GRFXbg} layout={'fill'} objectFit={'cover'} alt="Space" priority/>
          </div>
          <div className={styles.card_content}>
            <header className={styles.card_desktop}>
              <div className={styles.linetop}><hr/></div>
              <p className={`${styles.card_largetext} text-3xl`}>GRAPHIC</p>
              <p className={`${styles.card_largetext} text-3xl`}>DESIGN</p>
              <p></p>
            </header>
            <header className={styles.card_mobile}>
              <div className={styles.linetop}><hr/></div>
              <p className={`${styles.card_largetext}`}>GRAPHIC DESIGN</p>
            </header>
            <div className={styles.card_details}>
              <p className={styles.card_subtitle}>grfx_mission_2022</p>
              <p className={`${styles.major_text} ${styles.major_grfx}`}>Our Grfx [graphic design] mission is to prepare design proposals that are out of this world.</p>
              <a href="">[see more]</a>
            </div>
            <footer>
              <div className={styles.number}>
                <div className={styles.number_subtitle}>
                  <hr/><span>count</span>
                </div>
                <p className={`${styles.card_largetext} text-5xl`}>43</p>
              </div>
              <div className={`${styles.card_badge} ${styles.grfx_badge}`}><Image src={GRFXbadge} alt="GRFX Badge" /></div>  
            </footer>
          </div>
        </div>

      </div>
      

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
      <section className={styles.socials}>
        <div className={styles.section_heading}>
            <div className={styles.elements}>
              <h2 className={`regular text-xl`}>GAZE THROUGH OUR INSTAGRAM</h2>
              <h1 className={`black text-7xl`}>@designatcurtin</h1>
          </div>
        </div>

        {/* INSTAGRAM POSTS ~ HARD CODED (CAN BE LIVE UPDATED ANYWAY) */}
        <div className={styles.social_images}>
          {/* <div id="instafeed-container" className={styles.instaContain}></div> */}
          {/* <Instagram/> */}
          <IGFeed />
        </div>
      </section>

      <div className={styles.creditsContainer}> 
          <p className={`text-reg body-copy`}>We would like to acknowledge the Whadjuk Noongar people whose land we are standing on and recognise the strength, resilience and capacity of the Noongar people where Curtin University is situated</p> 
      </div>



    </div>
  )
}
