//css styling
import styles from './Login.module.css'



//component
import React, { useState } from 'react'

export default function Login() {
  const [Email, setEmail] = useState('') 
  const [Password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Email, Password)
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
        <button className='btn'>Submit</button>
      
    </form>
  )
}
