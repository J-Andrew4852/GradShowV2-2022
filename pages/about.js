// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Image from 'next/image'
import introImage from '../public/assets/images/About/intro-image.jpg'
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
        <StyledHeader lineOneText="An exhibition" lineTwoText="to remember" sectionNumber='01' />

        <div className={styles.about_group}>
          <div className={styles.about_introCopy}>
            <p className={`text-reg left-align body-copy`}>
              Such a great show wow we have so much to talk about including this this and that, and let’s not forget that. Come see our work and meet great design students from digital design, animation game design and graphic design.
            </p>
            <p>
              More text can go in here that we can break up.Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus ullamcorper ligula ac odio
            </p>
          </div>

          <div className={styles.about_img}>
            <Image src={introImage} alt="Logistics Meeting Team" layout='responsive' priority={true} placeholder='blur' width={450} height={300} />
            <div className={styles.imageFooter}>
              <p className='caption'>12-10-22 : Fun kind spacey(?) themed caption to go here </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US WHO WE ARE */}
      <section className={`${styles.whoweare}`}>
        <StyledHeader lineOneText="What makes us" lineTwoText="who we are" sectionNumber='02' />
      </section>

      <div className={styles.values}>
        <div className={styles.value_group}>
        </div>

        <div className={styles.value_group}>
        </div>

        <div className={styles.value_group}>
        </div>
      </div>


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
