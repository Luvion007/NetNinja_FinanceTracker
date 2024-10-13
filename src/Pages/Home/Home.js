//css styling
import styles from './Home.module.css'

//component
import React from 'react'
import Transactionform from './Transactionform'
import { useAuthContext } from '../../Hooks/useAuthContext'



export default function Home() {
  const { user } = useAuthContext()
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          Transaction List

        </div>
        <div className={styles.sidebar}>
          <Transactionform uid={user.uid}/>

        </div>
    </div>
  )
}
