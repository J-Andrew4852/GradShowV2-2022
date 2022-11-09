import { useEffect } from 'react'
import styles from './credits-list.module.css'

export const CreditsList = ({title, members}) => {

  return (
    <div className={styles.container}>
      <h3 className='text-med2 bold'>{title}</h3>
      {members.map((member, index) => (
      <li className='text-reg regular body-copy' key={index}>{member}</li>
      ))}
    </div>
  )
}
