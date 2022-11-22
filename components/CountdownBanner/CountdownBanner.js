// IMPORTS ============================================================================== // 
import { useEffect, useRef, useState } from 'react'
import { RocketShipIcon } from '../icons/Icons';
import { useInView } from 'react-intersection-observer';

// COMPONENT IMPORTS ==================================================================== // 

// STYLES =============================================================================== // 
import styles from './countdownBanner.module.css'

// OVERVIEW ============================================================================= // 
/* 
Name: CountdownBanner
Author: Ben Crook
Collaborators: Logan Trundle

Description: 
- 
*/

export const CountdownBanner = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const { ref, inView} = useInView({
    threshold: 0.2,
    fallbackInView: true,
    rootMargin: '-400px 0px',
    triggerOnce: true,
  });

  useEffect(() => {
    const target = new Date("11/25/2022 16:00:00")

    const keepDoubleDigit = (n) => {
      return (n < 10 ? "0" : "") + n;
    }

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = keepDoubleDigit(Math.floor(difference / (1000 * 60 * 60 * 24)))
      setDays(d)

      const h = keepDoubleDigit(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setHours(h)

      const m = keepDoubleDigit(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
      setMinutes(m)

      const s = keepDoubleDigit(Math.floor((difference % (1000 * 60)) / (1000)))
      setSeconds(s)

    }, 1000);

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.banner_wrapper}>
      <div className={styles.banner_subContainer}>
      <div className={styles.left_content}>

        <RocketShipIcon size='45' animate={inView && seconds === '00'}/> 

        <div className={styles.timer_wrapper} ref={ref}>

          <div className={`${styles.introText} ${inView ? styles.introTextHide : ''}`}>
            <h3>Countdown to 
              <br />
              launch:</h3>
          </div>

          <div className={`${styles.countdownContainer} ${inView ? styles.countdownReveal : '' }`}>
            <div className={`${styles.countdown}`}>
              <div>
                <div>{days}</div>
              </div>
              <div>:</div>
              <div>
                <div>{hours}</div>
              </div>
              <div>:</div>
              <div>
                <div>{minutes}</div>
              </div>
              <div>:</div>
              <div>
                <div>{seconds}</div>
              </div>
            </div>

            <div className={`${styles.countdown_text}`}>
              <div>days</div>
              <div> &nbsp;</div>
              <div>hours</div>
              <div> &nbsp;</div>
              <div>mins</div>
              <div> &nbsp;</div>
              <div>secs</div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.details_wrapper}>
        <p className='text-med right-align'>25.11.2022 | 18:00 - 20:30</p>
        <a  href="https://link.mazemap.com/0Sto189P" target="_blank" rel="noreferrer" className='text-med right-align'>Building 202, Curtin University</a>
      </div>
      </div>
    </div>
  )
}