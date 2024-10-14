//CSS styling
import styles from './Navbar.module.css'

//Component
import React from 'react'
import {Link} from 'react-router-dom'
import { useLogOut } from '../Hooks/useLogOut'
import { useAuthContext } from '../Hooks/useAuthContext'

export default function Navbar() {
  const { user } = useAuthContext()
  const { logout } = useLogOut()
  return (
    
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>myMoneyApp</li>
            {!user && (
            <>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
            </> 
          )}

          {user && (
            <>
            <li>{user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>Log Out</button>
            </li>
            </>
            )}


        </ul>
      
    </nav>
  )
}
