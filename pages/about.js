// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import introImage from '../public/assets/images/About/intro-image.jpg'
import signature from '../public/assets/images/About/signature.svg'
import sparkle from '../public/assets/images/About/sparkle.png'
import eye from '../public/assets/images/About/eye.png'
import world from '../public/assets/images/About/world.png'
import space from '../public/assets/images/About/space.png'
import team from '../public/assets/images/About/team.png'
import crew from '../public/assets/images/About/crew.png'
import supplies from '../public/assets/images/About/supplies.png'
import creditgraphic from '../public/assets/images/About/credits_graphic.jpg'
import creditimage from '../public/assets/images/About/credits_image.png'
import { committeesData, acknowledgementsData } from '../Utils/creditsData'

// COMPONENT IMPORTS ==================================================================== // 
import { StyledHeader } from '../components/StyledHeader/StyledHeader'
import { CreditsList } from '../components/CreditsList/CreditsList'

// STYLES =============================================================================== // 
import styles from '../styles/About.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: About page
Collaborators: Logan Trundle, James Kang, Rachael Moriconi, James Andrew, Salma Jarrar

Description: 
- Introduce the grad show and us graduates
- List our values
- Ackowledge student committees, the staff, volunteers, sponsors
*/

export default function About() {
  return (
    <div className={styles.container} id='GradShow'>
      <Head>
        <title>About || Exhibition Space</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      {/* INTRODUCTION */}
      <section className={`${styles.about}`}>
        <div className={styles.section_heading}>

          <div className={`${styles.aboutTitle} color-green`}>
            <h2 className={`regular text-xl`}>THE MISSION</h2>
            <h1 className={`black text-7xl`}>MAKING HISTORY</h1>
            <span className={`regular text-9xl`}>01</span>
          </div>

          <div className={styles.forward}>
            <p className={`text-small`}><strong>FOREWORD</strong></p>
            <p>We are over the moon to present to you <em>Exhibition Space</em> – a semester-long mission that our team of space cadets have been tirelessly working on. Meet us at Curtin Design Headquarters: Building 202, Curtin University on <strong>25.11.2022</strong> to witness an extraordinary display of work from our Animation and Game Design, Digital Design, and Graphic Design teams. Join us on our launch day to celebrate the ground-breaking expedition. </p>
          <div className={styles.about_signature}><Image src={signature} className={styles.signature} alt="2022 Design Graduates Signature" /></div>
          </div>
          
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={`${styles.whoweare}`}>

        <div className={`${styles.aboutTitle} color-green`}>
            <h2 className={`regular text-xl`}>WHAT MAKES US</h2>
            <h1 className={`black text-7xl`}>WHO WE ARE</h1>
            <span className={`regular text-9xl`}>02</span>
        </div>

          <div className={styles.whoweare_content}>

            <div className={styles.whoweare_text}>
              <div className={styles.whoweare_first}>
                <div className={styles.whoweare_heading}><div className={styles.whoweare_icon}><Image src={sparkle} alt="Sparkle" /></div><h4>Authenticity</h4></div>
                <p>We value authenticity and being able to express ourselves in a way that is true to us. We appreciate everybody for who they are and what they do.</p>
              </div>

              <div className={styles.whoweare_second}>
                <div className={styles.whoweare_heading}><div className={styles.whoweare_icon}><Image src={eye} alt="Eye" /></div><h4>Dedication</h4></div>
                <p>Our achievements are only made possible through our dedication and commitment to produce exceptional work. We value the drive to learn and adapt. </p>
              </div>

              <div className={styles.whoweare_third}>
                <div className={styles.whoweare_heading}><div className={styles.whoweare_icon}><Image src={world} alt="World" /></div><h4>Having Fun</h4></div>
                <p>The foundation behind everything we do is having a love of design, and we believe working in a fun environment creates the oppurtunity to thrive in design.</p>
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
            <h1 className={`black text-7xl`}>ON THE FRONT<p/>LINES</h1>
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
          
          {/* ---COLUMN1--- */}
          <div>
            <ul>
                <h4>Brand Identity</h4>
                <li>Anabel Cressie</li>
                <li>Lilybelle Tarr</li>
                <li>Thomas Earnshaw</li>
                <li>Erin Cunningham</li>
              </ul>

              <ul>
                <h4>Website Leads</h4>
                <li>Logan Trundle</li>
                <li>Anthony Robinson</li>
                <li>James Andrew</li>
                <li>Ashleigh Sayers</li>
                <li>Salma Jarrar</li>
              </ul>

              <ul>
                <h4>Showreel Leads</h4>
                <li>Macgregor Lawson</li>
                <li>Campbell McCracken</li>
                <li>Max Wright</li>
                <li>Flynn Denby</li>
              </ul>

              <ul>
                <h4>Social Media</h4>
                <p>Content Strategists</p>
                <li>Thomas Earnshaw</li>
                <li>Rein Aspinall</li>

                <p>Content Designers</p>
                <li>Lilybelle Tarr</li>
                <li>Anabel Cressie</li>
                <li>Erin Cunningham</li>
              </ul>

              <ul>
                <h4>Photography</h4>
                <p>Creative Director</p>
                <li>Rein Aspinall</li>

                <p>Photographers</p>
                <li>Johnson Nguyen</li>
                <li>Thomas Earnshaw</li>
              </ul>
          </div>
          
           {/* ---COLUMN2--- */}
          <div>
          <ul>
                <h4>Website Design</h4>
                <li>Salma Jarrar</li>
                <li>Logan Trundle</li>
                <li>Cheyenne Toh</li>
                <li>Kate MacKenzie</li>
                <li>Alishba Tausif</li>
                <li>Nadifa Aziza</li>
                <li>Melina Lim</li>
                <li>Valentina Cendales</li>
                <li>Darcy Walters</li>
              </ul>

            <ul>
                <h4>Website Development</h4>
                <p>Frontend Developers</p>
                <li>James Andrew</li>
                <li>Logan Trundle</li>
                <li>Rachael Moriconi</li>
                <li>James Kang</li>
                <li>Salma Jarrar</li>
                <li>Jade Mitchell</li>
                
                
                <p>Backend Developers</p>
                <li>Anthony Robinson</li>
                <li>Ashleigh Sayers</li>
                <li>Jayden Dry</li>
              </ul>
            
              <ul>
                <h4>Showreel Compositing</h4>

                <p>3D Animators</p>
                <li>Campbell McCracken</li>
                <li>Max Wright</li>
                <li>Steven White-Smith</li>

                <p>Unreal Engine Compositors</p>
                <li>Steven White-Smith</li>

                <p>Video Compositors</p>
                <li>Macgregor Lawson</li>

                <p>Motion Graphics</p>
                <li>Taylor Ingvarson</li>
                <li>Max Wright</li>

                <p>Editors</p>
                <li>Rebecca Gibson</li>
                <li>Angelo B.N. Gregorio</li>
                <li>Scarlett Coley</li>
              </ul>
            </div>
            

             {/* ---COLUMN3--- */}
            <div className={styles.credits_flex}>
            <ul>
                <h4>Showreel 2D Development</h4>
                <li>Flynn Denby</li>
                <li>Lewis Fuller Hill</li>
                <li>Rein Aspinall</li>
                <li>Mhairi Harris</li>
                <li>Teo Zhui</li>
                <li>Amber Howe</li>
                <li>Simone Woolfitt</li>
                <li>Johnson Nguyen</li>
                <li>Lai H.C.</li>
              </ul>
            
              <ul>
                <h4>Showreel 3D Development</h4>

                <p>3D Modellers</p>
                <li>Macgregor Lawson</li>
                <li>Campbell McCracken</li>
                <li>Max Wright</li>
                <li>James Green</li>
                <li>Jeremy Ho</li>
                <li>James Powell</li>
                <li>Angelo B.N. Gregorio</li>
                <li>Scarlett Coley</li>
                <li>Xavier Goh</li>
                <li>Rizky Hefriadi</li>
                <li>Taylor Ingvarson</li>
                <li>Zoey Tan</li>
                <li>Ori Elek</li>
                <li>Rebecca Gibson</li>
                <li>Todd Huckle</li>
                <li>Steven White-Smith</li>

                <p>Riggers</p>
                <li>Hayley Zeller</li>
                <li>Campbell McCracken</li>

                <p>Texture Artists</p>
                <li>Steven White-Smith</li>
                <li>Melanie Tan</li>
                <li>Hayley Zeller</li>
                <li>Todd Huckle</li>

                <p>Sound Designers</p>
                <li>Macgregor Lawson</li>
              </ul>
            </div>
        </div>

      </section>


      {/* BEHIND THE SCENES*/}
      <section className={`${styles.thanksto} ${styles.credits}`}>
        <div className={styles.credits_subContainer}>
        
          <div className={`${styles.aboutTitle} color-green`}>
            <h2 className={`regular text-xl`}>THE CREW</h2>
            <h1 className={`black text-7xl`}>BEHIND THE SCREENS</h1>
            <span className={`regular text-9xl`}>04</span>
          </div>  
          
	        <div className={styles.creditsContainer}>

            <div>
              <ul>
                <h4>Major Coordinators</h4>
                <li>Harriet Perryer - DigEx</li>
                <li>Jonathan Pillai - AGD</li>
                <li>Dan Mckeating - GRFX</li>
                <li>Lee Ingram - GRFX</li>
              </ul>

              <ul>
                <h4>Technicians</h4>
                <li>Ian Williams</li>
                <li>Adrian Reeve</li>
              </ul>

              <ul>
                <h4>Mentors</h4>
                <li>Francis Villarba</li>
              </ul>
              
            </div>

            <div>
              <ul>
                <h4>Volunteers</h4>
                <li>Coda Owens</li>
                <li>John Simpson</li>
                <li>Lauren Gatto</li>
                <li>Diala Majrouh</li>
                <li>Benjamin Sixsmith</li>
                <li>Annie O&apos;Halloran</li>
                <li>Miguel Calimpon</li>
                <li>Tamara Barron</li>
                <li>Heidi Kay Sze Choo</li>
                <li>Tannisa Hermansyah</li>
                <li>Isa T. Limpanyalers</li>
              </ul>
            </div>

            <div></div>

            {/* Behind the screens image */}
            
            <div className={styles.credit_positioning}>
              <div className={styles.credit_image}>
                <Image src={creditimage} layout={'fill'} objectFit={'contain'} alt="Graphic of an old computer with exhibition space written on the screen" />
              </div>
            </div>
              
          </div>
        </div>
      </section>
    </div>
  )
}
