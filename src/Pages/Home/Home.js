//css styling
import styles from './Home.module.css'

//component
import React from 'react'
import Transactionform from './Transactionform'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useCollection } from '../../Hooks/useCollection'
import TransactionList from './TransactionList'




export default function Home() {
  const { user } = useAuthContext()
  const {document, error} = useCollection('transactions',
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  ) 
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          Transaction List
          {error && <p>{error}</p>}
          {document &&  <TransactionList transactions = {document}/>}
        </div>
        <div className={styles.sidebar}>
          <Transactionform uid={user.uid}/>

        </div>
    </div>
  )
}
