//css styling
import styles from './Signup.module.css'

//component
import React, { useState } from 'react'
import { useSignUp } from '../../Hooks/useSignUp'


export default function Signup() {
  const [Email, setEmail] = useState(" ")
  const [Password, setPassword] = useState(" ")
  const [DisplayName, setDisplayName] = useState(" ")
  const {signup, pending, error} = useSignUp()
  const handleSubmit = (e) =>{
    e.preventDefault()
    signup( Email, Password, DisplayName)
  }
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>
      
       
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

        <label>Display Name:
        <input 
        type='text'
        onChange={(e) => setDisplayName(e.target.value)}
        value={DisplayName}
        /> 

        </label>
        {!pending && <button className='btn' >Signup</button>}
        {pending && <button className='btn' disabled>loading</button>}
        {error && <p>{error}</p>}
        
      
    </form>
  )
}
