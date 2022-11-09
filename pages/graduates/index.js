// IMPORTS ============================================================================== // 
import Head from 'next/head'
import { useEffect, useState } from 'react'

// COMPONENT IMPORTS ==================================================================== // 
import { GraduateCard } from '../../components/GraduateCard/GraduateCard'
import { GradFolder } from '../../components/sideFolder/SideFolder'

// STYLES =============================================================================== // 
import styles from '../../styles/Graduates.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Graduates main page
Collaborators: Logan Trundle, James Andrew, Rachael Moriconi

Description: 
- List out all graduates 
- Link to individual graduates page
- Create side peek of graduate
- Showcase showreels of each major
*/

export default function Graduates({ graduates }) {
  const [selectedMajor, setSelectedMajor] = useState('All Graduates')
  const [selectedGraduate, setSelectedGraduate] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [listView, setListView] = useState(false)

  function openGradFolder(graduate) {
    setSelectedGraduate(graduate);
    setClicked(true);
  }

  function closeGradFolder() {
    setSelectedGraduate(null);
    setClicked(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Graduates || Exhibition Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* HEADING SECTION */}
      <section className={`${styles.hero} center-align `}>
        <div className={styles.heading_group}>
          <h3 className={`regular text-med2`}>viewing:</h3>
          <h1 className='heading bold text-4xl'>{selectedMajor}</h1>
        </div>

        <select onChange={(e) => { setSelectedMajor(e.target.value) }} name="majors" id="majors">
          <option value="All Graduates">All Graduates</option>
          <option value="Digital Experience & Interaction Design">DIGEX</option>
          <option value="Animation & Game Design">AGD</option>
          <option value="Graphic Design">GRFX</option>
        </select>
      </section>


      {/* SHOWREEL */}
      <div className={styles.gradShowreel}></div>

      {/* FILTER BAR */}
      <div className={styles.filterBar}>
        <div className={styles.filterBar_subContainer}>

          <div className={styles.filters}>
            <input type='text' label='search' name='search' placeholder='Search Graduates...' />

            <select name="majors" id="majors">
              <option value="random">Random</option>
              <option value="a-z">Alphabetical (A-Z)</option>
              <option value="z-a">Alphabetical (Z-A)</option>
            </select>

            <select name="majors" id="majors">
              <option value="All Graduates">All Graduates</option>
              <option value="Digital Experience & Interaction Design">DIGEX</option>
              <option value="Animation & Game Design">AGD</option>
              <option value="Graphic Design">GRFX</option>
            </select>
          </div>

          <div className={styles.layoutBar}>
            <div onClick={() => { setListView(false) }}>
              <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="12.4483" height="12.4483" stroke="#141414" fill={!listView ? "#141414" : 'none'} />
                <rect x="0.5" y="17.0516" width="12.4483" height="12.4483" stroke="#141414" fill={!listView ? "#141414" : 'none'} />
                <rect x="17.0517" y="0.5" width="12.4483" height="12.4483" stroke="#141414" fill={!listView ? "#141414" : 'none'} />
                <rect x="17.0517" y="17.0516" width="12.4483" height="12.4483" stroke="#141414" fill={!listView ? "#141414" : 'none'} />
              </svg>
            </div>
            <div onClick={() => { setListView(true) }}>
              <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="29" height="7" stroke="#141414" fill={listView ? "#141414" : 'none'} />
                <rect x="0.5" y="22.5" width="29" height="7" stroke="#141414" fill={listView ? "#141414" : 'none'} />
                <rect x="0.5" y="11.5" width="29" height="7" stroke="#141414" fill={listView ? "#141414" : 'none'} />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* GRADUATES LISTED SECTION */}
      <section className={styles.gradsSection}>
        <div className={clicked ? `${styles.sidebarOn}` : `${styles.sidebarOff}`}>

          <div className={listView ? `${styles.graduate_list}` : `${styles.graduate_grid}`}>
            {graduates.map((graduate) => (
                <div key={graduate._id}>
                  <GraduateCard handleClick={() => {
                    if (selectedGraduate?._id !== graduate._id) {
                    openGradFolder(graduate);
                  } else {
                    closeGradFolder();
                  }}} key={graduate._id} data={graduate} list={listView}/>
                </div>
              ))}
          </div>

        </div>
        {selectedGraduate && <GradFolder data={selectedGraduate} onClose={closeGradFolder} />}
      </section>

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://gradshow-backend-production.up.railway.app/students')
  const graduates = await res.json()

  return {
    props: {
      graduates,
    },
  }
}