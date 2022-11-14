// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// COMPONENT IMPORTS ==================================================================== // 
import gradImage from '../../public/assets/images/graduate_image_placeholder.JPG'
import { OutlineBtn } from "../../components/Buttons/Button";
import { Star, Arrow } from "../../components/icons/Icons";

// STYLES =============================================================================== // 
import styles from '../../styles/SingleGraduate.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Individual graduate page
Collaborators: Logan Trundle, James Andrew, Rachael Moriconi

Description: 
- Show graduate headshot, bio, and links to social media 
- Showcase images of student work

TODO:
- Update portfolio button with major and link to portfolio site
*/


export default function GraduatemDetail({ graduate, data }) {
    
    return (
        <div className={styles.graduatePageContainer}>
            <Head>
                <title>{graduate.preferredName} {graduate.lastName} || Exhibition Space</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.arrow}>
                <Arrow size={22} direction="left"/>
            </div>

                <section className={styles.graduate_content}>

                    <div className={styles.graduate_photo}>
                        <Image src={gradImage} alt="Graduate Image" layout={'responsive'} width={783} height={1175}/>
                    </div>
                    
                    <div className={styles.graduate_photo_small}>
                        <Image src={gradImage} alt="Graduate Image" layout={'fixed'} width={167} height={250}/>
                    </div>

                    <div className={styles.graduate_title}>
                        <h1 className={`${styles.graduate_name} heading bold text-2xl `} >{graduate.preferredName} {graduate.lastName}</h1>
                        <h3 className={`${styles.graduate_major} regular text-reg`}>{graduate.major[0]} {graduate.major[1]}</h3>
                        <Star />
                        <div className={`${styles.graduate_bio} subheading text-med`}>{graduate.bio}extra words because i need this to take up more space lol words because i  need this to  lol words</div>
                    </div>

                    <div className={styles.graduate_details}>
                        <div className={styles.graduate_description}>After a short career in mechanical engineering I came to the realisation that what I truly loved about physics was the beauty of fluid, dynamic motion. It’s part of the reason I’ve been obsessed with birds all my life, and the reason I finally decided to follow my passion for animating. Having studied motion graphics, 3D animation and even dabbled in stop-motion, my particular passion is still based in 2D hand drawn animation. I love the creative freedom and insanity of using unrealistic lines, gestural shapes and tactile mediums to elicit authentic emotional responses. My dream going forward is to learn from and work with other animators and creators to tell wild and passionate stories of small things. My favourite projects are those where art, music and science meet, and people of multiple disciplines come together more  lines, gestural shapes and tactile mediums to elicit.lines, gestural shapes and tactile mediums </div>
                        <div className={styles.graduate_links}>
                            <div className={styles.placeholder_social}></div>
                            <div className={styles.placeholder_social}></div>
                            <div className={styles.placeholder_social}></div>
                            <div className={styles.placeholder_social}></div>
                            { /* UPDATE BUTTON WITH MAJOR INFORMATION AND LINK TO PORTFOLIO SITE */}
                            <div className={styles.portfolio_link}>
                                <OutlineBtn external height="thin" text='Portfolio'/>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.graduateImageGrid}>
                    <div className={styles.graduateImages}></div>
                </div>

        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://gradshow-backend-production.up.railway.app/students')
    const graduates = await res.json()

    const paths = graduates.map((graduate) => ({
        params: { id: graduate._id.toString() },
    }))
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://gradshow-backend-production.up.railway.app/students/${params.id}`)
    const graduate = await res.json()
    return { props: { graduate } }
}