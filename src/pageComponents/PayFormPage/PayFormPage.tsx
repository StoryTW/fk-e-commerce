import React from 'react'
import styles from './PayFormPage.module.scss'

export const PayFormPage = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Оплата товара</h1>
      <div className={styles.block}>
        <div className={styles.header}>
          <div className={styles.text}>
            Способы оплаты:
          </div>
          <div className={styles.tooltip}>
            
          </div>
        </div>
      </div>
    </div>
  )
}
