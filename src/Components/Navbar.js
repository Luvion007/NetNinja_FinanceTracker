//CSS styling
import styles from './Navbar.module.css'

//Component
import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>myMoney</li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>


        </ul>
      
    </nav>
  )
}
