import React from 'react'
import styles from './IntroSection.module.scss'

export const IntroSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>ИГРАЙ С НАМИ</h1>
        <h2 className={styles.titleSecond}>УЖЕ СЕЙЧАС</h2>
      </div>
    </section>
  )
}
