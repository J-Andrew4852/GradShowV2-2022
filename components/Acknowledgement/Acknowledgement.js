// IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ==================================================================== // 

// STYLES =============================================================================== // 
import styles from './acknowledgement.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Acknowledgement of Country
Author: Logan Trundle
Collaborators: 

*/

export const Acknowledgement = () => {
  return (
    <div className={styles.container}>
        <p className='text-reg body-copy'>
            We would like to acknowledge the Whadjuk Noongar people whose land we are standing on and recognise the strength, resilience and capacity of the Noongar people where Curtin University is situated
        </p>
    </div>
  )
}
