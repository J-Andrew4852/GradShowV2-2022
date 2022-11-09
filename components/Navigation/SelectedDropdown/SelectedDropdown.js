// IMPORTS ============================================================================== // 
import Image from 'next/image'
import { useRef, useState } from 'react'

// COMPONENT IMPORTS ==================================================================== // 
import { Caret, Star } from '../../icons/Icons'


// STYLES =============================================================================== // 
import styles from './selected-dropdown.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: Selected Dropdown
Author: Logan Trundle
Collaborators: 

Description: 
- Open and close to show if any students have been selected
*/

export const SelectedDropdown = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [starredStudents, setStarredStudents] = useState([])

    const handleClick = () => {
            setIsOpen(!isOpen)
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <Star filled />
            <Caret direction={isOpen ? 'up' : 'down'} />

            {isOpen && 
                <div className={styles.dropdown}>
                    {/* TODO: access local stoage data and map starred students */}
                    {starredStudents.map(student => (
                        <div key={student.id}  className={styles.student}>
                            <div className={styles.student_data}>
                                <div className={styles.student_image}>
                                    <Image src={`/../../public/assets/images/${student.avatar}`} width={1365} height={2048} alt="" sizes='50px'/>
                                </div>
                                <p className='text-small'>{student.name}</p>
                            </div>
                            <div>x</div>
                        </div>
                    ))}
                </div>  
            }
        </div>
    )
}
