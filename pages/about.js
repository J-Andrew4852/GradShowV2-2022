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
Collaborators: Logan Trundle, James Kang, Rachael Moriconi

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
            <p className={`text-small`}><strong>FOREWORD</strong></p>
            <p>Such a great show wow we have so much to talk about including this this and that, and that ofcourse. Come see our work and meet great design students from digital design, animation game design and graphic design. A lot more text will go here, I hope someone actually replaces this with relevant information because it’d be quite embarrassing to have this on our website</p>
          <div className={styles.about_signature}><Image src={signature} lassName={styles.signature} alt="2022 Design Graduates Signature" /></div>
          </div>
          
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={`${styles.whoweare}`}>

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
                <div className={styles.whoweare_heading}><div className={styles.whoweare_icon}><Image src={eye} alt="Eye" /></div><h1>Second Value</h1></div>
                <p>Something relevant about our second value or whatever. Something sophisticated and smart sounding. Another sentence of sounding smart</p>
              </div>

              <div className={styles.whoweare_third}>
                <div className={styles.whoweare_heading}><div className={styles.whoweare_icon}><Image src={world} alt="World" /></div><h1>Third Value</h1></div>
                <p>Something relevant about our second value or whatever. Something sophisticated and smart sounding. Another sentence of sounding smart</p>
              </div>
            </div>

            <div className={styles.whoweare_polaroids}>
              <div className={styles.space_photo}>
                <Image src={space} layout={'fill'} objectFit={'contain'} alt="An image of space with lots of stars and a green overlay" />
                </div>
              <div className={styles.team_photo}>
                <Image src={team} layout={'fill'} objectFit={'contain'} alt="A photo of the grad show team working together" />
                </div>
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
          <div className={styles.crew}>
            <Image src={crew} layout={'fill'} objectFit={'contain'} alt="A photo of all the student commitee leaders" />
          </div>
          <div className={styles.supplies}>
            <Image src={supplies} layout={'fill'} objectFit={'contain'} alt="A stylised checklist of supplies required for the checklist" />
          </div>
        </div>

        <div className={styles.creditsContainer}>

          {/* {acknowledgementsData.map(committee => (
            <CreditsList key={committee.id} title={committee.name} members={committee.members} />
          ))}
          {acknowledgementsData.map(committee => (
            <CreditsList key={committee.id} title={committee.name} members={committee.members} />
          ))} */}
          
          <div className={styles.column1}> {/* ---COLUMN1--- */}
            <ul className={styles.front_line_team}>
                <h1>Brand Identity</h1>
                <li>Anabel Cressie - Graphic Designer</li>
                <li>Lilybelle Tarr - Graphic Designer</li>
                <li>Thomas Earnshaw - Graphic Designer</li>
                <li>Erin Cunningham - Graphic Designer</li>
              </ul>

              <ul className={styles.front_line_team}>
                <h1>Website Leads</h1>
                <li>Logan Trundle - Digital Lead</li>
                <li>Anthony Robinson - Digital Co-Lead</li>
                <li>James Andrew - Frontend Lead</li>
                <li>Ashleigh Sayers - Backend Lead</li>
                <li>Salma Jarrar - Design Lead</li>
              </ul>

              <ul className={styles.front_line_team}>
                <h1>Showreel Leads</h1>
                <li>Macgregor Lawson - Video Lead</li>
                <li>Campbell McCracken - Video Co-lead</li>
                <li>Max Wright - 3D Lead</li>
                <li>Flynn Denby - 2D Lead</li>
              </ul>

              <ul className={styles.front_line_team}>
                <h1>Instagram</h1>
                <li>Thomas Earnshaw - Content Strategy</li>
                <li>Rein Aspinall - Content Strategy</li>
                <li>Lilybelle Tarr - Content Designer</li>
                <li>Anabel Cressie - Content Designer</li>
                <li>Erin Cunningham - Content Designer</li>
              </ul>

              <ul className={styles.front_line_team}>
                <h1>Photography</h1>
                <li>Rein Aspinall - Creative Director</li>
                <li>Johnson Nguyen - Photographer</li>
                <li>Thomas Earnshaw - Photographer</li>
              </ul>
            </div>
          
          <div className={styles.column2}> {/* ---COLUMN2--- */}
            <ul className={styles.front_line_team}>
                <h1>Website Development</h1>
                <li>James Andrew - Frontend Developer</li>
                <li>Logan Trundle - Frontend Developer</li>
                <li>Rachael Moriconi - Frontend Developer</li>
                <li>James Kang - Frontend Developer</li>
                <li>Jade Mitchell - Frontend Developer</li>
                <li>Ben Crook - Frontend Developer</li>
                <li>Anthony Robinson - Backend Developer</li>
                <li>Ashleigh Sayers - Backend Developer</li>
                <li>Jayden Dry - Backend Developer</li>
              </ul>

              <ul className={styles.front_line_team}>
                <h1>Website Design</h1>
                <li>Salma Jarrar - UX/UI Designer</li>
                <li>Logan Trundle - UX/UI Designer</li>
                <li>Cheyenne Toh - UX/UI Designer</li>
                <li>Alishba Tausif - UX/UI Designer</li>
                <li>Kate MacKenzie - UX/UI Designer</li>
                <li>Nadifa Aziza - UX/UI Designer</li>
                <li>Melina Lim - UX/UI Designer</li>
                <li>Valentina Cendales - UX/UI Designer</li>
                <li>Darcy Walters - UX/UI Designer</li>
              </ul>

              <ul className={styles.front_line_team}>
                <h1>Showreel 2D Development</h1>
                <li>Flynn Denby - 2D Concept Artist</li>
                <li>Lewis Fuller Hill - 2D Concept Artist</li>
                <li>Rein Aspinall - 2D Concept Artist</li>
                <li>Mhairi Harris - 2D Concept Artist</li>
                <li>Teo Zhui - 2D Concept Artist</li>
                <li>Amber Howe - 2D Concept Artist</li>
                <li>Simone Woolfitt - 2D Concept Artist</li>
                <li>Johnson Nguyen - 2D Concept Artist</li>
                <li>Lai H.C. - 2D Concept Artist</li>
              </ul>
            </div>

            <div className={styles.column3}> {/* ---COLUMN3--- */}
              <ul className={styles.front_line_team}>
                <h1>Showreel 3D Development</h1>
                <li>Macgregor Lawson - 3D Modeller and Sound Designer</li>
                <li>Campbell McCracken - 3D Modeller and Rigger</li>
                <li>Max Wright - 3D Modeller</li>
                <li>Xavier Goh - 3D Modeller</li>
                <li>Rizky Hefriadi - 3D Modeller</li>
                <li>Taylor Ingvarson - 3D Modeller</li>
                <li>Jeremy Ho - 3D Modeller</li>
                <li>James Powell - 3D Modeller</li>
                <li>Zoey Tan - 3D Modeller</li>
                <li>Ori Elek - 3D Modeller</li>
                <li>James Green - 3D Modeller</li>
                <li>Scarlett Coley - 3D Modeller</li>
                <li>Rebecca Gibson - 3D Modeller</li>
                <li>Angelo B.N. Gregorio - 3D Modeller</li>
                <li>Todd Huckle - 3D Modeller</li>
                <li>Steven White-Smith - 3D Modeller and Texture Artist</li>
                <li>Melanie Tan - Texture Artist</li>
                <li>Hayley Zeller - Texture Artist and Rigger</li>
              </ul>

              <ul className={styles.front_line_team}>
                <h1>Showreel Compositing</h1>
                <li>Max Wright - 3D Animator</li>
                <li>Campbell McCracken - 3D Animator</li>
                <li>Steven White-Smith - 3D Animator and Unreal Engine Compositor</li>
                <li>Macgregor Lawson - Video Compositor</li>
                <li>Taylor Ingvarson - Motion Graphics</li>
                <li>Rebecca Gibson - Editor</li>
                <li>Angelo B.N. Gregorio - Editor</li>
                <li>Scarlett Coley - Editor</li>
              </ul>
            </div>
        </div>

      </section>


      {/* BEHIND THE SCENES*/}
      <section className={`${styles.thanksto} ${styles.credits}`}>
        <div className={styles.credits_subContainer}>
        
          <div className={`${styles.aboutTitle} color-green`}>
            <h2 className={`regular text-xl`}>THE CREW</h2>
            <h1 className={`bold text-7xl`}>BEHIND THE SCREENS</h1>
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
