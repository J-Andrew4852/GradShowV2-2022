// IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ==================================================================== // 

// STYLES =============================================================================== // 
import styles from './styled-header.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Layout component
Author: Logan Trundle
Collaborators: 

Description: 
- Generate a section in the the designed style
- Allows user to dictate spacing of lines
- Accepts: {
    lineOneText: string,
    lineOnePos: int,
    lineTwoText: string,
    lineTwoPos: int,

    sectionNumber?: string
}
*/

export const StyledHeader = ({lineOneText, lineTwoText, sectionNumber}) => {
    
    return (
      <div className={`left-align ${styles.container}`}>
            {sectionNumber && <div className={styles.number}>{sectionNumber}</div>}
              <h2>
                  <span className='color-green heading light left-align'>{lineOneText}</span>
                  <br/>
                  <span className='color-green heading semi-bold left-align'>{lineTwoText}</span>
              </h2>
      </div>
    )
  }
  