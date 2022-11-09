// IMPORTS ============================================================================== // 
import Head from 'next/head'

// COMPONENT IMPORTS ==================================================================== // 

// STYLES =============================================================================== // 
import styles from './example-component.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Example component
Author: Logan Trundle
Collaborators: 

Description: 
- Example component to illustrate file structure.
*/

export const ExampleComponent = ({name}) => {
  return (
    <div className={styles.container}>
        <p>Example Component</p>
        <p>Hello {name}</p>
    </div>
  )
}
