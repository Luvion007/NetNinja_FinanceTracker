//css styling
import styles from './Signup.module.css'

//component
import React, { useState } from 'react'


export default function Signup() {
  const [Email, setEmail] = useState(" ")
  const [Password, setPassword] = useState(" ")
  const [DisplayName, setDisplayName] = useState(" ")
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(DisplayName, Email, Password)
  }
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>
        <label>Display Name:
        <input 
        type='text'
        onChange={(e) => setDisplayName(e.target.value)}
        value={DisplayName}
        /> 

        </label>
       
        <label>Email: 
        <input 
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={Email}
        />
        </label>
       
        <label>Password: 
        <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={Password}
        />
        </label>
        <button className='btn'>Submit</button>
        
      
    </form>
  )
}
