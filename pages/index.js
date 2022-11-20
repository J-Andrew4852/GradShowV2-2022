// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

// COMPONENT IMPORTS ==================================================================== // 
import animationShowreel from '../public/assets/images/Showreel1.png'
import AGD from '../public/assets/images/Home/AGD-CARD.png'
import DD from '../public/assets/images/Home/DIGEX-CARD.png'
import GD from '../public/assets/images/Home/GRAPHIC-DESIGN-CARD.png'
import AGDbg from '../public/assets/images/Home/CardComponents/AGDbg.png'
import AGDbadge from '../public/assets/images/Home/CardComponents/AGDbadge.png'
import GRFXbg from '../public/assets/images/Home/CardComponents/grfxbg.png'
import GRFXbadge from '../public/assets/images/Home/CardComponents/grfx.png'
import DIGEXbg from '../public/assets/images/Home/CardComponents/digexbg.png'
import DIGEXbadge from '../public/assets/images/Home/CardComponents/digex.png'
import Map from '../public/assets/images/Home/mapDiagram.svg'
import aboutDetails from '../public/assets/images/Home/aboutDetails.svg'
import { TextBtn } from '../components/Buttons/Button'
import { OutlineBtn } from '../components/Buttons/Button'
import { CountdownBanner } from '../components/CountdownBanner/CountdownBanner'
import { IGFeed } from '../components/IGFeed/IGFeed'

// STYLES =============================================================================== // 
import styles from '../styles/Home.module.css'
import react from 'react'
import VideoCarousel from '../components/VideoCarousel/VideoCarousel'

// OVERVIEW ============================================================================= // 

// SCRIPTS ============================================================================= // 


/* 
Name: Home page
Collaborators: Logan Trundle, James Andrew, James Kang, Salma Jarrar

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

        <div className={styles.card}>
        <Image src={AGDbg} alt="Space" priority/>

          <div className={styles.card_content}>
            <div className={styles.linetop}><hr/></div>
            <h1>ANIMATION</h1>
            <h1>& GAME</h1>
            <h2 className={styles.morepadding}>DESIGN</h2>

            <h3>agd_mission_2022</h3>
            <p className={styles.agd_text}>Our Agd [animation & game design] mission is to transport us to new dimensions with a curated collection of stellar animation work.</p>
            <a href="">[see more]</a>
          </div>

          <div className={styles.card_footer}>

          <div className={styles.number}>
            <div className={styles.count}>
              <hr/><span>count</span>
            </div>
            <h1>29</h1>
          </div>
        <div className={styles.card_badge}><Image  src={AGDbadge} alt="AGD Badge" /></div>   
      </div>

        </div>

        <div className={styles.card}>
        <Image src={DIGEXbg} alt="Space" priority/>

          <div className={styles.card_content}>
            <div className={styles.linetop}><hr/></div>
            <h2 className={styles.morepadding}>DIGITAL</h2>
            <h1>DESIGN</h1>
            <h2 className={styles.morepadding}></h2>
            <h2 className={styles.morepadding}></h2>
            <h3>digex_mission_2022</h3>
            <p className={styles.digex_text}>Our Digex [digital experience and interaction design] mission is to deploy user-centred gadgets that ensure a smooth journey for all.</p>
            <a href="">[see more]</a>
          </div>
          <div className={styles.card_footer}>
          <div className={styles.number}>
            <div className={styles.count}>
              <hr/><span>count</span>
            </div>
            <h1>14</h1>
          </div>
          <div className={styles.card_badge}><Image  src={DIGEXbadge} alt="AGD Badge" /></div>  
        </div>

        </div>

        <div className={styles.card}>
        <Image src={GRFXbg} alt="Space" priority />

          <div className={styles.card_content}>
            <div className={styles.linetop}><hr/></div>
            <h2 className={styles.morepadding}>GRAPHIC</h2>
            <h1>DESIGN</h1>
            <h2 className={styles.morepadding}></h2>
            <h2 className={styles.morepadding}></h2>
            <h3>grfx_mission_2022</h3>
            <p className={styles.grfx_text}>Our Grfx [graphic design] mission is to prepare design proposals that are out of this world.</p>
            <a href="">[see more]</a>
          </div>
          
          <div className={styles.card_footer}>

          <div className={styles.number}>
            <div className={styles.count}>
              <hr/><span>count</span>
            </div>
            <h1>43</h1>
          </div>

          <div className={styles.card_badge}><Image  src={GRFXbadge} alt="GRFX Badge" /></div>
          
        </div>

        </div>

        
      </div>
      


      {/* SHOWREELS */}
      <section className={styles.showreels}>
        <div className={styles.showreels_subcontainer}>
          <div className={styles.showreels_sidebar}>
            <div className={styles.showreel_buttons}>
            <OutlineBtn major= "grfx" text="GRFX"/>
            <OutlineBtn major= "agd" text="AGD"/>
            <OutlineBtn major= "digex" text="DIGEX"/>
            </div>
          </div>

          <div className={styles.showreel_videos}>
            <Image src={animationShowreel} alt="Showreel for Animation Major" />
          </div>
          <VideoCarousel/>
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
