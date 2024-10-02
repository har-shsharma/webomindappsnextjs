import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <span className={styles.heroTextHeading}>Distribute and manage insurance business in <span className={styles.highlightRed}>one platform</span></span>
          <p className={styles.heroTextSub}>Manage your insurance business seamlessly using Webomindapps assurance platform. Increase revenue, expand product offerings.</p>
          <button className={styles.heroCTAButton}>Schedule Demo &gt;</button>
        </div>
        <div className={styles.heroImage}></div>
      </div>
    </>
  )
}

export default Hero
