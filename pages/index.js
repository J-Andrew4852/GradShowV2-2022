// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import Script from 'next/script'
import Link from 'next/link'

// COMPONENT IMPORTS ==================================================================== // 
import Iframe from 'react-iframe'
import AGDbg from '../public/assets/images/Home/CardComponents/agdbg.jpg'
import AGDbadge from '../public/assets/images/Badges/agd_patch.png'
import GRFXbg from '../public/assets/images/Home/CardComponents/grfxbg.jpg'
import GRFXbadge from '../public/assets/images/Badges/grfx_patch.png'
import DIGEXbg from '../public/assets/images/Home/CardComponents/digexbg.jpg'
import DIGEXbadge from '../public/assets/images/Badges/digex_patch.png'
import Map from '../public/assets/images/Home/mapDiagram.svg'
import aboutDetails from '../public/assets/images/Home/aboutDetails.svg'
import { TextBtn } from '../components/Buttons/Button'
import { OutlineBtn } from '../components/Buttons/Button'
import { CountdownBanner } from '../components/CountdownBanner/CountdownBanner'
import { CustomForm, Mailchimp } from '../components/Mailchimp/Mailchimp'
import { GraduateCard } from '../components/GraduateCard/GraduateCard'
import { AwardCard } from '../components/AwardCard/AwardCard'



// STYLES =============================================================================== // 
import styles from '../styles/Home.module.css'
import { setLazyProp } from 'next/dist/server/api-utils'

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

export default function Home({ graduates }) {

  const digexAwards = []
  const salmaJarrar = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65d9'
  )
  salmaJarrar[0].awardPic = '/assets/images/Home/AwardCompanies/humaan.svg';
  salmaJarrar[0].awardTitle = 'DIGEX 2022 Industry Award';
  // console.log(salmaJarrar[0])
  digexAwards.push(salmaJarrar[0])
  const kateMackenzie = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65bd'
  )
  kateMackenzie[0].awardPic = '/assets/images/Home/AwardCompanies/juicebox.svg';
  kateMackenzie[0].awardTitle = 'DIGEX 2022 Industry Award';
  digexAwards.push(kateMackenzie[0])
  const rachaelMoriconi = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65d4'
  )
  rachaelMoriconi[0].awardPic = '/assets/images/Home/AwardCompanies/equilibrium.svg';
  rachaelMoriconi[0].awardTitle = 'DIGEX 2022 Industry Award';
  digexAwards.push(rachaelMoriconi[0])
  const anthonyRobinson = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a659e'
  )
  anthonyRobinson[0].awardPic = '/assets/images/Home/AwardCompanies/wordofmouth.svg';
  anthonyRobinson[0].awardTitle = 'DIGEX + GRFX 2022 Industry Award';
  digexAwards.push(anthonyRobinson[0])
  // console.log(digexAwards)

  const agdAwards = []
  const stevenWS = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65dd'
  )
  stevenWS[0].awardTitle = 'AGD 2022 Industry Award';
  stevenWS[0].awardPic = '/assets/images/Home/AwardCompanies/lastpixel.svg';
  // console.log(stevenWS[0])
  agdAwards.push(stevenWS[0])
  const stevenWSb = JSON.parse('{"_id":"63735c19e58dd3cc6e5a65dd", "altImage":"https://2022gradshow.s3.ap-southeast-1.amazonaws.com/Grad+Show+Website+Student+Information+Form+(File+responses)/Edited_Headshots_2022/steven_white-smith-AGD-alt.jpg", "awardPic":"/assets/images/Home/AwardCompanies/LAI.png", "awardTitle":"AGD 2022 Industry Award", "headshotURL":"https://2022gradshow.s3.ap-southeast-1.amazonaws.com/Grad+Show+Website+Student+Information+Form+(File+responses)/Edited_Headshots_2022/steven_white-smith-AGD.jpg", "lastName":"White-Smith", "preferredName":"Steven", "major":["Animation and Game Design", "Digital Experience and Interaction Design"]}');
  // console.log(stevenWSb)
  // const stevenWSb = stevenWS[0]
  // stevenWSb._id.replace('63735c19e58dd3cc6e5a65dd', '63735c19e58dd3cc6e5a65ddb')
  // stevenWSb.awardTitle = 'AGD 2022 Industry Award';
  // stevenWSb.awardPic = '/assets/images/Home/AwardCompanies/LAI.png';
  // console.log(stevenWSb)
  agdAwards.push(stevenWSb)
  const maximilianWright = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65c7'
  )
  maximilianWright[0].awardTitle = 'AGD 2022 Industry Award';
  maximilianWright[0].awardPic = '/assets/images/Home/AwardCompanies/lastpixel.svg';
  agdAwards.push(maximilianWright[0])
  const simoneWoolfitt = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65dc'
  )
  simoneWoolfitt[0].awardTitle = 'AGD 2022 Industry Award';
  simoneWoolfitt[0].awardPic = '/assets/images/Home/AwardCompanies/studioorange.svg';
  agdAwards.push(simoneWoolfitt[0])
  const hayleyZeller = graduates.filter((graduate) => 
    graduate._id === '637afda53cbf4b57860193cd'
  )
  hayleyZeller[0].awardTitle = 'AGD 2022 Industry Award';
  hayleyZeller[0].awardPic = '/assets/images/Home/AwardCompanies/viewport.svg';
  agdAwards.push(hayleyZeller[0])
  const melanieTan = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65c8'
  )
  melanieTan[0].awardTitle = 'AGD 2022 Industry Award';
  melanieTan[0].awardPic = '/assets/images/Home/AwardCompanies/voyant.svg';
  agdAwards.push(melanieTan[0])
  // console.log(agdAwards)


  const grfxAwards = []
  const tajeSingh = graduates.filter((graduate) => 
    graduate._id === '637cf224acdc39e2be4e83e5'
  )
  tajeSingh[0].awardTitle = 'GRFX 2022 Industry Award';
  tajeSingh[0].awardPic = '/assets/images/Home/AwardCompanies/brandagency.svg';
  grfxAwards.push(tajeSingh[0])
  const tajeSinghb = JSON.parse('{"_id":"637cf224acdc39e2be4e83e5", "altImage":"https://2022gradshow.s3.ap-southeast-1.amazonaws.com/Grad+Show+Website+Student+Information+Form+(File+responses)/Edited_Headshots_2022/taje_singh-GRFX-alt.jpg", "awardPic":"/assets/images/Home/AwardCompanies/gesture.svg", "awardTitle":"GRFX 2022 Industry Award", "headshotURL":"https://2022gradshow.s3.ap-southeast-1.amazonaws.com/Grad+Show+Website+Student+Information+Form+(File+responses)/Edited_Headshots_2022/taje_singh-GRFX.jpg", "lastName":"Singh", "preferredName":"Taje", "major":["Graphic Design"]}');
  // console.log(tajeSinghb)
  grfxAwards.push(tajeSinghb)
  const tobyOKeeffe = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65e2'
  )
  tobyOKeeffe[0].awardTitle = 'GRFX 2022 Industry Award';
  tobyOKeeffe[0].awardPic = '/assets/images/Home/AwardCompanies/brandagency.svg';
  grfxAwards.push(tobyOKeeffe[0])
  const laurenWaddy = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65bf'
  )
  laurenWaddy[0].awardTitle = 'GRFX 2022 Industry Award';
  laurenWaddy[0].awardPic = '/assets/images/Home/AwardCompanies/block.png';
  grfxAwards.push(laurenWaddy[0])
  const christinePham = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65a5'
  )
  christinePham[0].awardTitle = 'GRFX 2022 Industry Award';
  christinePham[0].awardPic = '/assets/images/Home/AwardCompanies/agda.svg';
  grfxAwards.push(christinePham[0])
  const tessaStirling = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65e0'
  )
  tessaStirling[0].awardTitle = 'GRFX 2022 Industry Award';
  tessaStirling[0].awardPic = '/assets/images/Home/AwardCompanies/forthepeople.png';
  grfxAwards.push(tessaStirling[0])
  const cooperFare = graduates.filter((graduate) => 
    graduate._id === '63735c19e58dd3cc6e5a65a6'
  )
  cooperFare[0].awardTitle = 'GRFX 2022 Industry Award';
  cooperFare[0].awardPic = '/assets/images/Home/AwardCompanies/gesture.svg';
  grfxAwards.push(cooperFare[0])
  const nikkiSingh = graduates.filter((graduate) => 
    graduate._id === '637cf2edacdc39e2be4e83e7'
  )
  nikkiSingh[0].awardTitle = 'GRFX 2022 Helen Lansdowne Resor Scholarship';
  nikkiSingh[0].awardPic = '/assets/images/Home/AwardCompanies/wunderman.png';
  grfxAwards.push(nikkiSingh[0])
  // console.log(grfxAwards)

  const GRFXreel = "https://www.youtube.com/embed/tRMMeEjmrtI?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1%7D}";
  const AGDreel = "https://www.youtube.com/embed/yZzD8VsiKy4?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1%7D}";
  const DIGEXreel = "https://www.youtube.com/embed/GndiiYdN240?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1%7D}";
  const [iframSrc, setIframeUrl] = useState(DIGEXreel);
  const [selectedMajor, setSelectedMajor] = useState('All Graduates');

  const watchGRFX = () => {
    setSelectedMajor('Graphic Design');
    setIframeUrl(`${GRFXreel}`);
  };
  const watchAGD = () => {
    setSelectedMajor('Animation and Game Design');
    setIframeUrl(`${AGDreel}`);
  };
  const watchDIGEX = () => {
    setSelectedMajor('Digital Experience and Interaction Design');
    setIframeUrl(`${DIGEXreel}`);
  };

  return (
    <div className={styles.container} id='GradShow'>
      <Head>
        <title>Exhibition Space || 2022 Curtin Grad Show</title>
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
                  <div className={styles.marker}></div>
                  <div className={styles.marker}></div>
            </div>    
        </div>
      </section>

      <Mailchimp />
      <div className={styles.section_heading}>
            <div className={styles.elements}>
              <h2 className={`regular text-xl`}>2022 GRADUATE</h2>
              <h1 className={`black text-7xl`}>AWARD WINNERS</h1>
          </div>
      </div>
      {/* APPROVED IMAGE */}
      <div className={styles.awardContainer}>
        <div className={`${styles.awardSection} ${styles.awardHead}`}>
          <div className={styles.sidebarOff}>
            <p className={`text-small ${styles.majorTitle}`}><strong>Digital Design</strong></p>
            <div className={styles.graduate_grid}>
              
              {digexAwards.map((graduate) => (
                  <div className={styles.gridItem} key={graduate._id}>
                    <AwardCard key={graduate._id} data={graduate} />
                  </div>
                ))}
            </div>
          </div>
            {/* <div className={styles.mapDiagram}>
              <Image src={Map} alt="Map Diagram" width={700} height={700}/>
            </div>
            <div className={styles.aboutInfo}>
              <Image src={aboutDetails} alt="About details"/>
              <a href={'/about'} >More mission details &nbsp;&nbsp;→ </a>
            </div> */}
        </div>
        <div className={styles.awardSection}>
          <div className={styles.sidebarOff}>
            <p className={`text-small ${styles.majorTitle}`}><strong>Animation and Game Design</strong></p>
            <div className={styles.graduate_grid}>
              
              {agdAwards.map((graduate) => (
                  <div className={styles.gridItem} key={graduate._id}>
                    <AwardCard key={graduate._id} data={graduate} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.awardSection}>
          <div className={styles.sidebarOff}>
            <p className={`text-small ${styles.majorTitle}`}><strong>Graphic Design</strong></p>
            <div className={styles.graduate_grid}>
              
              {grfxAwards.map((graduate) => (
                  <div className={styles.gridItem} key={graduate._id}>
                    <AwardCard key={graduate._id} data={graduate} />
                  </div>
                ))}
            </div>
          </div>
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
              <Link href="/graduates#filter">[see more]</Link>
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
              <Link href="/graduates#filter">[see more]</Link>
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
              <Link href="/graduates#filter">[see more]</Link>
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
                <OutlineBtn abmajor="GRFX" text="GRFX" onAction={watchGRFX}/>
                <OutlineBtn abmajor="AGD" text="AGD" onAction={watchAGD}/>
                <OutlineBtn abmajor="DIGEX" text="DIGEX" onAction={watchDIGEX}/>
            </div>
          </div>

          <div className={styles.showreel_videos}>
            <Iframe
            url={iframSrc} loop="1" frameBorder="0" allowFullScreen position="relative" playsInline
            width="100%" height="100%" />
          </div>
        </div>

      </section>
      


      {/* SOCIALS */}
      <section className={styles.socials}>
        <div className={styles.section_heading}>
            <div className={styles.elements}>
              <h2 className={`regular text-xl`}>GAZE THROUGH OUR INSTAGRAM</h2>
              <a  href='https://www.instagram.com/designatcurtin/' target="_blank" rel="noreferrer" className='link'>
                  <h1 className={`black text-7xl`}>@designatcurtin</h1>
              </a>
              
          </div>
        </div>
{/* 
        <div className={styles.social_images}>
          <IGFeed />
        </div> */}
      </section>

      <div className={styles.creditsContainer}> 
          <p className={`text-reg body-copy`}>We would like to acknowledge the Whadjuk Noongar people whose land we are standing on and recognise the strength, resilience and capacity of the Noongar people where Curtin University is situated</p> 
      </div>



    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://gradshow-backend-production.up.railway.app/students')
  const data = await res.json()
  const graduates = data

  return {
    props: {
      graduates,
    },
  }
}