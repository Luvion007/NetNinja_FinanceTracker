import React, { useState } from 'react'

export default function Transactionform() {
    const [transName, setTransName] = useState("")
    const [amount, setAmount] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({transName, amount})
    }
  return (
    <>
    <h3>Add Transaction</h3>
    <form onSubmit={handleSubmit}>
        <label>
            <span>Transanction Name: </span>
            <input
            type='text'
            required
            onChange={(e) => setTransName(e.target.value)}
            value={transName}
            >
            </input>
        </label>
        <label>
            <span>Transanction Amount: </span>
            <input
            type='number'
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            >
            </input>
        </label>
        <button>add Transaction</button>

    </form>
      
    </>
  )
}
