// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// COMPONENT IMPORTS ==================================================================== // 
import gradImage from '../../public/assets/images/graduate_image_placeholder.JPG'


// STYLES =============================================================================== // 
import styles from '../../styles/SingleGraduate.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Individual graduate page
Collaborators: Logan Trundle, James Andrew

Description: 
- Show graduate headshot, bio, and links to social media 
- Showcase images of student work
*/

const MasonryJS = dynamic(() => import("../../components/MasonryJS/Masonry").then(mod => mod.MasonryJS), { ssr: false });

export default function GraduatemDetail({ graduate }) {

    return (
        <div className={styles.graduatePageContainer}>
            <Head>
                <title>{graduate.preferredName} {graduate.lastName} || Exhibition Space</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.graduateContent}>
                <div className={styles.leftSplit}>
                    <div className={styles.gradImageContainer}>
                        <Image className={styles.graduateImage} src={gradImage} alt="Graduate Image" layout={'responsive'} width={783} height={1175}/>
                    </div>
                </div>
                <div className={styles.rightSplit}>
                    <section className={`${styles.hero}`}>
                        <div className={styles.heading_group}>
                            <div className={`${styles.hero_title}`}>
                                <h1 className='heading bold'>{graduate.preferredName} {graduate.lastName}</h1>
                                <h3 className={`regular ${styles.hero_subtitle}`}>{graduate.major[0]} {graduate.major[1]}</h3>
                            </div>
                        </div>
                    </section>
                    <div className={`subheading text-med`}>{graduate.bio}</div>
                    <div className={styles.description}>After a short career in mechanical engineering I came to the realisation that what I truly loved about physics was the beauty of fluid, dynamic motion. It’s part of the reason I’ve been obsessed with birds all my life, and the reason I finally decided to follow my passion for animating. Having studied motion graphics, 3D animation and even dabbled in stop-motion, my particular passion is still based in 2D hand drawn animation. I love the creative freedom and insanity of using unrealistic lines, gestural shapes and tactile mediums to elicit authentic emotional responses. My dream going forward is to learn from and work with other animators and creators to tell wild and passionate stories of small things. My favourite projects are those where art, music and science meet, and people of multiple disciplines come together more  lines, gestural shapes and tactile mediums to elicit.lines, gestural shapes and tactile mediums to elicit stural shapes </div>
                    <div className={styles.linksBar}>
                        <div className={styles.socialLinks}>
                            <a></a>
                            <a></a>
                            <a></a>
                        </div>
                        <div className={styles.portfolioBtn}>Portfolio</div>
                    </div>
                </div>
            </div>
            <div className={styles.graduateImageGrid}>
                <div className={styles.graduateImages}>
                    <MasonryJS />
                </div>
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