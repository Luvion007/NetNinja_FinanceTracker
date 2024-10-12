//css styling
import styles from './Home.module.css'

//component
import React from 'react'
import Transactionform from './Transactionform'


export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          Transaction List

        </div>
        <div className={styles.sidebar}>
          <Transactionform/>

        </div>
    </div>
  )
}
