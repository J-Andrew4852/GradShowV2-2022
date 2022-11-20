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
  const [alpSelects, setAlpSelects] = useState('Random')
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] =useState('')

  function openGradFolder(graduate) {
    setSelectedGraduate(graduate);
    setClicked(true);
  }

  function closeGradFolder() {
    setSelectedGraduate(null);
    setClicked(false);
  }

  useEffect(() => {
    if (selectedMajor === 'All Graduates') {
      // console.log('working')
      for (let i = graduates.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = graduates[i];
        graduates[i] = graduates[j];
        graduates[j] = k;
      }
      setFiltered(graduates);
      return;
    }
    const filtered = graduates.filter((graduate) => 
      graduate.major.includes(selectedMajor)
    )
    for (let i = filtered.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = filtered[i];
      filtered[i] = filtered[j];
      filtered[j] = k;
    }
    setFiltered(filtered)
  },  [selectedMajor])

  // console.log(filtered)

  // useEffect(() => {
  //   if (alpSelects === 'random') {
  //     console.log(alpSelects)
  //     console.log(filtered)
  //     for (let i = filtered.length -1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * (i+1));
  //       let k = filtered[i];
  //       filtered[i] = filtered[j];
  //       filtered[j] = k;
  //     }
  //     setSorted(filtered);
  //     console.log(filtered)
  //     return;
  //   } else {
  //     console.log(alpSelects)
  //     filtered.sort(( a, b ) => {
  //       const nameA = a.preferredName.toUpperCase(); 
  //       const nameB = b.preferredName.toUpperCase();
  //       console.log(nameA)
  //       if (nameA < nameB) {
  //         return -1;
  //       }
  //       if (nameA > nameB) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //     if (alpSelects === 'z-a') {
  //       console.log(alpSelects)
  //       filtered.slice().reverse();
  //       console.log(filtered)
  //       setSorted(filtered);
  //       return;
  //     } 
  //     setSorted(filtered);
  //     return;
  //   }
  // },  [filtered, alpSelects, selectedMajor])

  // console.log(sorted)

  // console.log(alpSelects)
  // console.log(selectedMajor)

  // console.log(graduates);

  return (
    <div className={styles.container}>
      <Head>
        <title>Graduates || Exhibition Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* HEADING SECTION */}
      <section className={`${styles.hero} center-align `}>
        <div className={styles.heading_group}>
          <h3 className={`regular text-reg`}>GRADUATES</h3>
          <h1 className='heading text-4xl black'>{selectedMajor}</h1>
        </div>

        <select onChange={(e) => { setSelectedMajor(e.target.value) }} value={selectedMajor} name="majors" id="majors"> 
          <option value="All Graduates">All Graduates</option>
          <option value="Digital Experience and Interaction Design">DIGEX</option>
          <option value="Animation and Game Design">AGD</option>
          <option value="Graphic Design">GRFX</option>
        </select>
      </section>


      {/* SHOWREEL */}
      <div className={styles.gradShowreel}></div>

      {/* FILTER BAR */}
      <div className={styles.filterBar}>
        <div className={styles.filterBar_subContainer}>

          <div className={styles.filters}>
            <input type='text' label='search' name='search' onChange={(e) =>setSearch(e.target.value.toLowerCase())} placeholder='Search Graduates...' />

            <select name="alphabet" id="alphabet" value={alpSelects} onChange={e=>setAlpSelects(e.target.value)}>
              <option value="random">Random</option>
              <option value="a-z">Alphabetical (A-Z)</option>
              <option value="z-a">Alphabetical (Z-A)</option>
            </select>

            <select name="majors" id="majors" value={selectedMajor} onChange={e=>setSelectedMajor(e.target.value)}>
              <option value="All Graduates">All Graduates</option>
              <option value="Digital Experience and Interaction Design">DIGEX</option>
              <option value="Animation and Game Design">AGD</option>
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
            
            {filtered.filter((graduate) => {
              const combinedName = graduate.preferredName + ' ' + graduate.lastName; 
              console.log(combinedName)
              return search.toLowerCase() === '' 
              ? graduate 
              : combinedName.toLowerCase().includes(search)
            }).map((graduate) => (
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

        {selectedGraduate && <GradFolder data={selectedGraduate} onClose={closeGradFolder} />}
        </div>
      </section>

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