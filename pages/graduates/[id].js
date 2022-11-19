// IMPORTS ============================================================================== // 
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// COMPONENT IMPORTS ==================================================================== // 
import gradImage from '../../public/assets/images/graduate_image_placeholder.JPG'
import gradPatch from '../../public/assets/images/Badges/digex_patch.png'
import { OutlineBtn } from "../../components/Buttons/Button";
import { Star, Arrow } from "../../components/icons/Icons";
import { MasonryComp } from '../../components/Masonry/Masonry'
import { Socials } from '../../components/Socials/Socials'
// import gradHero from 'https://drive.google.com/uc?export=view&id=102DhDeowwOoReVS--oT2mD9MKcchvNCk'

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
function slicer() {
    var hero = 'https://drive.google.com/file/d/102DhDeowwOoReVS--oT2mD9MKcchvNCk/view'
    let slicedHero = hero.slice(32, 65)
    console.log(slicedHero)
    let sauceHero = `https://drive.google.com/uc?export=view&id=${slicedHero}`
    console.log(sauceHero)
    return sauceHero
}
var sauceHero = slicer()

var social1 = 'https://twitter.com/JamesADigital'
var social2 = 'https://github.com/J-Andrew4852'
var social3 = 'https://www.instagram.com/james.andrew4852/'
var social4 = 'https://badverynotgoodlink'

var socials = [social1, social2, social3, social4]

socials.forEach(linkToIcon)

function linkToIcon(item) {
    if (item.match("twitter") !== null) {
        console.log("selected twitter")
    }
    else if (item.match("github") !== null) {
        console.log("selected github")
    }
    else if (item.match("instagram") !== null) {
        console.log("selected instagram")
    }
    else {
        console.log("selected global")
    }
    // console.log(item.match("twitter"));
    // console.log(item.match("github"));
    // console.log(item.match("instagram"));
}


// console.log(social1.search(regexT), );

export default function GraduatemDetail({ graduate, data }) {
    
    // console.log(graduate)

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
                        <Image src={gradImage} alt="Graduate Image" layout={'fill'} objectFit="cover" width={783} height={1175}/>
                    </div>
                    
                    <div className={styles.graduate_photo_small}>
                        <Image src={gradImage} alt="Graduate Image" layout={'fill'} objectFit="cover" width={167} height={250}/>
                    </div>

                    <div className={styles.graduate_title}>
                        <div className={styles.graduate_major_patch}>
                            <Image src={gradPatch} alt="Graduate Major Patch" layout="responsive" width={225} height={227}/>
                        </div>
                        <h1 className={`${styles.graduate_name} heading bold text-2xl `} >{graduate.preferredName} {graduate.lastName}</h1>
                        <h3 className={`${styles.graduate_major} regular text-reg`}>{graduate.major[0]}<br/> {graduate.major[1]}</h3>
                        <div className={`${styles.graduate_bio} subheading bold text-med`}>{graduate.shortBio}</div>
                    </div>

                    <div className={styles.graduate_details}>
                        <div className={styles.graduate_description}>{graduate.longBio}</div>
                        <div className={styles.graduate_links}>
                            <div className={styles.socialLinks}>
                                <Socials key={graduate._id} data={graduate}/>
                            </div>
                            { /* UPDATE BUTTON WITH MAJOR INFORMATION AND LINK TO PORTFOLIO SITE */}
                            <div className={styles.portfolio_link}>
                                <OutlineBtn external height="thin" text='Portfolio'/>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.graduateImageGrid}>
                    <div className={styles.graduateImages}>
                        <div className={styles.heroContainer}>
                            <img className={styles.gradHeroImage} alt="Example of graduate's work" src={graduate.heroImage}/>
                            {/* <Image alt="Example of graduate's work" src={data.heroImage} layout="fill" objectFit="cover" placeholder="blur" blurDataURL={placeholder} priority/> */}
                        </div>
                        {/* <div className={styles.gradHero}>
                            <Image src={sauceHero} layout='fill' objectFit='contain' />
                        </div> */}
                        <MasonryComp/>
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
}7