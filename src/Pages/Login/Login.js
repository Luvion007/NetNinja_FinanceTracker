//css styling
import styles from './Login.module.css'



//component
import React, { useState } from 'react'
import { useLogIn } from '../../Hooks/useLogIn'

export default function Login() {
  const [Email, setEmail] = useState('') 
  const [Password, setPassword] = useState('')
  const {login, pending, error } = useLogIn()
  const handleSubmit = (e) => {
    e.preventDefault()
    login(Email, Password)
  }
  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email: </span>
          <input 
          type='email'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={Email}
          />
          <span>Password: </span>
          <input type='password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={Password}
          />
        </label>
        {!pending && <button className='btn' >login</button>}
        {pending && <button className='btn' disabled>loading</button>}
        {error && <p>{error}</p>}
      
    </form>
  )
}
